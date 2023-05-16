<template>
  <div class="application">
    <p class="application-title">New Applications Enabled by EthStorage</p>
    <div class="application-context">
      <div class="application-context-item">
        <div class="application-context-text">
          <span class="application-context-title">Trusted Website Host</span>
          <span class="application-context-message">Uniswap, AAVE, Curve, OpenSea, ENS, etc.</span>
        </div>
        <img class="application-image" src="@/assets/application-icon1.png"/>
      </div>
      <div class="application-context-item">
        <div class="application-context-text">
          <span class="application-context-title">Decentralized Social Network</span>
          <span class="application-context-message">Decentralized medium (Mirror),<br>decentralized twitter, personal blog, etc.</span>
        </div>
        <img class="application-image" src="@/assets/application-icon2.png"/>
      </div>
    </div>
    <div class="application-context">
      <div class="application-context-item application-item-margin">
        <div class="application-context-text">
          <span class="application-context-title">Web2 to Web3 Applications</span>
          <span class="application-context-message">Decentralized dropbox, decentralized<br>tiktok, etc.</span>
        </div>
        <img class="application-image" src="@/assets/application-icon3.png"/>
      </div>
      <div class="application-context-item application-item-margin">
        <div class="application-context-text">
          <span class="application-context-title">Composable NFT</span>
          <span class="application-context-message">ERC721 and image with on-chain<br>programmability.</span>
        </div>
        <img class="application-image" src="@/assets/application-icon4.png"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.application {
  max-width: 1200px;
  margin: 0 auto;
}

.application-title {
  margin-top: 96px;
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 60px;
  color: #000000;
}

.application-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.application-context-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 435px;
  height: 245px;
  margin-top: 54px;
  margin-left: 60px;
  margin-right: 60px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 115px;
}

.application-context-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
.application-context-title {
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
}
.application-context-message {
  margin-top: 3px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
}
.application-image {
  height: 74px;
  margin-bottom: 33px;
}

.application-item-margin {
  margin-top: 64px;
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
