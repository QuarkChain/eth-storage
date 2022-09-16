<template>
  <div class="home">
    <div class="feature">
      <p class="feature-title">EthStorage Features</p>
      <div class="feature-context">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon1.png" />
          <span class="feature-context-title">Programmable large KV storage by EVM</span>
          <span class="feature-context-message">Support CRUD semantics provided by a system contract, and it is optimized for large value read/write with ~ PB capacity.</span>
        </div>
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon2.png" />
          <span class="feature-context-title">Dynamic Data Sharding</span>
          <span class="feature-context-message">Use Proof of Random Access (PoRA) to incentive data storage in multiple shards, and the rental fee model enables 10-100x decentralized replications with very low cost.</span>
        </div>
      </div>
      <div class="feature-context">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon3.png" />
          <span class="feature-context-title">Data composability</span>
          <span class="feature-context-message">It does not only maintain the composability relationship of the contents in contracts, but also the client-side and server-side rendering.</span>
        </div>
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon4.png" />
          <span class="feature-context-title">Data Availability</span>
          <span class="feature-context-message">Leverage Danksharding's data availability technology to get higher upload bandwidth and lower cost.</span>
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

@media screen and (max-width: 420px) {
  .feature {
    max-width: 100%;
  }
  .feature-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
  }

  .feature-context {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 0px;
  }
  .feature-context-item {
    align-items: center;
    max-width: 90%;
    margin-top: 30px;
  }
  .feature-context-image {
    width: 50px;
    height: 50px;
  }
  .feature-context-title {
    margin-top: 10px;
    font-size: 13px;
    line-height: 13px;
  }
  .feature-context-message {
    margin-top: 6px;
    font-size: 13px;
    line-height: 20px;
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
