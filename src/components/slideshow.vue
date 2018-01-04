 <template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <!-- transition的触发有v-if、v-show、动态组件、还有router可以触发。 -->
        <!-- 从goto()看出隐藏到显示；为进入的图片；nowIndex是新的值 -->
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src" alt="">
        </transition>
        <transition name="slide-trans-old">
          <!-- nowIndex是旧的值 -->
          <img v-if="!isShow" :src="slides[nowIndex].src" alt="">
        </transition>
          
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in slides" @click="goto(index)" :class="{on:index === nowIndex}">
        <a >{{ index + 1 }}</a>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  //从父组件接收什么数据,需要通过props声明才能使用
  props:{
    slides:{
      type:Array,
      default:[]
    },
    invTime:{
      type:Number,
      default:1000
    }
  },
  data () {
    return {
      nowIndex:1,
      isShow:true
    }
  } ,
  computed:{
    prevIndex () {
      if(this.nowIndex === 0){
        return this.slides.length-1; 
      }else{
        return this.nowIndex-1
      }
    },
    nextIndex () {
      if(this.nowIndex === this.slides.length-1){
        return 0;
      }else{
        return this.nowIndex+1;
      }
    }
  },
  methods:{
    goto (index) {
      this.isShow = false;
      setTimeout(()=>{
        this.isShow = true;
        this.nowIndex = index;
        this.$emit('in',index);
      },10)
    },
    runInv () {
      this.invId = setInterval(()=>{
        /*console.log(this.invTime);*/
        this.goto(this.nextIndex);
      },this.invTime)
    },
    clearInv () {
      clearInterval(this.invId);
    }
  },
  mounted(){
    this.runInv();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-show{
  width: 820px;
  height: 300px;
  position: relative;
  /* margin:15px 15px 15px 0; */
  margin-bottom: 10px;
  overflow: hidden;
}
.slide-img{
  width: 820px;
  /*height: 300px;*/
}

.slide-img img{
position: absolute;
bottom: 0;
  width: 820px;
  height: 300px;
}
h2{
  box-sizing: border-box;
  padding-left:15px; 
  width: 820px;
  line-height: 25px;
  color: #fff;
  background-color:rgba(0,0,0,0.5);
  position:absolute;
  bottom: 0;
  left: 0;
}
.slide-pages{
  list-style: none;
  position: absolute;
  right: 0;
  bottom: 0;
}
.slide-pages li{
  display: inline-block;
  color: #fff;
  width: 25px;
  text-align:center;
  line-height: 25px;
  margin-right: 5px;
  cursor: pointer;
}
.slide-pages li a{
  width: 16px;
}
.on{
  /*text-decoration: underline;*/
  background-color: #000;
  border-radius: 12.5px;
}
.slide-trans-enter-active{
  transition: all .5s;
}
.slide-trans-enter{
  transform:translateX(820px); 
}
.slide-trans-old-leave-active{
  transition: all .5s;
}
.slide-trans-old-leave-to{
  transform:translateX(-820px);
}
</style>

