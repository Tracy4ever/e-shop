<template>
  <div class="selection-wrap">
    <div class="selection-show">
      <span>{{ selections[nowIndex].label }}</span>
      <div class="arrow" @click="toggleDrop"></div>
    </div>
    <div class="selection-list" v-if="isDrop">
      <ul>
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
      /*this.$emit('on-change',this.nowIndex);*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .selection-wrap{
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
} */
.selection-wrap{
  position: relative;
  display: inline-block;
}
.selection-show{
  border: 1px solid #e3e3e3;
  padding:0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 2px;
  background: #fff;
}
.arrow{
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid #e3e3e3;
  position: absolute;
  top: 11px;
  right: 4px;
  vertical-align: middle;
  display: inline-block;
}
.selection-list{
  display: inline-block;
  text-align: center;
  border-bottom:1px solid #e3e3e3;
  border-top:1px solid #e3e3e3;
  position: absolute;
  width: 100%;
  z-index: 5;
}
.selection-list li{
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  list-style: none;
  cursor: pointer;
  padding: 0 20px 0 10px;
  white-space: nowrap;/*该宽度内不换行*/
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fff

}
.selection-list li:hover{
  background: #e3e3e3;
}
</style>
