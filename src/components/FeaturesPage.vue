<template>
  <div class="home">
    <div class="feature">
      <p class="feature-title">EthStorage Features</p>
      <div class="feature-context">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon1.png" />
          <span class="feature-context-title">Programmable Large KV Store</span>
          <span class="feature-context-message">Smart contract programmable CRUD for large-value reads/writes with ~ PB capacity.</span>
        </div>
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon2.png" />
          <span class="feature-context-title">Proof of Storage on Large Dynamic Datasets</span>
          <span class="feature-context-message">Use random sampling and dynamic data sharding to prove data retention and encourage re-replication.</span>
        </div>
      </div>
      <div class="feature-context">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon4.png" />
          <span class="feature-context-title">Proof of Publication via Data Availability</span>
          <span class="feature-context-message">Increase data upload speed using KZG commitment and Reed-Solomon code powered by Danksharding.</span>
        </div>
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon3.png" />
          <span class="feature-context-title">web3:// Access Protocol</span>
          <span class="feature-context-message">Decentralized access to dynamic web objects hosted by smart contracts and EthStorage.
            Visit <a class="f-link" href="https://web3q.io/w3url.eth/#/" target="_blank">Web3URL</a> for more details.</span>
        </div>
      </div>

      <p class="feature-message">Comparison with FileCoin/Arweave</p>
      <img class="feature-img" src="@/assets/feature.png" alt="feature image">
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FFFFFF;
}

.feature {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.feature-title {
  margin-top: 80px;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  font-family: AlibabaPuHuiTiB;
}

.feature-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 75px;
}
.feature-context-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 430px;
}
.feature-context-image {
  width: 75px;
  height: 75px;
}
.feature-context-title {
  margin-top: 6px;
  font-size: 20px;
  color: #000000;
  line-height: 27px;
  font-family: AlibabaPuHuiTiB;
}
.feature-context-message {
  margin-top: 6px;
  font-size: 16px;
  color: #000000;
  line-height: 30px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.feature-message {
  font-size: 30px;
  color: #000000;
  line-height: 30px;
  margin-top: 80px;
  font-family: AlibabaPuHuiTiR;
}
.feature-img {
  width: 1200px;
  margin-top: 40px;
  margin-bottom: 80px;
}

a.f-link:link,
a.f-link:visited,
a.f-link:hover {
  color: #0d64c6;
  background: transparent;
}

@media screen and (max-width: 500px) {
  .feature {
    max-width: 100%;
  }
  .feature-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: -10px;
  }

  .feature-context {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 0;
  }
  .feature-context-item {
    align-items: center;
    max-width: 90%;
    margin-top: 45px;
  }
  .feature-context-image {
    width: 50px;
    height: 50px;
  }
  .feature-context-title {
    margin-top: 15px;
    font-size: 15px;
    line-height: 20px;
  }
  .feature-context-message {
    margin-top: 6px;
    font-size: 13px;
    line-height: 25px;
    text-align: center;
  }

  .feature-message {
    font-size: 13px;
    line-height: 17px;
    margin-top: 45px;
    font-family: AlibabaPuHuiTiB;
  }
  .feature-img {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
    content: url("../assets/feature-phone.png");
  }
}
</style>
