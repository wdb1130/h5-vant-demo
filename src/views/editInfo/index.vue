<!-- home -->
<template>
  <div class="index-container">
    <van-row class="high_light_text" style="width: 120px;">
      账户：{{17737373732}}
    </van-row>
    <div class="panel">
      <van-row>
        <van-col span="8"> 型号 </van-col>
        <van-col span="4"> 数量 </van-col>
        <van-col span="6"> 在线数量 </van-col>
        <van-col span="6"> 押金 </van-col>
      </van-row>
      <div class="list" v-for="(item, idx) in equipmet" :key="idx" >
        <van-row>
          <van-col span="8">
            <van-field v-model="item.type"/>
          </van-col>
          <van-col span="4">
            <van-field v-model="item.num"/>
          </van-col>
          <van-col span="6">
            <van-field v-model="item.onlineNum"/>
          </van-col>
          <van-col span="6">
            <van-field v-model="item.USDT"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <p class="high_light_text" style="width: 60px;">余额</p>
    <div class="panel">
      <van-row>
        <van-col span="12"> 电费余额 </van-col>
        <van-col span="12"> *** </van-col>
      </van-row>
      <div class="list" v-for="(item, idx) in balance" :key="idx+item.type" >
        <van-row>
          <van-col span="12">{{ item.type}}</van-col>
          <van-col span="12">
            <van-field v-model="item.money"/>
          </van-col>
        </van-row>
      </div>
    </div>
    <p class="high_light_text" style="width: 80px;">昨日产出</p>
    <div class="panel">
      <div class="list" v-for="(item, idx) in produce" :key="idx+item.type" >
        <van-row>
          <van-col span="12">{{ item.type}}</van-col>
          <van-col span="12">
            <van-field v-model="item.money"/>
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

  computed: {},

  mounted() {
  },

  methods: {
    submitInfo() {
      console.log(this.balance)
    }
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
