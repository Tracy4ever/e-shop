<template>
  <div>
    <div class="dialog-wrap" >
      <div class="dialog-cover" v-if="isShow" @click="closemyself"></div>
      <transition name="drop">
      <div class="dialog-content" v-if="isShow">
        <div class="dialog-close" @click="closemyself">x</div>
        <slot>hello</slot>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {

    }
  },
  methods:{
    closemyself(){
      this.$emit('onclose');
    }
  }
}
</script>


<style>
.drop-enter-active{
  transition: all .5s ease;
}
.drop-leave-active{
  transition: all .3s ease;
}
.drop-enter{
  transform: translateY(-500px);
}
.drop-leave-to{
  transform: translateY(-500px);
}

.dialog-wrap{
  /* width: 400px;
  height: 50px; */
  position:fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover{
  background: #000;
  opacity: .3;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width:100%;
  height: 100%;
}
/* .dialog-content{
  position:absolute; 
  width: 400px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  color: #eee;
  margin-top:150px;
  margin:0 auto;
} */
.dialog-content{
  width: 50%;
  position: fixed;
  max-height: 50%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left:-25%;
  z-index: 10;
  border:2px solid #464068;
  padding:2%;
  line-height: 1.6;
}
.dialog-close{
  position:absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  line-height: 20px;
  width: 20px;
  height: 20px;
  cursor:pointer;
}
</style>
