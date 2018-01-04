<template>
  <div>
    <div class="g-form">
      <div class="g-form-line">
        <div class="g-form-label">用户名</div>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ usernameErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-label">密码</div>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">注册</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel:'',
      passwordModel:'',
      errorText:''//所有写到html里面的数据都要
    }
  },
  computed:{
      usernameErrors(){
        let status,errorText,usernameFlag;
        if(!/@/g.test(this.usernameModel)){
          status = false;
          errorText = '用户名没有包含@';
        }else{
          status = true;
          errorText = '';
        };
        if(!this.usernameFlag){
          errorText = '';
          this.usernameFlag = true;
        };
        return{
          status,
          errorText
        }
      },
      passwordErrors(){
        let status,errorText,passwordFlag;
        if(!/^\w{8,12}$/g.test(this.passwordModel)){
          status = false;
          errorText = '密码不是8-12位';
        }else{
          status = true;
          errorText = '';
        };
        if(!this.passwordFlag){
          errorText = '';
          this.passwordFlag = true;
        };
        return{
          status,
          errorText
        }
      }
    },
    methods:{
      onLogin(){
        if(!this.usernameErrors.status||!this.passwordErrors.status){
          this.errorText = "部分选项未通过"
        }else{
          this.errorText = '';
          this.$http.get('api/login')
          .then((res)=>{
            this.$emit('haslog',res.data)
            console.log('logging');
          },(error)=>{
            console.log(error);
          })
        }
      }
    }
  }

</script>


<style>

</style>
