<template>
  <div class="chooser-wrap">
    <ul class="chooser-list">
      <li 
      v-for="(item,index) in chosens" 
      @click="chooseitem(index)" 
      :class="{active:index===nowIndex}" >{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
export default{
  props:{
    chosens:{
      type:Array,
      default:[{
        label:'choose',
        value:0
      }]
    }
  },
  data(){
    return{
      nowIndex:0,
    }
  },
  methods:{
    chooseitem(index){
        this.nowIndex = index;
        this.$emit('on-change',this.chosens[index])      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-wrap{
  display: inline-block;
  position: relative;
}
/* .chooser-list{
  display: inline-block;
  text-align: center;
  text-decoration: none;
} */
.chooser-list li{
  height: 25px;
  line-height: 25px;
  display: inline-block;
  border:1px solid #e3e3e3;
  background: #fff;
  cursor: pointer;
  padding:0 10px 0 10px;
  margin-right: 15px;
  text-align: center;
}
.active{
  background: #f7fcff;
  border:1px solid #f7fcff;
  color: #fff;
}
</style>
