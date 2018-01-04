<template>
  <div class="selection-wrap">
    <div class="selection-show">
      <span>{{ selections[nowIndex].label }}</span>
      <div class="arrow" @click="toggleDrop"></div>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
        <!-- <li>1</li>
        <li>2</li>
        <li>3</li> -->
        <li v-for="(item,index) in selections" @click="chooseSelections(index)">{{ item.label }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
  props:{
    selections:{
      type:Array,
      default:[{
        label:'test',
        value:0
      }]
    }
  },
  created:function () {
    console.log(this.selections);
  },
  data(){
    return{
      nowIndex:0,
      isDrop:false
    }
  },
  methods:{
    toggleDrop(){
      this.isDrop = !this.isDrop;
    },
    chooseSelections(index){
      this.nowIndex = index;
      this.isDrop = !this.isDrop;
      this.$emit('on-change',nowIndex);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selection-wrap{
  position: relative;
  display: inline-block;
}
.selection-show{
  border:1px solid #e3e3e3;
  padding:0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  background: #fff;
}
.selection-show .arrow {
  display: inline-block;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #e3e3e3;
  width: 0;
  height: 0;
  margin-top: -1px;
  margin-left: 6px;
  margin-right: -14px;
  vertical-align: middle;
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  background: #fff;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  cursor: pointer;
  background: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
/* .selection-show{
  position: relative;
  width: 100%;
  height: 25px;
  border:1px solid #eee;
  text-align: left;
}
.arrow{
  border:10px solid transparent;
  border-top: 10px solid #eee;
  position: absolute;
  top: 5px;
  right: 5px;
}
.selection-list{
  width: 100%;
  float: left;
}
.selection-list ul{
  border-bottom: 1px solid #eee;
  position: absolute;
  top: 25px;
  left: 0;
} */
</style>
