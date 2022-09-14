<template>
  <div class="home">
    <div class="dapp">
      <p class="dapp-title">Live dApps on Testnet</p>
      <div class="dapp-table-margin">
        <div class="dapp-table">
          <div class="dapp-item" @click="goBlog">
            <img class="dapp-item-img" src="@/assets/deblog.png"/>
            <div class="dapp-item-title">Web3Q dBlog</div>
            <div class="dapp-item-message">Fully decentralized blog platform. The frontend and contents are all deployed on Web3Q.</div>
            <div class="dapp-item-link">web3://home.w3q/#/blog</div>
          </div>
          <div class="dapp-item" @click="goRbot">
            <img class="dapp-item-img" src="@/assets/qrbot.png"/>
            <div class="dapp-item-title">Web3 QRobot</div>
            <div class="dapp-item-message">An NFT collection of cute robots that can beminted freely. All the metadata including the images are deployed on Web3Q blockchain.</div>
            <div class="dapp-item-link">web3://qrobot.w3q/</div>
          </div>
          <div class="dapp-item" @click="goW3mail">
            <img class="dapp-item-img" src="@/assets/w3mail.png"/>
            <div class="dapp-item-title">W3Mail</div>
            <div class="dapp-item-message">Fully decentralized email service on Web3Q.</div>
            <div class="dapp-item-link">web3://w3mail.w3q/</div>
          </div>
        </div>
        <div class="dapp-table" style="margin-top: 25px">
          <div class="dapp-item" @click="goW3box">
            <img class="dapp-item-img" src="@/assets/w3box.png"/>
            <div class="dapp-item-title">W3Box</div>
            <div class="dapp-item-message">The file hosting service on Web3Q.</div>
            <div class="dapp-item-link">web3://w3box.w3q/</div>
          </div>
          <div class="dapp-item" @click="goW3drive">
            <img class="dapp-item-img" src="@/assets/w3drive.png"/>
            <div class="dapp-item-title">W3Drive</div>
            <div class="dapp-item-message">Your Private Hard Drive on Blockchain.</div>
            <div class="dapp-item-link">web3://w3drive.w3q/</div>
          </div>
        </div>
      </div>

<!--      <el-col v-else class="dapp-table-margin">-->
<!--        <div class="dapp-item" @click="goTutorial">-->
<!--          <img class="dapp-item-img" src="../assets/web.png"/>-->
<!--          <div class="dapp-item-title">dWeb Launcher</div>-->
<!--          <div class="dapp-item-message">Launch your own dWeb on Web3Q in 5 mins.</div>-->
<!--          <div class="dapp-item-link">web3://home.w3q/#/tutorial</div>-->
<!--        </div>-->
<!--        <div class="dapp-item" @click="goBlog">-->
<!--          <img class="dapp-item-img" src="../assets/deblog.png"/>-->
<!--          <div class="dapp-item-title">Web3Q dBlog</div>-->
<!--          <div class="dapp-item-message">Fully decentralized blog platform. The frontend and contents are all deployed-->
<!--            on Web3Q.-->
<!--          </div>-->
<!--          <div class="dapp-item-link">web3://home.w3q/#/blog</div>-->
<!--        </div>-->
<!--        <div class="dapp-item" @click="goRbot">-->
<!--          <img class="dapp-item-img" src="../assets/qrbot.png"/>-->
<!--          <div class="dapp-item-title">Web3 QRobot</div>-->
<!--          <div class="dapp-item-message">An NFT collection of cute robots that can be minted freely. All the metadata-->
<!--            including the images are deployed on Web3Q.-->
<!--          </div>-->
<!--          <div class="dapp-item-link">web3://qrobot.w3q/</div>-->
<!--        </div>-->
<!--        <div class="dapp-item" @click="goW3ns">-->
<!--          <img class="dapp-item-img" src="../assets/w3ns.png"/>-->
<!--          <div class="dapp-item-title">W3NS</div>-->
<!--          <div class="dapp-item-message">The name service on Web3Q.</div>-->
<!--          <div class="dapp-item-link">web3://w3ns.w3q/</div>-->
<!--        </div>-->
<!--        <div class="dapp-item" @click="goW3box">-->
<!--          <img class="dapp-item-img" src="../assets/w3box.png"/>-->
<!--          <div class="dapp-item-title">W3BOX</div>-->
<!--          <div class="dapp-item-message">The file hosting service on Web3Q.</div>-->
<!--          <div class="dapp-item-link">web3://w3box.w3q/</div>-->
<!--        </div>-->
<!--        <div class="dapp-item" @click="goW3drive">-->
<!--          <img class="dapp-item-img" src="../assets/w3drive.png"/>-->
<!--          <div class="dapp-item-title">W3Drive</div>-->
<!--          <div class="dapp-item-message">Your Private Hard Drive on Blockchain.</div>-->
<!--          <div class="dapp-item-link">web3://w3drive.w3q/</div>-->
<!--        </div>-->
<!--      </el-col>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DAppPage",
  data: () => {
    return {
      fullWidth: document.documentElement.clientWidth
    };
  },
  computed:{
    isMobile() {
      return this.fullWidth <= 420;
    },
  },
  methods: {
    handleResize() {
      this.fullWidth = document.documentElement.clientWidth;
      console.log(this.fullWidth);
    },
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
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
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
  margin-top: 70px;
  font-size: 30px;
  color: #000000;
  line-height: 38px;
  font-family: AlibabaPuHuiTiB;
}

.dapp-table-margin{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 75px;
}
.dapp-table{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.dapp-item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  cursor: pointer;
  width: 250px;
  height: 220px;
  background: #FFFFFF;
  box-shadow: 0 0 30px 0 rgba(0,0,0,0.0500);
  border-radius: 20px;
  padding: 20px 20px 0;
  margin: 0 15px;
}
.dapp-item:hover {
  background: #F6F9FC;
  border: 1px solid #EFEFF9;
}
.dapp-item-img {
  margin-top: -10px;
  margin-left: -10px;
  width: 50px;
}
.dapp-item-title {
  font-size: 11px;
  color: #000000;
  line-height: 16px;
  margin-top: 5px;
  font-family: AlibabaPuHuiTiB;
}
.dapp-item-message {
  color: #333333;
  margin-top: 5px;
  font-size: 10px;
  line-height: 19px;
  text-align: left;
  font-weight: normal;
  font-family: AlibabaPuHuiTiR;
}
.dapp-item-link {
  font-size: 10px;
  color: #1B60FF;
  line-height: 14px;
  margin-top: auto;
  margin-bottom: 20px;
  font-family: AlibabaPuHuiTiR;
}
</style>
