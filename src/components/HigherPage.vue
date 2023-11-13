<template>
  <div class="home">
    <div class="higher">
      <div class="higher-item">
        <div class="higher-lt">
          <p class="higher-title"><span class="title-color">Higher</span> <br class="br-phone"/>Capacity</p>
          <p class="higher-message">EthStorage enhances the storage capacity of Ethereum, increasing it from the
            terabyte (TB) level to the petabyte (PB) level.</p>
        </div>
        <div class="higher-icon">
          <img src="../assets/higher.svg" alt="higher image">
        </div>
      </div>

      <div class="higher-item higher-item2">
        <div class="higher-lt">
          <p class="higher-title"><span class="title-color2">Lower</span> <br class="br-phone"/>Cost</p>
          <p class="higher-message">EthStorage significantly decreases the storage cost of Ethereum, reducing them
            by a factor of 10,000.</p>
        </div>
        <div class="higher-right2">
          <div class="cost-line">
            <div class="cost-title">How much data do you<br>want to store?</div>
            <div class="cost-item-right-line">
              <div class="cost-item-right-val">{{ fileSize }}GB</div>
              <el-select class="cost-item-gas" v-model="gasPrice">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
          <el-slider class="slid-bar" v-model="fileSize" :min="1" :max="100"/>
          <div class="cost-title">Cost Comparison</div>
          <div class="cost-line">
            <div class="cost-item">
              <div class="cost-item-title">Current ETH Cost</div>
              <div class="cost-item-line">
                <div class="cost-item-value">{{ this.ethCostStr }}</div>
                <div class="cost-item-text">ETH</div>
              </div>
              <div class="line"/>
            </div>
            <div class="cost-item">
              <div class="cost-item-title">Current ETH Cost</div>
              <div class="cost-item-line">
                <div class="cost-item-value">{{ this.esCostStr }}</div>
                <div class="cost-item-text">ETH</div>
              </div>
              <div class="line"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigNumber from "bignumber.js";

export default {
  name: "HigherPage",
  data: () => ({
    fileSize: 23,
    gasPrice: 15,
    options: [
      {
        value: 15,
        label: 'Gas price 15 Gwei',
      }, {
        value: 55,
        label: 'Gas price 55 Gwei',
      }, {
        value: 95,
        label: 'Gas price 95 Gwei',
      }
    ],
  }),
  computed: {
    ethCostStr() {
      const cost = this.toTokenUnitsBN(this.ethCost(), 18);
      return cost.toFixed(0, BigNumber.ROUND_UP);
    },
    esCostStr() {
      const cost = this.toTokenUnitsBN(this.esCost(), 18);
      return cost.toFixed(0, BigNumber.ROUND_UP);
    }
  },
  methods: {
    toBaseUnitBN(rawAmt, decimals) {
      const raw = new BigNumber(rawAmt);
      const base = new BigNumber(10);
      const decimalsBN = new BigNumber(decimals);
      return raw.times(base.pow(decimalsBN)).integerValue(BigNumber.ROUND_DOWN);
    },
    toTokenUnitsBN(tokenAmount, tokenDecimals) {
      const amt = new BigNumber(tokenAmount);
      const digits = new BigNumber(10).pow(new BigNumber(tokenDecimals));
      return amt.div(digits);
    },
    ethCost() {
      // (Gas Cost Per Byte) * (Gas Price) * (Data Size)
      // Gas Cost Per Byte = 20000 / 32
      // Data Size = 1G = 1024^3
      // Gas Price = 15 Gwei
      const price = this.toBaseUnitBN(this.gasPrice, 9);
      return price.times(20000 / 32).times(this.fileSize * 1024 * 1024 * 1024);
    },
    esCost() {
      return this.ethCost().div(10000);
    }
  },
};
</script>

<style scoped>
.home {
  background: #F4F1FF;
}

.higher {
  max-width: 1200px;
  margin: 0 auto;
}

.higher-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 150px 0;
}

.higher-lt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.higher-title {
  text-align: left;
  color: #000106;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.higher-message {
  width: 180px;
  margin-top: 24px;
  text-align: left;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}

.higher-icon {
  width: 600px;
}

.higher-item2 {
  padding: 40px 150px 90px;
}
.higher-right2 {
  width: 600px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #FFF;
  padding: 40px 30px;
}

.cost-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

.cost-title {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  font-family: Satoshi;
}

.cost-item-right-line {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-top: -5px;
}

.cost-item-right-val {
  color: #3F15C0;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}

.cost-item-gas {
  margin-top: -3px;
}

.cost-item-gas >>> .el-input__inner {
  color: #000;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  font-family: Satoshi;
}

.cost-item-gas >>> .el-select__caret,
.cost-item-gas >>> .el-input__suffix-inner {
  color: #000 !important;
}

.cost-item {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.cost-item-title {
  color: #3F15C0;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.cost-item-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  margin-top: 3px;
}

.cost-item-value {
  text-align: left;
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  min-width: 180px;
  font-family: Satoshi;
}

.cost-item-text {
  color: #B7B7B7;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.line {
  margin-top: 3px;
  width: 100%;
  height: 1px;
  background: #5E2DE8;
}

.slid-bar {
  margin-top: 20px;
  margin-bottom: 15px;
}

.slid-bar >>> .el-slider__bar {
  background-color: #5E2DE8;
}

.slid-bar >>> .el-slider__button {
  border: 2px solid #5E2DE8;
}

@media screen and (max-width: 500px) {
  .higher {
    max-width: 100%;
  }

  .higher-item {
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 50px 24px 0;
  }

  .higher-lt {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .higher-title {
    font-size: 24px;
  }
  .higher-message {
    width: 100%;
    margin-top: 18px;
    font-size: 12px;
  }
  .higher-icon {
    margin-top: 26px;
    width: 100%;
  }

  .higher-item2 {
    padding: 60px 24px 50px;
  }
  .higher-right2 {
    margin-top: 26px;
    width: 100%;
    height: inherit;
    padding: 20px 15px;
  }

  .cost-title {
    font-size: 14px;
  }
  .cost-item-right-val {
    font-size: 24px;
    margin-right: 5px;
  }

  .cost-item {
    margin-top: 15px;
  }
  .cost-item-value {
    margin-top: 5px;
    font-size: 16px;
    min-width: 120px;
  }
  .cost-item-text {
    font-size: 16px;
  }
  .line {
    margin-bottom: 15px;
  }

  .slid-bar {
    margin-top: 0px;
  }

  .title-color {
    color: #10DCCA;
  }
  .title-color2 {
    color: #FFBD59;
  }
  .br-phone {
    display: none;
  }
}
</style>
