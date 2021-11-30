<!-- login -->
<template>
  <div class="container">
    <h3 class="header">
      {{btnType}}用户
    </h3>
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
        <van-button round block type="info" native-type="submit">{{btnType}}</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnType: '',
      username: '',
      password: ''
    }
  },

  computed: {},
  created(){
    const query = this.$route.query;
    if(query.username){
      this.username = query.username;
      this.btnType = '编辑'
    }else {
      this.btnType = '新增'
    }
  },
  mounted() {},

  methods: {
    onSubmit(values){
      console.log('submit', values)
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  padding: 12px;
  padding-top: 100px;
  .header {
    text-align: center;
    margin: 20px auto;
    font-size: 22px;
    font-weight: 500;
  }
  .van-button--info {
    color: #fff;
    background-color: #da9862;
    border: 0.02667rem solid #da9862;
  }
}
</style>
