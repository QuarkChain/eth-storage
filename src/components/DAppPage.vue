<template>
  <div>
    <p class="dapp-title">Applications Enabled<br class="dapp-phone">by EthStorage</p>
    <div class="dapp-bg">
      <div class="dapp">
        <div class="dapp-table-line">
          <div class="dapp-item dapp-item-color1">
            <div class="dapp-item-left">
              <div class="dapp-item-title">Trusted Website Host</div>
              <div class="dapp-item-message">
                Uniswap, AAVE, Curve, OpenSea, ENS, etc.
              </div>
            </div>
            <div class="dapp-item-right">
              <div class="dapp-item-app" @click="goUni">
                <img class="dapp-item-img" src="@/assets/uni.png"/>
                <div class="dapp-item-text">Uniswap</div>
              </div>
              <div class="dapp-item-app" @click="goEns">
                <img class="dapp-item-img" src="@/assets/ens.png"/>
                <div class="dapp-item-text">ENS</div>
              </div>
            </div>
          </div>
          <div class="dapp-item dapp-item-color2">
            <div class="dapp-item-left">
              <div class="dapp-item-title">Decentralized Social Network</div>
              <div class="dapp-item-message">
                Decentralized medium (Mirror), decentralized twitter, personal blog, etc.
              </div>
            </div>
            <div class="dapp-item-right">
              <div class="dapp-item-app" @click="goBlog">
                <img class="dapp-item-img" src="@/assets/deblog.png"/>
                <div class="dapp-item-text">Web3 Blog</div>
              </div>
              <div class="dapp-item-app" @click="goVblog">
                <img class="dapp-item-img" src="@/assets/vblog.png"/>
                <div class="dapp-item-text">Vitalik Blog</div>
              </div>
            </div>
          </div>
          <div class="dapp-item dapp-item-color3">
            <div class="dapp-item-left">
              <div class="dapp-item-title">Composable NFT</div>
              <div class="dapp-item-message">
                ERC721 and image with on-chain programmability.
              </div>
            </div>
            <div class="dapp-item-right">
              <div class="dapp-item-app" @click="goRbot">
                <img class="dapp-item-img" src="@/assets/qrbot.png"/>
                <div class="dapp-item-text">Web3 QRobot</div>
              </div>
              <div class="dapp-item-app" @click="goW3Music">
                <img class="dapp-item-img" src="@/assets/w3music.png"/>
                <div class="dapp-item-text">W3Music</div>
              </div>
            </div>
          </div>
        </div>

        <div class="dapp-table-line">
          <div class="dapp-item dapp-item-color2">
            <div class="dapp-item-left">
              <div class="dapp-item-title">Web2 to Web3 Applications</div>
              <div class="dapp-item-message">
                Decentralized dropbox, decentralized tiktok, etc.
              </div>
            </div>
            <div class="dapp-item-right dapp-item-right2">
              <div class="dapp-item-right-line">
                <div class="dapp-item-app dapp-item-app1" @click="goW3box">
                  <img class="dapp-item-img" src="@/assets/w3box.png"/>
                  <div class="dapp-item-text">W3Box</div>
                </div>
                <div class="dapp-item-app dapp-item-app2" @click="goW3drive">
                  <img class="dapp-item-img" src="@/assets/w3drive.png"/>
                  <div class="dapp-item-text">W3Drive</div>
                </div>
              </div>
              <div class="dapp-item-right-line">
                <div class="dapp-item-app dapp-item-app2" @click="goW3mail">
                  <img class="dapp-item-img" src="@/assets/w3mail.png"/>
                  <div class="dapp-item-text">W3Mail</div>
                </div>
                <div class="dapp-item-app dapp-item-app1" @click="goGit3">
                  <img class="dapp-item-img" src="@/assets/git3.png"/>
                  <div class="dapp-item-text">Git3</div>
                </div>
              </div>
            </div>
          </div>

          <div class="dapp-item dapp-item-color3">
            <div class="dapp-item-left">
              <div class="dapp-item-title">Permanent Storage for Rollups</div>
              <div class="dapp-item-message">
                EthStorage could serve as a long-term storage solution for all the Layer 2.
              </div>
            </div>
            <div class="dapp-item-right">
              <div class="dapp-item-right-line">
                <div class="dapp-item-disable dapp-item-app3">
                  <img class="dapp-item-img" src="@/assets/arb.png"/>
                  <div class="dapp-item-text">Arbitrum</div>
                </div>
                <div class="dapp-item-disable dapp-item-app4">
                  <img class="dapp-item-img" src="@/assets/op.png"/>
                  <div class="dapp-item-text">Optimism</div>
                </div>
              </div>
              <div class="dapp-item-right-line">
                <div class="dapp-item-disable dapp-item-app1">
                  <img class="dapp-item-img" src="@/assets/zksync.png"/>
                  <div class="dapp-item-text">zkSync</div>
                </div>
                <div class="dapp-item-disable dapp-item-app2">
                  <img class="dapp-item-img" src="@/assets/matic.png"/>
                  <div class="dapp-item-text">Polygon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DAppPage",
  methods: {
    openUrl(url) {
      window.open(url, "_blank");
      //_blank : 在新窗口打开
      //_self : 在当前窗口打开
      //window.location.href = url : 当前页面重定向
    },
    goBlog() {
      this.openUrl("https://w3-blog.w3eth.io/");
    },
    goRbot() {
      this.openUrl("https://w3-qrobot.w3eth.io/");
    },
    goW3mail() {
      this.openUrl("https://w3-email.w3eth.io/");
    },
    goW3box() {
      this.openUrl("https://w3-box.w3eth.io/");
    },
    goW3drive() {
      this.openUrl("https://w3-drive.w3eth.io/");
    },
    goUni() {
      this.openUrl("https://app-uniswap-org.w3eth.io/");
    },
    goEns() {
      this.openUrl("https://app-ens-domain.w3eth.io/");
    },
    goVblog() {
      this.openUrl("https://vitalikblog.w3eth.io/");
    },
    goStanfordBlockchain() {
      this.openUrl("https://stanfordblockchainreview.w3eth.io/");
    },
    goBlockEden() {
      this.openUrl("https://blockeden.xyz/dstore/");
    },
    goW3Music() {
      this.openUrl("https://w3-music.w3eth.io/");
    },
    goGit3() {
      this.openUrl("https://git3.sh");
    }
  },
};
</script>

