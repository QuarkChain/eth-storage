<template>
  <div class="home">
    <div class="application">
      <p class="application-title">New Applications <br/> Enabled by EthStorage</p>
      <div class="application-context">
        <div class="application-context-item">
          <span class="application-context-title" style="margin-top: 25px">Trusted website host</span>
          <span class="application-context-message">Uniswap, AAVE, Curve, OpenSea, ENS, etc.</span>

          <span class="application-context-title">Decentralized social network</span>
          <span class="application-context-message">Decentralized medium (Mirror), decentralized twitter, personal blog.</span>

          <span class="application-context-title">Web2 to Web3 applications</span>
          <span class="application-context-message">Decentralized Dropbox, Decentralized Tiktok.</span>

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
  background: #FFFFFF;
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
  margin-top: 70px;
  font-size: 30px;
  color: #000000;
  line-height: 38px;
  font-family: AlibabaPuHuiTiB;
}

.application-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 750px;
  margin-top: 50px;
  margin-bottom: 65px;
}

.application-context-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 345px;
}
.application-context-title {
  margin-top: 18px;
  font-size: 11px;
  color: #000000;
  line-height: 20px;
  font-family: AlibabaPuHuiTiB;
}
.application-context-message {
  margin-top: 3px;
  font-size: 10px;
  color: #000000;
  line-height: 19px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.application-image {
  width: 300px;
}
</style>
