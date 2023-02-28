<template>
  <div>
    <HeaderBanner />
    <div class="denver">
      <Header />
      <div>
        <div class="denver-title">
          EthStorage @ ETHDenver
        </div>

        <div class="denver-timeline">
          <el-row type="flex" class="denver-timeline-item">
            <el-col :span="2">
              <li class="timeline-item-layout">
                <div class="item-node"></div>
                <div class="item-tail"></div>
                <div class="item-node"></div>
              </li>
              <li class="timeline-item-layout">
                <div class="item-tail item-tail-footer"></div>
              </li>
            </el-col>
            <el-col :span="22">
              <div class="denver-item">
                <div class="denver-item-left">
                  <p class="denver-item-left-text">From Mar.2<br/>to Mar.5</p>
                </div>
                <div class="denver-item-right">
                  <div class="denver-item-right-title">
                    <img class="denver-item-right-img" src="../assets/store.png"/>
                    <span>BOOTH</span>
                  </div>
                  <div class="denver-item-right-text">
                    EthStorage with git3, hexlink and blockeden at Infra area.
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row type="flex" class="denver-timeline-item">
            <el-col :span="2">
              <li class="timeline-item-layout">
                <div class="item-node"></div>
                <div class="item-tail"></div>
                <div class="item-node"></div>
              </li>
              <li class="timeline-item-layout">
                <div class="item-tail item-tail-footer"></div>
              </li>
            </el-col>
            <el-col :span="22">
              <div class="denver-item">
                <div class="denver-item-left">
                  <p class="denver-item-left-text">Mar 02, 2023<br/>16:20 - 16:40</p>
                </div>
                <div class="denver-item-right">
                  <div class="denver-item-right-title">
                    <img class="denver-item-right-img" src="../assets/devcon2.png"/>
                    <span>TALK</span>
                  </div>
                  <div class="denver-item-right-text denver-link" @click="goTalk1">
                    EthStorage - Scaling Ethereum Storage via Layer 2 and Data Availability.
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row type="flex" class="denver-timeline-item">
            <el-col :span="2">
              <li class="timeline-item-layout">
                <div class="item-node"></div>
                <div class="item-tail"></div>
                <div class="item-node"></div>
              </li>
              <li class="timeline-item-layout">
                <div class="item-tail item-tail-footer"></div>
              </li>
            </el-col>
            <el-col :span="22">
              <div class="denver-item">
                <div class="denver-item-left">
                  <p class="denver-item-left-text">Mar 03, 2023<br/>18:00 - 21:00</p>
                </div>
                <div class="denver-item-right">
                  <div class="denver-item-right-title">
                    <img class="denver-item-right-img" src="../assets/start.png"/>
                    <span>SIDE EVENT</span>
                  </div>
                  <div class="denver-item-right-text denver-link" @click="goSlid">
                    Infra & Middleware Meetup with Sentio, NKN, and HyperOracle.
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row type="flex" class="denver-timeline-item">
            <el-col :span="2">
              <li class="timeline-item-layout">
                <div class="item-node"></div>
                <div class="item-tail"></div>
                <div class="item-node"></div>
              </li>
            </el-col>
            <el-col :span="22">
              <div class="denver-item">
                <div class="denver-item-left">
                  <p class="denver-item-left-text">Mar 04, 2023<br/>10:30 - 10:45</p>
                </div>
                <div class="denver-item-right">
                  <div class="denver-item-right-title">
                    <img class="denver-item-right-img" src="../assets/devcon2.png"/>
                    <span>TALK</span>
                  </div>
                  <div class="denver-item-right-text denver-link" @click="goTalk2">
                    Introducing web3:// - Decentralized Access Protocol for EVM.
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="office-layout">
          <div class="office-layout-title">
            Official Sponsor of ETHDenver
          </div>
          <div class="office-img-layout">
            <el-col>
              <img src="../assets/ethdenver.png" class="office-img"/>
              <p class="office-img-text">ETHDenver</p>
            </el-col>
            <img src="../assets/x.png" class="office-x"/>
            <el-col>
              <img src="../assets/ethstorage.png" class="office-img"/>
              <p class="office-img-text">EthStorage</p>
            </el-col>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import HeaderBanner from '../components/HeaderBanner.vue';
