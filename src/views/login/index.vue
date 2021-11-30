<!-- login -->
<template>
  <div class="container">
    <div class="logo_wrapper">
      <van-image
        width="100"
        height="100"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <van-form @submit="onSubmit" class="form_wrapper">
      <van-field
        v-model="username"
        name="username"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请输入密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  computed: {},

  mounted() {
  },

  methods: {
    onSubmit(values){
      login(values).then((res)=>{
        // 判断用户信息
        // 普通用户
        this.$router.push('/info')
        // 管理员
        // this.$router.push('/list')
      })
      .catch(() => { 
        console.log(111)
      })

    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 12px;
  padding-top: 100px;
  .logo_wrapper {
    text-align: center;
    margin: 50px auto;
  }
  .van-button--info {
    color: #fff;
    background-color: #da9862;
    border: 0.02667rem solid #da9862;
  }
}
</style>
