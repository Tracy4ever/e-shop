<template>
  <div class="content-wrap clear">
    <div class="content-left">
      <div class="content-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span class="hot" v-if="item.hot">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="content-left-block latest-news">
        <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
      </div>
    </div>
    <div class="content-right">
      <!-- slides传到子组件 -->
      <!-- 方法名小写，解决了$emit从子组件向父组件传递的问题-->
      <slide-show :slides="slides" :invTime="slideSpeed" @in="dosomethingonslidechange"></slide-show>
      <div class="content-right-board-list">
        <div 
        class="content-right-board-item" 
        v-for="(item,index) in boardList" 
        :class="[{'last-line' : index % 2 !==0 }, 'board-' + item.id]">
        <!-- :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]"> -->
          <div class="border-item-inner">
            <div class="board-title">{{item.title}}</div> 
            <div class="board-description">{{item.description}}</div>
            <div class="board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slideShow from '../components/slideShow';


export default {
  components:{//声明slideShow
    slideShow//跟标签名字一致，跟导入的一致
  },
  //生命周期中的一个
  created:function(){
    this.$http.get('api/getBoardList')
    .then((res)=>{this.boardList=res.data},
      (err)=>{console.log(err)})
  },
  methods:{
    dosomethingonslidechange(index){
      /*console.log("dosomethingonslidechange run!"+index)*/
    }
  },
  data () {
    return {
      slideSpeed:2000,
      slides:[
        {
          src:require('../assets/slideShow/pic1.jpg'),
          title:'xxx1',
          href:'detail/count'
        },
        {
          src:require('../assets/slideShow/pic2.jpg'),
          title:'xxx2',
          href:'detail/forecast'
        },
        {
          src:require('../assets/slideShow/pic3.jpg'),
          title:'xxx3',
          href:'detail/analysis'
        },
        {
          src:require('../assets/slideShow/pic4.jpg'),
          title:'xxx4',
          href:'detail/publish'
        }
      ],
      productList:{
        pc:{
          title:"pc应用",
          list:[
            {
              name:'数据统计',
              url:'detail/count'
            },
            {
              name:'数据预测',
              url:'detail/forecast'
            },
            {
              name:'流量分析',
              url:'detail/analysis',
              hot:true
            },
            {
              name:'广告发布',
              url:'detail/publish'
            }
          ]
        },
        app:{
          last:"true",
          title:"手机应用",
          list:[
            {
              name:"91助手",
              url:''
            },
            {
              name:"产品助手",
              url:'',
              hot:true
            },
            {
              name:'智能地图',
              url:''
            },
            {
              name:'团队语音',
              url:''
            }
          ]
        }
      },
      newsList:[
        {
          title:'数据统计',
          url:''
        },
        {
          title:'数据预测',
          url:''
        },
        {
          title:'流量分析',
          url:'',
          hot:true
        },
        {
          title:'广告发布',
          url:''
        }
      ],
      boardList:[]
      /*boardList:[
        {
          title:'开放产品',
          description:'开放产品是一款开放产品',
          saleout:false,
          id:'school'
        },
        {
          title:'品牌营销',
          description:'品牌营销帮助你的产品更好地找到定位',
          saleout:false,
          id:'boy'
        },
        {
          title:'使命必达',
          description:'使命必达快速迭代永远保持最前端的速度',
          saleout:false,
          id:'girl'
        },
        {
          title:'勇攀高峰',
          description:'帮你勇闯高峰，到达事业的顶峰',
          saleout:false,
          id:'girl2'
        }
      ]*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.content-wrap{
  width: 1040px;
  margin:0 auto;
  overflow-x: hidden; 
}
.content-left{
  float: left;
  width: 200px;
  margin-top: 20px;
  /* margin-left: 100px; */
}
.content-left h2{
  padding-left: 15px;
  background-color: #72C7F1;
  color: #fff;
  height: 35px;
  line-height: 35px;
}
.content-left-block {
  background-color: #fff;
  line-height: 24px;
  margin-bottom: 15px;
}
.content-left h3{
  background-color: #fff;
  padding: 15px 0 0 15px;
  /*height: 40px;
  line-height: 40px;*/
}
.content-left .hr{
  width: 200px;
  height: 1px;
  background-color: #72C7F1; 
  /* background-color: #FCE129; */
}
.content-left-block ul{
  padding: 5px 0 13px 20px;

}
.content-left-block ul>li{
  list-style: none;
}
.content-left-block ul>li a{
  text-decoration: none;
  color: #444;
}
.hot{
  color: #fff;
  background-color: red;
  font-size: 80%;
}
.latest-news{
  height: 300px;
}

.content-right{
  float: left;
  width: 820px;
  margin-top:20px;
  margin-left: 20px; 
}

.content-right-board-item{
  box-sizing: border-box;
  width: 400px;
  height: 150px;
  background-color: #fff;
  margin-right: 20px;
  margin-bottom: 20px; 
  float: left;
  padding:25px 10px 25px 0px;
}
.last-line{
  margin-right: 0;
}
.board-school .border-item-inner{
  background: url("/src/assets/1.jpg") no-repeat #fff;
  background-size: 90px 90px;
}
.board-boy .border-item-inner{
  background: url("/src/assets/2.jpg") no-repeat #fff;
  background-size: 90px 90px;
}
.board-girl .border-item-inner{
  background: url("/src/assets/3.jpg") no-repeat #fff;
  background-size: 90px 90px;
}
.board-girl2 .border-item-inner{
  background: url("/src/assets/4.jpg") no-repeat #fff;
  background-size: 90px 90px;
}
.border-item-inner{
  margin-left: 30px;
  padding-left: 120px;
  line-height: 30px;
}
.board-title{
  font-weight: bold;
  font-size: 15px;
}
.board-description{
  font-size: 13px;
}
/* .board-button{
  height: 30px;
  width: 85px;
  background-color: #72C7F1;
  text-align: center;
}
.button{
  color:#fff;
  line-height: 30px;
  text-decoration:none;
} */
</style>
