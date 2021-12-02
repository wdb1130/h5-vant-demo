<!-- home -->
<template>
  <div class="index-container">
    <div class="warpper">
      <h3 class="demo-home__title"><span> 用户列表</span></h3>
    </div>
    <div class="user_list">
      <van-search v-model="userName" placeholder="请输入搜索账号" @search="onSearch"/>
      <van-row style="text-align: center">
        <van-col span="12">账户</van-col>
        <van-col span="12">操作</van-col>
      </van-row>
      <van-row v-for="item in list" :key="item.id">
        <van-col span="12">{{ item.userName}}</van-col>
        <van-col span="4" @click="edit(item.id)">编辑</van-col>
        <van-col span="4" @click="modifyPwd(item)">改密</van-col>
        <van-col span="4" @click="del(item.id)">删除</van-col>
      </van-row>
    </div>
    <div class="btn-wrapper">
      <van-button type="info" plain size="large" @click="add()">新增用户</van-button>
    </div>
  </div>
</template>

<script>
import { delUser, getUserList } from '@/api/user.js'
export default {
  data() {
    return {
      userName: '',
      list: [],
      oldList: [],
      loading: true
    }
  },

  computed: {},

  mounted() {
    this.initData()
  },

  methods: {
    initData(){
      // const params = {userName: this.userName};
      getUserList().then(res =>{
        this.list = res.data;
        this.oldList = res.data;
      }).catch(()=>{})
    },
    onSearch(){
      this.list = this.oldList.filter(v=>~v.userName.indexOf(this.userName));
    },
    edit(id){
      // 跳转编辑页面
      this.$router.push({path:'/edit',query: {userId: id}});
    },
    modifyPwd(item){
      // 修改密码
      this.$router.push({path:'/modify',query: {userId: item.id,userName: item.userName}});
    },
    del(id){
      const params = { ids: id }
      delUser(params)
      .then(() => {
        this.initData()
      })
    },
    add(){
      this.$router.push({path:'/modify'});
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  padding: 10px;
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 26px;
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
  }
  .user_list {
    font-size: 14px;
    padding: 10px;
    border: thin solid #ccc;
    .van-row {
      margin-top: 10px;
    }
    .van-col {
      text-align: center;
    }
  }
  .btn-wrapper {
    margin-top: 40px;
  }
}
</style>
