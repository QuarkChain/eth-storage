<template>
  <div class="home">
    <div class="application">
      <p class="application-title">Core Features of EthStorage</p>
      <div class="application-context">
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f1.png"/>
          <div class="application-context-text">
            <div class="application-context-index">01</div>
            <span class="application-context-title">Programmable Large KV Store</span>
            <span class="application-context-message">Smart contract programmable CRUD for large-value reads/writes with ~ PB capacity.</span>
          </div>
        </div>
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f2.png"/>
          <div class="application-context-text">
            <div class="application-context-index">02</div>
            <span class="application-context-title">Proof of Storage on Large Dynamic Datasets</span>
            <span class="application-context-message">Use random sampling and dynamic data sharding to prove data retention and encourage re-replication.</span>
          </div>
        </div>
      </div>

      <div class="application-context">
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f3.png"/>
          <div class="application-context-text">
            <div class="application-context-index">03</div>
            <span class="application-context-title">High Replication Guarantee</span>
            <span class="application-context-message">
              The storage contract in L1 can set the desired number of replicas, and the actual count can be calculated using the contract's difficulty parameter.
            </span>
          </div>
        </div>
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f4.png"/>
          <div class="application-context-text">
            <div class="application-context-index">04</div>
            <span class="application-context-title">web3:// Access Protocol</span>
            <span class="application-context-message">Decentralized access to dynamic web objects hosted by smart contracts and EthStorage.
              Visit <a class="f-link" href="https://w3url.w3eth.io/" target="_blank">Web3URL</a> for more details.</span>
          </div>
        </div>
      </div>

      <div class="application-context">
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f5.png"/>
          <div class="application-context-text">
            <div class="application-context-index">05</div>
            <span class="application-context-title">Proof of Publication via Data Availability</span>
            <span class="application-context-message">Increase data upload speed using KZG commitment and Reed-Solomon code powered by Danksharding.</span>
          </div>
        </div>
        <div class="application-context-item">
          <img class="application-image" src="@/assets/f6.png"/>
          <div class="application-context-text">
            <div class="application-context-index">06</div>
            <span class="application-context-title">ETH Compatible</span>
            <span class="application-context-message">Users and developers can reuse various tools from the Ethereum ecosystem, including Metamask, Solidity, Hardhat, and more.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F9F8FF;
  padding: 80px 0 98px;
}

.application {
  max-width: 1200px;
  margin: 0 auto;
}

.application-title {
  color: #000000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.application-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.application-context-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 505px;
  height: 170px;
  margin-top: 54px;
}

.application-image {
  height: 96px;
  margin-right: 24px;
}

.application-context-text {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100%;
}
.application-context-index {
  color: #A189FF;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  font-family: Satoshi;
}
.application-context-title {
  text-align: left;
  margin-top: 8px;
  color: #000000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  font-family: Satoshi;
}
.application-context-message {
  text-align: left;
  margin-top: 15px;
  color: #000000;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  font-family: Satoshi;
}

a.f-link:link,
a.f-link:visited,
a.f-link:hover {
  color: #A189FF;
  background: transparent;
}

@media screen and (max-width: 500px) {
  .application {
    max-width: 100%;
  }

  .application-title {
    margin-top: 70px;
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 125%;
  }

  .application-context {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .application-context-item {
    justify-content: space-between;
    width: 90%;
    height: 180px;
    margin-top: 20px;
    margin-left: 0;
    margin-right: 0;
  }

  .application-context-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  .application-context-title {
    font-size: 16px;
  }
  .application-context-message {
    margin-top: 5px;
    font-size: 14px;
  }
  .application-image {
    height: 40px;
    margin-bottom: 20px;
  }

  .application-item-margin {
    margin-top: 20px;
  }
}
</style>
