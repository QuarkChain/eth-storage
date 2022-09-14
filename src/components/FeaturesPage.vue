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
          <img class="feature-context-image" src="@/assets/feature-icon2.png" />
          <span class="feature-context-title">Data composability</span>
          <span class="feature-context-message">It does not only maintain the composability relationship of the contents in contracts, but also the client-side and server-side rendering.</span>
        </div>
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon3.png" />
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
  margin-top: 70px;
  font-size: 30px;
  color: #000000;
  line-height: 30px;
  margin-bottom: 15px;
  font-family: AlibabaPuHuiTiB;
}

.feature-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 750px;
  margin-top: 30px;
}
.feature-context-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 270px;
}
.feature-context-image {
  width: 45px;
  height: 45px;
}
.feature-context-title {
  margin-top: 6px;
  font-size: 13px;
  color: #000000;
  line-height: 17px;
  font-family: AlibabaPuHuiTiB;
}
.feature-context-message {
  margin-top: 6px;
  font-size: 10px;
  color: #000000;
  line-height: 19px;
  text-align: left;
  font-family: AlibabaPuHuiTiR;
}

.feature-message {
  font-size: 19px;
  color: #000000;
  line-height: 19px;
  margin-top: 50px;
  font-family: AlibabaPuHuiTiR;
}
.feature-img {
  width: 750px;
  margin-top: 25px;
  margin-bottom: 75px;
}
</style>
