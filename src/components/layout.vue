<template>
  <div>
    <div class="app-header">
      <div class="app-head-inner">
        <router-link :to="{ path:'/' }" active-class="active">
          <img src="../assets/trasonlogo.png" class="app-head-logo">          
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li v-if="username !== ''">{{ username }}</li>
            <li v-if="username !== ''" class="nav-pile">|</li>
            <li v-if="username !== ''" @click="quit">退出</li>

            <li v-if="username === ''" @click="clicklog">登录</li>
            <li v-if="username === ''" class="nav-pile">|</li>
            <li v-if="username === ''" @click="clickreg">注册</li>
            <li v-if="username !== ''" class="nav-pile">|</li>
            <li v-if="username === ''" class="nav-pile">|</li>
            <li @click="clickabout">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-footer">
      <p>&copy;2017 Tracy</p>
    </div>
    <my-dialog :isShow="isShowAboutDialog" @onclose="closedialog('isShowAboutDialog')">
      <p>春田花花彩妆馆，为大学生准备的化妆馆。</p>
    </my-dialog>

    <my-dialog :isShow="isShowRegDialog" @onclose="closedialog('isShowRegDialog')">
      <reg-form>reg</reg-form>
    </my-dialog>

    <my-dialog :isShow="isShowLogDialog" @onclose="closedialog('isShowLogDialog')">
      <log-form @haslog="onsuccesslog">log</log-form>
    </my-dialog>
  </div>
</template>

<script>
import Dialog from './dialog';
import RegForm from './reg-form';
import LogForm from './log-form';

export default {
  components:{
    MyDialog:Dialog,
    RegForm,
    LogForm
  },
  data () {
    return {
      isShowAboutDialog:false,
      isShowRegDialog:false,
      isShowLogDialog:false,
      username:''
    }
  },
  methods:{
    clickabout(){
      this.isShowAboutDialog=true;
    },
   /* closeabout(){
      this.isShowAboutDialog=false;
    },*/
    clickreg(){
      this.isShowRegDialog=true;
    },
    /*closereg(){
      this.isShowRegDialog=false;
    },*/
    clicklog(){
      this.isShowLogDialog=true;
    },
   /* closelog(){
      this.isShowLogDialog=false;
    }*/
    closedialog(attr){
      this[attr] = false;
    },
    onsuccesslog(data){
      console.log(data);
      this.closedialog('isShowLogDialog');
      this.username = data.username;
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
/* .clear:after{
  content:'';
  float: left;
  clear: both;
} */
body{
  background:#f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3";
  font-size: 14px;
  color: #444;
  overflow-x: hidden; 
}
.app-header{
  width: 100%;
  height: 80px;
  background-color: #434242;
}
.app-head-logo{
  width: 200px;
  height: 80px;
  margin-left: 163px;
}
.head-inner{
  position:relative;
}
.head-nav{
  float: right;
  margin-right: 163px;
  position: absolute;
  right: 0px;
  top: 0;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  /*color: #FCE129;*/
  color:#E2E2E2;
  cursor: pointer;
  display: inline-block;
  list-style: none;
  line-height: 80px;
}
.nav-pile {
  padding: 0 10px;
}
.app-footer{
  background-color: #E1E1E1;
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
.g-form{

}
.g-form-line{
  padding:15px 0;
}
.g-form-label{
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input{
  display: inline-block;
}
.g-form-input input{
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border:1px solid #ccc;
}
.g-form-btn{
  padding-left: 105px;
}
/* .button{
  background: #72C7F1;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
} */
.button{
  background: #72C7F1;
  color: #fff;
  display: inline-block;
  padding: 5px 15px;
  cursor: pointer;
  text-decoration: none;
}
.g-form-error{
  color: red;
  padding-left:15px;
}
</style>
