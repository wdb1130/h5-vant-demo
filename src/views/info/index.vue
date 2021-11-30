<!-- home -->
<template>
  <div class="index-container">
    <div class="panel bg_black">
      <van-row class="high_light_text">
        <van-col span="12"> 账户：{{17737373732}} </van-col>
        <van-col span="12"> {{currentDate}} </van-col>
      </van-row>
      <van-row>
        <van-col span="8"> 型号 </van-col>
        <van-col span="4"> 数量 </van-col>
        <van-col span="6"> 在线数量 </van-col>
        <van-col span="6"> 押金 </van-col>
      </van-row>
      <div class="list" v-for="(item, idx) in equipmet" :key="idx" >
        <van-row>
          <van-col span="8">{{ item.type}}</van-col>
          <van-col span="4">{{ item.num}}</van-col>
          <van-col span="6">{{ item.onlineNum}}</van-col>
          <van-col span="6">{{ item.USDT}}</van-col>
        </van-row>
      </div>
    </div>
    <div class="panel">
      <p class="high_light_text" style="width: 60px;">余额</p>
      <van-row>
        <van-col span="12"> 电费余额 </van-col>
        <van-col span="12"> *** </van-col>
      </van-row>
      <div class="list" v-for="(item, idx) in balance" :key="idx+item.type" >
        <van-row>
          <van-col span="12">{{ item.type}}</van-col>
          <van-col span="12">{{ item.money}}</van-col>
        </van-row>
      </div>
    </div>
    <div class="panel">
      <p class="high_light_text" style="width: 80px;">昨日产出</p>
      <div class="list" v-for="(item, idx) in produce" :key="idx+item.type" >
        <van-row>
          <van-col span="12">{{ item.type}}</van-col>
          <van-col span="12">{{ item.money}}</van-col>
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
import { getUserInfo } from '@/api/user.js'
// import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      currentDate: '',
      equipmet: [
        {type: '神马', num: 10, onlineNum: 8, USDT: 'xxx'},
        {type: '联想', num: 2, onlineNum: 1, USDT: 'xxx'},
        {type: '拯救者', num: 2, onlineNum: 1, USDT: 'xxx'},
        {type: '神州', num: 2, onlineNum: 1, USDT: 'xxx'},
      ],
      // 电费余额
      balance: [
        {type: 'USB',  money: 88},
        {type: 'UST',  money: 11},
        {type: 'USB',  money: 88},
        {type: 'USB',  money: 88},
      ],
      // 产出
      produce: [
        {type: 'UST',  money: 11},
        {type: 'USB',  money: 88},
        {type: 'USB',  money: 88},
      ],
    }
  },

  computed: {
    // ...mapGetters(['userName'])
  },

  mounted() {
    this.currentDate = this.getNowFormatDate();
  },

  methods: {
    getNowFormatDate() {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
          month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
      }
      var currentdate = year + '年' + month + '月' + strDate + '日';
      return currentdate;
    },
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => { })
        .catch(() => { })
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
      margin-top: 10px;
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
