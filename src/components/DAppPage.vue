<template>
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
          <div class="dapp-item-message">Fully decentralized blog platform. The frontend and contents are all deployed
            on EthStorage.
          </div>
          <div class="dapp-item-link">web3://w3-blog.eth/</div>
        </div>
        <div class="dapp-item" @click="goRbot">
          <img class="dapp-item-img" src="@/assets/qrbot.png"/>
          <div class="dapp-item-title">Web3 QRobot</div>
          <div class="dapp-item-message">An NFT collection of cute robots that can be minted freely. All the metadata
            including the images are deployed on EthStorage.
          </div>
          <div class="dapp-item-link">web3://w3-qrobot.eth/</div>
        </div>
        <div class="dapp-item" @click="goW3mail">
          <img class="dapp-item-img" src="@/assets/w3mail.png"/>
          <div class="dapp-item-title">W3Mail</div>
          <div class="dapp-item-message">Fully decentralized email service on EthStorage.</div>
          <div class="dapp-item-link">web3://w3-email.eth/</div>
        </div>
      </div>
      <div class="dapp-table dapp-table-mg-top">
        <div class="dapp-item" @click="goW3box">
          <img class="dapp-item-img" src="@/assets/w3box.png"/>
          <div class="dapp-item-title">W3Box</div>
          <div class="dapp-item-message">The file hosting service on EthStorage.</div>
          <div class="dapp-item-link">web3://w3-box.eth/</div>
        </div>
        <div class="dapp-item" @click="goW3drive">
          <img class="dapp-item-img" src="@/assets/w3drive.png"/>
          <div class="dapp-item-title">W3Drive</div>
          <div class="dapp-item-message">Your private hard drive on EthStorage.</div>
          <div class="dapp-item-link">web3://w3-drive.eth/</div>
        </div>
        <div class="dapp-item" @click="goW3Music">
          <img class="dapp-item-img" src="@/assets/w3music.png"/>
          <div class="dapp-item-title">W3Music</div>
          <div class="dapp-item-message">Fully on-chain music NFT.</div>
          <div class="dapp-item-link">web3://w3-music.eth/</div>
        </div>
      </div>
      <div class="dapp-table dapp-table-mg-top">
<!--        <div class="dapp-item" @click="goStanfordBlockchain">-->
<!--          <img class="dapp-item-img" src="@/assets/stanford.png"/>-->
<!--          <div class="dapp-item-title">Stanford Blockchain Review</div>-->
<!--          <div class="dapp-item-message">Stanford Blockchain Club's Official Industry Journal.</div>-->
<!--          <div class="dapp-item-link">web3://stanfordblockchainreview.eth/</div>-->
<!--        </div>-->
        <div class="dapp-item" @click="goBlockEden">
          <img class="dapp-item-img" src="@/assets/blockeden.png"/>
          <div class="dapp-item-title">BlockEden</div>
          <div class="dapp-item-message">A managed storage solution for creators and developers from any blockchain.
          </div>
          <div class="dapp-item-link">https://blockeden.xyz/dstore/</div>
        </div>
        <div class="dapp-item" @click="goGit3">
          <img class="dapp-item-img" src="@/assets/git3.png"/>
          <div class="dapp-item-title">Git3</div>
          <div class="dapp-item-message">Git protocol for the open web.</div>
          <div class="dapp-item-link">https://git3.sh</div>
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
.dapp {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dapp-title {
  margin-top: 80px;
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
}

.dapp-table-margin {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 64px;
}

.dapp-table {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dapp-table-mg-top {
  margin-top: 40px;
}
.dapp-table-left {
  width: 100%;
  justify-content: left;
}

.dapp-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  width: 360px;
  height: 280px;
  background: #FFFFFF;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 10px 15px 0;
  margin: 0 20px;
}
.dapp-item:hover {
  background: #F6F9FC;
  border: 1px solid #F6F9FC;
}

.dapp-item-img {
  width: 80px;
}
.dapp-item-title {
  margin-top: 3px;
  margin-left: 15px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
}
.dapp-item-message {
  margin-top: 6px;
  margin-left: 15px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  color: #000000;
  text-align: left;
}
.dapp-item-link {
  color: #1B60FF;
  margin-top: auto;
  margin-bottom: 20px;
  margin-left: 15px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
}


@media screen and (max-width: 500px) {
  .dapp {
    max-width: 100%;
  }

  .dapp-title {
    margin-top: 70px;
    font-size: 24px;
  }
  .dapp-table-margin {
    margin-top: 22px;
  }

  .dapp-table {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .dapp-table-mg-top {
    margin-top: 0px;
  }

  .dapp-item {
    width: 90%;
    height: 220px;
    padding: 10px;
    margin: 8px auto;
  }

  .dapp-item-img {
    width: 70px;
  }
  .dapp-item-title {
    margin-top: 0;
    font-size: 16px;
  }
  .dapp-item-message {
    font-size: 14px;
    line-height: 20px;
  }
  .dapp-item-link {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
}
</style>
