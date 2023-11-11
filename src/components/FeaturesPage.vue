<template>
  <div class="feature">
    <p class="feature-message">Feature Comparison</p>
    <img class="feature-img" alt="feature image">

    <div>
      <p class="feature-title">EthStorage Features</p>
      <div class="feature-context">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon1.png"/>
          <div class="feature-context-item-text">
            <span class="feature-context-title">Programmable Large KV Store</span>
            <span class="feature-context-message">Smart contract programmable CRUD for large-value reads/writes with ~ PB capacity.</span>
          </div>
        </div>
        <div class="feature-context-item feature-item-margin">
          <img class="feature-context-image" src="@/assets/feature-icon2.png"/>
          <div class="feature-context-item-text">
            <span class="feature-context-title">Proof of Storage on Large Dynamic Datasets</span>
            <span class="feature-context-message">Use random sampling and dynamic data sharding to prove data retention and encourage re-replication.</span>
          </div>
        </div>
      </div>
      <div class="feature-context feature-margin">
        <div class="feature-context-item">
          <img class="feature-context-image" src="@/assets/feature-icon4.png"/>
          <div class="feature-context-item-text">
            <span class="feature-context-title">Proof of Publication via Data Availability</span>
            <span class="feature-context-message">Increase data upload speed using KZG commitment and Reed-Solomon code powered by Danksharding.</span>
          </div>
        </div>
        <div class="feature-context-item feature-item-margin">
          <img class="feature-context-image" src="@/assets/feature-icon3.png"/>
          <div class="feature-context-item-text">
            <span class="feature-context-title">web3:// Access Protocol</span>
            <span class="feature-context-message">Decentralized access to dynamic web objects hosted by smart contracts and EthStorage.
                    Visit <a class="f-link" href="https://w3url.w3eth.io/" target="_blank">Web3URL</a> for more details.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.feature-message {
  margin-top: 60px;
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
}

.feature-img {
  width: 1200px;
  margin-top: 15px;
  content: url("../assets/feature.png");
}

@media screen and (max-width: 500px) {
  .feature {
    max-width: 100%;
  }

  .feature-message {
    font-size: 24px;
    margin-top: 40px;
  }

  .feature-img {
    width: 90%;
    margin-top: 30px;
    content: url("../assets/feature-phone.png");
  }
}
</style>
