<template>
  <div class="home">
    <div class="dapp">
      <p class="dapp-title">Live dApps on Testnet</p>
      <div class="dapp-table-margin">
        <div class="dapp-table">
          <div class="dapp-item" @click="goUni">
            <img class="dapp-item-img" src="@/assets/uni.png"/>
            <div class="dapp-item-title">Uniswap</div>
            <div class="dapp-item-message">Uniswap frontend hosted by EthStorage.</div>
            <div class="dapp-item-link">web3://app-uniswap-org.eth/</div>
          </div>
          <div class="dapp-item" @click="goEns">
            <img class="dapp-item-img" src="@/assets/ens.png"/>
            <div class="dapp-item-title">ENS</div>
            <div class="dapp-item-message">ENS frontend hosted by EthStorage.</div>
            <div class="dapp-item-link">web3://app-ens-domain.eth/</div>
          </div>
          <div class="dapp-item" @click="goVblog">
            <img class="dapp-item-img" src="@/assets/vblog.png"/>
            <div class="dapp-item-title">Vitalik Blog</div>
            <div class="dapp-item-message">Vitalik blog hosted by EthStorage.</div>
            <div class="dapp-item-link">web3://vitalikblog.eth/</div>
          </div>
        </div>
        <div class="dapp-table dapp-table-mg-top">
          <div class="dapp-item" @click="goBlog">
            <img class="dapp-item-img" src="@/assets/deblog.png"/>
            <div class="dapp-item-title">W3Blog</div>
            <div class="dapp-item-message">Fully decentralized blog platform. The frontend and contents are all deployed on EthStorage.</div>
            <div class="dapp-item-link">web3://blog.w3q/</div>
          </div>
          <div class="dapp-item" @click="goRbot">
            <img class="dapp-item-img" src="@/assets/qrbot.png"/>
            <div class="dapp-item-title">Web3 QRobot</div>
            <div class="dapp-item-message">An NFT collection of cute robots that can be minted freely. All the metadata including the images are deployed on EthStorage.</div>
            <div class="dapp-item-link">web3://qrobot.w3q/</div>
          </div>
          <div class="dapp-item" @click="goW3mail">
            <img class="dapp-item-img" src="@/assets/w3mail.png"/>
            <div class="dapp-item-title">W3Mail</div>
            <div class="dapp-item-message">Fully decentralized email service on EthStorage.</div>
            <div class="dapp-item-link">web3://w3mail.w3q/</div>
          </div>
        </div>
        <div class="dapp-table dapp-table-mg-top">
          <div class="dapp-item" @click="goW3box">
            <img class="dapp-item-img" src="@/assets/w3box.png"/>
            <div class="dapp-item-title">W3Box</div>
            <div class="dapp-item-message">The file hosting service on EthStorage.</div>
            <div class="dapp-item-link">web3://w3box.w3q/</div>
          </div>
          <div class="dapp-item" @click="goW3drive">
            <img class="dapp-item-img" src="@/assets/w3drive.png"/>
            <div class="dapp-item-title">W3Drive</div>
            <div class="dapp-item-message">Your private hard drive on EthStorage.</div>
            <div class="dapp-item-link">web3://w3drive.w3q/</div>
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
    goBlog(){
      this.openUrl("https://web3q.io/dblog.w3q/");
    },
    goRbot(){
      this.openUrl("https://web3q.io/qrobot.w3q/");
    },
    goW3mail(){
      this.openUrl("https://web3q.io/w3mail.w3q/");
    },
    goW3box(){
      this.openUrl("https://web3q.io/w3box.w3q/");
    },
    goW3drive(){
      this.openUrl("https://web3q.io/w3drive.w3q/");
    },
    goUni() {
      this.openUrl("https://web3q.io/app-uniswap-org.eth/");
    },
    goEns() {
      this.openUrl("https://web3q.io/app-ens-domain.eth/");
    },
    goVblog() {
      this.openUrl("https://web3q.io/vitalikblog.eth/");
    }
  },
};
</script>

<style scoped>
.home {
  background: #FFFFFF;
}

.dapp {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.dapp-title {
  margin-top: 80px;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  font-family: AlibabaPuHuiTiB;
}

.dapp-table-margin{
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 60px;
}
.dapp-table{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dapp-table-mg-top {
  margin-top: 40px;
}
.dapp-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  cursor: pointer;
  width: 360px;
  height: 320px;
  background: #FFFFFF;
  box-shadow: 0 0 30px 0 rgba(0,0,0,0.0500);
  border-radius: 20px;
  padding: 20px 30px 0;
  margin: 0 20px;
}
.dapp-item:hover {
  background: #F6F9FC;
  border: 1px solid #EFEFF9;
}
.dapp-item-img {
  margin-top: -10px;
  margin-left: -15px;
  width: 80px;
}
.dapp-item-title {
  font-size: 18px;
  color: #000000;
  line-height: 25px;
  margin-top: 5px;
  font-family: AlibabaPuHuiTiB;
}
.dapp-item-message {
  font-size: 16px;
  color: #000000;
  line-height: 30px;
  text-align: left;
  margin-top: 5px;
  font-family: AlibabaPuHuiTiR;
}
.dapp-item-link {
  font-size: 16px;
  color: #1B60FF;
  line-height: 22px;
  margin-top: auto;
  margin-bottom: 20px;
  font-family: AlibabaPuHuiTiR;
}


@media screen and (max-width: 420px) {
  .dapp {
    max-width: 100%;
  }
  .dapp-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
  }

  .dapp-table-margin{
    margin-top: 15px;
    margin-bottom: 30px;
  }
  .dapp-table{
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .dapp-table-mg-top {
    margin-top: 0;
  }
  .dapp-item {
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 220px;
    border-radius: 11px;
    padding: 11px 15px 0;
    margin: 20px 0 0;
  }
  .dapp-item-img {
    margin-top: 0;
    margin-left: 0;
    width: 45px;
  }
  .dapp-item-title {
    font-size: 13px;
    line-height: 15px;
    margin-top: 7px;
  }
  .dapp-item-message {
    font-size: 13px;
    line-height: 25px;
    text-align: center;
    margin-top: 7px;
  }
  .dapp-item-link {
    font-size: 11px;
    line-height: 11px;
  }
}
</style>
