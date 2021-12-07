<!-- login -->
<template>
  <div class="container">
    <div class="logo_wrapper">
      <van-image
        width="120"
        height="120"
        :src="require('@/assets/logo.png')"
      />
    </div>
    <van-form @submit="onSubmit" class="form_wrapper">
      <van-field
        v-model="userName"
        name="userName"
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
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },

  computed: {
    ...mapGetters(['token'])
  },

  mounted() {
  },

  methods: {
    onSubmit(values) {
      login(values).then((res) => {
        // 判断用户信息
        // 普通用户
        const token = res.data.token
        const { userType, id: userId } = res.data.userVo
        this.$store.dispatch('setUserName', this.userName)
        this.$store.dispatch('setToken', token)

        // 管理员
        if (userType === 0) {
          this.$router.push('/list')
        } else {
          this.$router.push({ path: '/info', query: { userId: userId }})
        }
      })
        .catch(() => {
          this.$dialog.alert({
            message: '用户名或密码错误，请重新输入。',
            theme: 'round-button'
          })
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
