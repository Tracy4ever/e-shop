'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    /*proxy: config.dev.proxyTable,*/
    proxy: {
      '/api':{
        target:'http://localhost:8089',
        changeOrigin:true,
        pathRewrite:{'':''}
      }
    },

    /*proxyTable: {
          '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        },*/

    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

/*const jsonServer =require('json-server')
const apiServer = jsonServer.create()
const apiRouter = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults();
apiServer.use(middlewares)
apiServer.use('/api',apiRouter)
apiServer.listen(8081,function(){
  console.log('JSON Server is running!');
})*/


module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

const express = require('express');
const apiServer = express();
const bodyParser = require('body-parser');
//通过bodyParser引用json数据
apiServer.use(bodyParser.urlencoded({extended:true}));
apiServer.use(bodyParser.json());
const apiRouter = express.Router();
apiServer.use('/api',apiRouter);
//node的fs来读db.json
const fs = require("fs");
apiRouter.get('/',function(req,res){
  res.json({message:'hooray!welcome to our api!'})
});
apiRouter.route('/:apiName')//根目录下的apiName
//不管是get post delete都调用这个回调
.all(function(req,res){
  fs.readFile('./db.json','utf8',function(err,data){
    if(err) throw err;
    /*console.log(data.toString());*/
    var data = JSON.parse(data);//转化为js对象
    if(data[req.params.apiName]){//当前端口名存在
      //以json的形式返回当前端口名
      res.json(data[req.params.apiName]);
    }
    else{
      res.send('no such api name');
    }
  });
});

//监听端口
apiServer.listen(8089,function(err){
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8089');
})


