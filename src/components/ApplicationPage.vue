<template>
  <div class="home">
    <div class="application">
      <p class="application-title">New Applications <br/> Enabled by EthStorage</p>
      <div class="application-context">
        <div class="application-context-item">
          <span class="application-context-title" style="margin-top: 25px">Trusted Website Host</span>
          <span class="application-context-message">Uniswap, AAVE, Curve, OpenSea, ENS, etc.</span>

          <span class="application-context-title">Decentralized Social Network</span>
          <span class="application-context-message">Decentralized medium (Mirror), decentralized twitter, personal blog, etc.</span>

          <span class="application-context-title">Web2 to Web3 Applications</span>
          <span class="application-context-message">Decentralized dropbox, decentralized tiktok, etc.</span>

          <span class="application-context-title">Composable NFT</span>
          <span class="application-context-message">ERC721 and image with on-chain programmability.</span>
        </div>
        <img class="application-image" src="@/assets/application.png"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FBFBFB;
}

.application {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.application-title {
  margin-top: 80px;
  font-size: 48px;
  color: #000000;
  line-height: 60px;
  font-family: AlibabaPuHuiTiB;
}

.application-context {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 1200px;
  margin-top: 80px;
  margin-bottom: 80px;
}

.application-context-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.application-context-title {
  margin-top: 40px;
  font-size: 18px;
  color: #000000;
  line-height: 32px;
  font-family: AlibabaPuHuiTiB;
}
.application-context-message {
  margin-top: 3px;
  font-size: 16px;
  color: #000000;
  line-height: 25px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.application-image {
  width: 475px;
}

@media screen and (max-width: 500px) {
  .application {
    max-width: 100%;
  }
  .application-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 25px;
  }

  .application-context {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .application-context-item {
    align-items: center;
  }
  .application-context-title {
    margin-top: 20px;
    font-size: 15px;
    line-height: 20px;
  }
  .application-context-message {
    margin-top: 3px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }

  .application-image {
    width: 260px;
  }
}
</style>