<style scoped>
.dapp-title {
  margin-top: 80px;
  margin-bottom: 80px;
  color: #000000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.dapp-bg {
  background: url("../assets/app-bg.png") center center no-repeat;
  background-size: auto 100%;
  margin-bottom: 110px;
}
.dapp {
  max-width: 1200px;
  height: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.dapp-table-line {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.dapp-item {
  display: flex;
  height: 224px;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 24px;
  margin: 0 12px;
}
.dapp-item-color1 {
  background: #FFF3F1;
}
.dapp-item-color2 {
  background: #F4F1FF;
}
.dapp-item-color3 {
  background: #EDF6FF;
}

.dapp-item-left {
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}
.dapp-item-title {
  width: 176px;
  text-align: left;
  color: #3D4746;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%;
  font-family: Satoshi;
}
.dapp-item-message {
  width: 176px;
  text-align: left;
  color: #6C605D;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}


.dapp-item-right {
  display: flex;
  margin-left: 54px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
}
.dapp-item-app {
  display: flex;
  width: 106px;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #FFF;
  cursor: pointer;
}
.dapp-item-app:hover {
  background: #F6F9FC;
}

.dapp-item-img {
  width: 48px;
  height: 48px;
}
.dapp-item-text {
  color: #3D4746;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.dapp-item-right-line {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
}
.dapp-item-disable {
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #FFF;
  cursor: default;
  pointer-events: none;
}
.dapp-item-app1 {
  width: 64px;
}
.dapp-item-app2 {
  width: 193px;
}
.dapp-item-app3 {
  width: 160px;
}
.dapp-item-app4 {
  width: 98px;
}

.dapp-phone {
  display: none;
}
@media screen and (max-width: 500px) {
  .dapp-title {
    margin-top: 50px;
    margin-bottom: 38px;
    font-size: 24px;
  }

  .dapp-bg {
    background: none;
    margin-bottom: 50px;
  }
  .dapp {
    max-width: 100%;
    height: auto;
  }

  .dapp-table-line {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
  }

  .dapp-item {
    height: 180px;
    padding: 18px 22px;
    margin: 12px 0;
    width: 100%;
  }

  .dapp-item-left {
    padding: 6px 0;
  }
  .dapp-item-title {
    width: 140px;
    font-size: 18px;
  }
  .dapp-item-message {
    width: 140px;
    font-size: 12px;
  }


  .dapp-item-right {
    margin-left: auto;
  }
  .dapp-item-app {
    width: 80px;
    padding: 8px;
  }
  .dapp-item-img {
    width: 36px;
    height: 36px;
  }
  .dapp-item-text {
    font-size: 10px;
  }


  .dapp-item-right-line {
    gap: 8px;
  }
  .dapp-item-app1 {
    width: 50px;
  }
  .dapp-item-app2 {
    width: 110px;
  }
  .dapp-item-app3 {
    width: 100px;
  }
  .dapp-item-app4 {
    width: 60px;
  }

  .dapp-phone {
    display: inline;
  }
}
</style>
