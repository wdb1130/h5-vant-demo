<!-- home -->
<template>
  <div class="index-container">
    <div class="panel bg_black">
      <!-- <van-cell v-for="(item, idx) in equipmet" :key="idx" :title="item.type" /> -->
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
      <p class="high_light_text">余额</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        {type: 'USB',  money: 88},
        {type: 'UST',  money: 11},
        {type: 'USB',  money: 88},
        {type: 'USB',  money: 88},
      ],
    }
  },

  computed: {},

  mounted() { },

  methods: {}
}
</script>
<style lang="scss" scoped>
.index-container {
  padding: 12px;
  .high_light_text {
    color: #000;
    background: #da9862;
    text-align: center;
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
}
</style>
