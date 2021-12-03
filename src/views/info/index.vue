<!-- home -->
<template>
  <div class="index-container">
    <div class="panel bg_black">
      <van-row class="high_light_text">
        <van-col span="12"> 账户：{{userName}} </van-col>
        <van-col span="12"> {{userInfo.archiveDate}} </van-col>
      </van-row>
      <van-row>
        <van-col span="8"> 型号 </van-col>
        <van-col span="4"> 数量 </van-col>
        <van-col span="6"> 在线数量 </van-col>
        <van-col span="6"> 押金 </van-col>
      </van-row>
      <div class="list">
        <van-row>
          <van-col span="8">{{ userInfo.typeOne}}</van-col>
          <van-col span="4">{{ userInfo.btcTotal}}</van-col>
          <van-col span="6">{{ userInfo.btcOnlineTotal}}</van-col>
          <van-col span="6">{{ userInfo.btcDeposit}}</van-col>
        </van-row>
        <van-row>
          <van-col span="8">{{ userInfo.typeTwo}}</van-col>
          <van-col span="4">{{ userInfo.ethTotal}}</van-col>
          <van-col span="6">{{ userInfo.ethOnlineTotal}}</van-col>
          <van-col span="6">{{ userInfo.ethDeposit}}</van-col>
        </van-row>
        <van-row>
          <van-col span="8">{{ userInfo.typeThree}}</van-col>
          <van-col span="4">{{ userInfo.awlTotal}}</van-col>
          <van-col span="6">{{ userInfo.awlOnlineTotal}}</van-col>
          <van-col span="6">{{ userInfo.awlDeposit}}</van-col>
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
      // currentDate: '',
      userId: '',
      userInfo: {},
      // equipmet: [
      //   {type: 'BTC-神马', num: 10, onlineNum: 8, USDT: 'xxx'},
      //   {type: 'ETH-ETMINEV', num: 2, onlineNum: 1, USDT: 'xxx'},
      //   {type: '阿瓦隆83T', num: 2, onlineNum: 1, USDT: 'xxx'},
      // ],
      // // 电费余额
      // balance: [
      //   {type: 'USB',  money: 88},
      //   {type: 'UST',  money: 11},
      //   {type: 'USB',  money: 88},
      //   {type: 'USB',  money: 88},
      // ],
      // // 产出
      // produce: [
      //   {type: 'UST',  money: 11},
      //   {type: 'USB',  money: 88},
      //   {type: 'USB',  money: 88},
      // ],
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  created() {
    const query = this.$route.query;
    this.userId = query.userId;
  },

  mounted() {
    // this.currentDate = this.getNowFormatDate();
    this.initData();
  },

  methods: {
    // getNowFormatDate() {
    //   var date = new Date();
    //   var year = date.getFullYear();
    //   var month = date.getMonth() + 1;
    //   var strDate = date.getDate();
    //   if (month >= 1 && month <= 9) {
    //       month = "0" + month;
    //   }
    //   if (strDate >= 0 && strDate <= 9) {
    //       strDate = "0" + strDate;
    //   }
    //   var currentdate = year + '年' + month + '月' + strDate + '日';
    //   return currentdate;
    // },
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { userId: this.userId }
      console.log(params)
      showUserInfo(params).then((res)=>{
        this.userInfo = res.data;
      })
    },
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
      margin-top: 15px;
    }
    .van-col {
      text-align: center;
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