import Header from '../components/Header.vue';
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "EthDenver",
  components: {
    HeaderBanner,
    Header,
    FooterPage,
  },
  methods: {
    openUrl(url) {
      console.log(url)
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goTalk1() {
      this.openUrl("https://events.ethdenver.com/eden23/attendease/networking/experience/aa36cd8b-1b43-439b-b66e-171cdb51b98c/a9d5c952-88ec-4db7-8d27-3014ce7e2265");
    },
    goTalk2() {
      this.openUrl("https://events.ethdenver.com/eden23/attendease/networking/experience/40751e71-c44f-4579-be66-e5b2bc349fb4/c290aa40-3d77-4b35-af69-e70fe0af59ed");
    },
    goSlid() {
      this.openUrl("https://www.eventbrite.com/e/infra-middleware-meetup-tickets-523141459187");
    },
  }
};
</script>

<style scoped>
.denver {
  padding-top: 20px;
  background-size: 100% 100%;
  background-image: url("../assets/denver.png");
}

.denver-title {
  font-size: 30px;
  color: #000000;
  line-height: 36px;
  margin-top: 40px;
  font-family: AlibabaPuHuiTiB;
}

.denver-timeline{
  max-width: 1000px;
  margin: 40px auto 0;
}
.denver-timeline-item {
  align-items: self-start;
}

.timeline-item-layout {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
.item-node {
  width: 14px;
  height: 14px;
  background: #FFFFFF;
  border-radius: 50%;
}
.item-tail {
  height: 56px;
  width: 2px;
  margin: 4px 0;
  background: #FFFFFF;
}
.item-tail-footer {
  height: 30px;
}


.denver-item {
  display: flex;
  flex-flow: row;
  background: #FFFFFF;
  border-radius: 8px;
  height: 92px;
  border: 1px solid #C0C5FC;
}
.denver-item-left {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 190px;
  background: #748DC5;
  border-radius: 8px;
}
.denver-item-left-text {
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  text-align: center;
  font-family: AlibabaPuHuiTiM;
}
.denver-item-right {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  height: 92px;
  width: 100%;
  padding-left: 40px;
}
.denver-item-right-title {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 16px;
  color: #000000;
  font-family: AlibabaPuHuiTiM;
}
.denver-item-right-img {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.denver-item-right-text {
  font-size: 15px;
  line-height: 15px;
  margin-top: 8px;
  color: #000000;
  font-family: AlibabaPuHuiTiR;
}
.denver-link {
  cursor: pointer;
  text-decoration: underline;
}
.denver-link:hover,
.denver-link:focus,
.denver-item:active {
  color: #1B60FF;
}

.office-layout {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px solid #C0C5FC;
  padding: 65px;
  width: 740px;
  margin: 70px auto 20px;
}
.office-layout-title {
  font-size: 30px;
  color: #000000;
  line-height: 36px;
  margin-bottom: 50px;
  font-family: AlibabaPuHuiTiB;
}
.office-img-layout {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
.office-img {
  width: 120px;
  height: 120px;
}
.office-img-text {
  font-size: 16px;
  color: #000000;
  line-height: 36px;
  margin-top: -10px;
  font-family: AlibabaPuHuiTiR;
}
.office-x {
  width: 30px;
  height: 30px;
  margin: auto 80px;
}

@media screen and (max-width: 500px) {
  .denver {
    padding-top: 10px;
  }

  .denver-title {
    font-size: 18px;
    line-height: 18px;
    margin-top: 25px;
  }

  .denver-timeline{
    max-width: 95%;
    margin: 25px auto 0;
  }

  .denver-item-left {
    width: 120px;
  }
  .denver-item-left-text {
    font-size: 12px;
    line-height: 20px;
  }
  .denver-item-right {
    padding-left: 10px;
  }
  .denver-item-right-title {
    font-size: 12px;
  }
  .denver-item-right-img {
    width: 17px;
    height: 17px;
    margin-right: 3px;
  }
  .denver-item-right-text {
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
    text-align: left;
  }

  .office-layout {
    padding: 35px 15px;
    width: 85%;
    margin: 50px auto 20px;
  }
  .office-layout-title {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 20px;
  }
  .office-img {
    width: 70px;
    height: 70px;
  }
  .office-img-text {
    font-size: 12px;
    line-height: 12px;
    margin-top: -5px;
  }
  .office-x {
    width: 18px;
    height: 18px;
    margin: auto 30px;
  }
}
</style>
