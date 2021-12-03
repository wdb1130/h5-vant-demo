<!-- home -->
<template>
  <div class="index-container">
    <van-row class="high_light_text" style="width: 120px;">
      账户：{{userName}}
    </van-row>
    <div class="panel">
      <van-row>
        <van-col span="10"> 型号 </van-col>
        <van-col span="4"> 数量 </van-col>
        <van-col span="5"> 在线数量 </van-col>
        <van-col span="5"> 押金 </van-col>
      </van-row>
      <div class="list">
        <van-row>
          <van-col span="10">
            <van-field v-model="userInfo.typeOne"/>
          </van-col>
          <van-col span="4">
            <van-field v-model="userInfo.btcTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.btcOnlineTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.btcDeposit"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10">
            <van-field v-model="userInfo.typeTwo"/>
          </van-col>
          <van-col span="4">
            <van-field v-model="userInfo.ethTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.ethOnlineTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.ethDeposit"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="10">
            <van-field v-model="userInfo.typeThree"/>
          </van-col>
          <van-col span="4">
            <van-field v-model="userInfo.awlTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.awlOnlineTotal"/>
          </van-col>
          <van-col span="5">
            <van-field v-model="userInfo.awlDeposit"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <p class="high_light_text" style="width: 60px;">余额</p>
    <div class="panel">
      <van-row>
        <van-col span="12"> 电费余额 </van-col>
        <van-col span="12"> 
          <van-field v-model="userInfo.dfBalance"/>  
        </van-col>
      </van-row>
      <div class="list">
        <van-row>
          <van-col span="12">USDT</van-col>
          <van-col span="12">
            <van-field v-model="userInfo.usdtBalance"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">BTC</van-col>
          <van-col span="12">
            <van-field v-model="userInfo.btcBalance"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">ETH</van-col>
          <van-col span="12">
            <van-field v-model="userInfo.ethBalance"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <p class="high_light_text" style="width: 80px;">昨日产出</p>
    <div class="panel">
      <div class="list">
        <van-row>
          <van-col span="12">BTC</van-col>
          <van-col span="12">
            <van-field v-model="userInfo.btcOutput"/>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="12">ETH</van-col>
          <van-col span="12">
            <van-field v-model="userInfo.ethOutput"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="footer">
      <van-button block plain type="default" @click="submitInfo()">确定</van-button>
    </div>
  </div>
</template>

<script>
import { editUserInfo,showUserInfo } from '@/api/user.js'

export default {
  data() {
    return {
      currentDate: '',
      userInfo: {},
      userId: '',
      userName: ''
    }
  },

  computed: {
  },

  created(){
    const query = this.$route.query;
    this.userId = query.userId;
    this.userName = query.userName;
    this.initData()
  },
  mounted() {
  },

  methods: {
    submitInfo() {
      console.log(this.userInfo);
      const params = this.userInfo;
      editUserInfo(params).then((res)=>{
        // dialog 修改成功
        this.$dialog.alert({message:'修改成功！'}).then(()=>{
          // 跳转至list页面 ? 
          this.$router.push('/list');
        })
      }).
      catch(()=>{

      })
    },
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { userId: this.userId }
      showUserInfo(params).then((res)=>{
        this.userInfo = res.data;
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  background-color: #fff;
  padding: 12px;
  .high_light_text {
    color: #fff;
    background: #da9862;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    padding: 5px;
    border-radius: 3px;
  }
  .panel {
    font-size: 14px;
    padding: 10px;
    border: thin solid #333;
    border-radius: 5px;
    margin-top: 10px;

    .van-row {  
      line-height: 44px;
    }
    .van-col {
      text-align: center;
    }
  }
  .footer {
    margin-top: 30px;
    .van-button--default {
      border-color: #333;
    }
  }
}
</style>
