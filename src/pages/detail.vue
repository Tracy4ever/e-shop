<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="product-board">
				<img :src=productIcon>
				<ul>
					<router-link v-for="item in products" :to={path:item.path} tag="li" active-class="active">{{ item.name }}</router-link>
					<!-- <li v-for="item in products">{{ item.name }}</li> -->
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
 </template>

<script>
export default{
	computed:{
		productIcon(){
			/*console.log(this.$route.path,this.imgMap);*/
			return this.imgMap[this.$route.path];
		}
	},
	data(){
		return{
			products:[
				{
					name:"腮红",
					path:"count",
					active:false
				},
				{
					name:'粉底',
					path:"forecast",
					active:false
				},
				{
					name:"口红",
					path:"analysis",
					active:false
				},
				{
					name:"隔离",
					path:"publish",
					active:false
				}
			],
			imgMap:{
				'/detail/count':require("../assets/1.jpg"),
				'/detail/forecast':require("../assets/2.jpg"),
				'/detail/analysis':require("../assets/3.jpg"),
				'/detail/publish':require("../assets/4.jpg")
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.detail-wrap{
	width: 1040px;
	padding-top: 20px;
	margin:0 auto;
	overflow: hidden;/*使得wrap下的内容在框里面*/
}
.detail-left{
	width: 200px;
 	float: left;
 	text-align: center;
}
.detail-right{
	float: left;
	width: 820px;
	margin-left:20px;
}
.product-board{
	background-color: #fff;
	padding:15px 0; 
}
.product-board ul{
	margin-top:20px;
	list-style: none;
	
}
.product-board li{
	text-align: left;
	padding:10px 15px;
	cursor:pointer;
}
.product-board li.active,
.product-board li:hover{
	background: #72C7F1;
	color: #fff;
}
.priduct-board li a{
	display: block;
}
.product-board img{
	width: 110px;
	height: 110px;
}
/* .sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
  list-style: none;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
} */
.sales-board{
	background: #fff;
}
.sales-board-intro{
	width: 100%;
	margin-bottom: 10px;
}
.sales-board-intro h2{
	font-size: 20px;
	padding: 20px;
}
.sales-board-intro p{
	/* font-size: 15px; */
	color: #999;
	background: #f7fcff;
	line-height:1.8;
	padding:10px 20px;
}
.sales-board-form{
	padding:25px 20px;
	font-size: 14px;
	/* width: 100%; */
	/* padding-bottom: 5px; */
}
.sales-board-line{
	/* padding-left: 20px; */
	clear: both;
	padding-bottom: 20px;
	/* font-size: 15px; */
}
.sales-board-line-left{
	width: 100px;
	display: inline-block;
}
.sales-board-line-right{
	display: inline-block;
	width: 75%;
}
</style>
