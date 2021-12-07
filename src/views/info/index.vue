<!-- home -->
<template>
  <div class="index-container">
    <div class="panel bg_black">
      <van-row class="high_light_text">
        <van-col span="12"> 账户：{{userName}} </van-col>
        <van-col span="12" style="text-align: right; padding-right: 5px;"> {{userInfo.archiveDate}} </van-col>
      </van-row>
      <van-row class="title-wrapper">
        <van-col span="9" class="lineheight44"> 型号 </van-col>
        <van-col span="3" class="lineheight44"> 数量 </van-col>
        <van-col span="3"> 在线<br>数量 </van-col>
        <van-col span="5" class="lineheight44"> 押金 </van-col>
        <van-col span="4"> 每日<br>电费 </van-col>
      </van-row>
      <div class="list">
        <van-row>
          <van-col span="9">{{ userInfo.typeOne}}</van-col>
          <van-col span="3">{{ userInfo.btcTotal}}</van-col>
          <van-col span="3">{{ userInfo.btcOnlineTotal}}</van-col>
          <van-col span="5">{{ userInfo.btcDeposit}}</van-col>
          <van-col span="4">{{ userInfo.btcDf}}</van-col>
        </van-row>
        <van-row>
          <van-col span="9">{{ userInfo.typeTwo}}</van-col>
          <van-col span="3">{{ userInfo.ethTotal}}</van-col>
          <van-col span="3">{{ userInfo.ethOnlineTotal}}</van-col>
          <van-col span="5">{{ userInfo.ethDeposit}}</van-col>
          <van-col span="4">{{ userInfo.ethDf}}</van-col>
        </van-row>
        <van-row>
          <van-col span="9">{{ userInfo.typeThree}}</van-col>
          <van-col span="3">{{ userInfo.awlTotal}}</van-col>
          <van-col span="3">{{ userInfo.awlOnlineTotal}}</van-col>
          <van-col span="5">{{ userInfo.awlDeposit}}</van-col>
          <van-col span="4">{{ userInfo.awlDf}}</van-col>
        </van-row>
      </div>
    </div>

    <div class="panel">
      <p class="high_light_text" style="width: 60px;">余额</p>
      <van-row>
        <van-col span="12"> 电费余额（USDT） </van-col>
        <van-col span="12"> {{userInfo.dfBalance}} </van-col>
      </van-row>
      <div class="list">
        <van-row>
          <van-col span="12">USDT</van-col>
          <van-col span="12">{{ userInfo.usdtBalance}}</van-col>
        </van-row>
        <van-row>
          <van-col span="12">BTC</van-col>
          <van-col span="12">{{ userInfo.btcBalance}}</van-col>
        </van-row>
        <van-row>
          <van-col span="12">ETH</van-col>
          <van-col span="12">{{ userInfo.ethBalance}}</van-col>
        </van-row>
      </div>
    </div>
    <div class="panel">
      <p class="high_light_text" style="width: 80px;">昨日产出</p>
      <div class="list">
        <van-row>
          <van-col span="12">BTC</van-col>
          <van-col span="12">{{ userInfo.btcOutput}}</van-col>
        </van-row>
        <van-row>
          <van-col span="12">ETH</van-col>
          <van-col span="12">{{ userInfo.ethOutput}}</van-col>
        </van-row>
      </div>
    </div>
    <div class="footer">
      <van-row>
        <van-col span="12"> 客服微信：ETMINER888 </van-col>
        <van-col span="12"> 更新时间：每日下午 </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { showUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      userId: '',
      userInfo: {}
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  created() {
    const query = this.$route.query
    this.userId = query.userId
  },

  mounted() {
    this.initData()
  },

  methods: {
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { userId: this.userId }
      console.log(params)
      showUserInfo(params).then((res) => {
        this.userInfo = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  padding: 12px;
  .high_light_text {
    color: #000;
    background: #da9862;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    line-height: 25px !important;
    margin-bottom: 10px;
    border-radius: 3px;
  }
  .panel {
    font-size: 14px;
    padding: 10px;
    border: thin solid #333;
    border-radius: 5px;
    margin-top: 30px;
    &.bg_black {
      color: #fff;
      background: #333;
    }
    .van-row {
      line-height: 44px;
    }
     .title-wrapper {
      line-height: 22px;
    }
    .van-col {
      text-align: center;
    }
    .lineheight44 {
      line-height: 44px;
    }
  }
  .footer {
    margin-top: 30px;
   .van-col {
      text-align: center;
    }
  }
}
</style>
