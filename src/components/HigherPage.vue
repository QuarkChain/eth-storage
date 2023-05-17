<template>
  <div class="home">
    <div class="higher">
      <div class="higher-item">
        <div>
          <div class="higher-lt">
            <img class="higher-lt-arrow" src="@/assets/higher-arrow.svg" />
            <div>
              <p class="higher-title">Higher <br class="br-phone"/><span style="color: #A381FD">Capacity</span></p>
              <p class="higher-message">EthStorage enhances the storage capacity of Ethereum, increasing it from the terabyte (TB) level to the petabyte (PB) level.</p>
            </div>
          </div>
          <img class="higher-lt-font" src="@/assets/higher-font.svg" />
        </div>
        <div class="higher-icon">
          <img src="../assets/higher.png" alt="higher image">
        </div>
      </div>

      <div class="higher-item higher-item2">
        <div class="higher-icon higher-icon2">
          <img src="../assets/higher2.png" alt="higher image">
        </div>
        <div>
          <div class="higher-rt">
            <div>
              <p class="higher-title">Lower <span style="color: #E6AFAA">Cost</span></p>
              <p class="higher-message">EthStorage significantly decreases the storage cost of Ethereum, reducing them by a factor of 10,000.</p>
            </div>
            <img class="higher-rt-arrow" src="@/assets/higher-arrow2.svg" />
          </div>
          <img class="higher-rt-font" src="@/assets/higher-font2.svg" />
        </div>
      </div>

      <div>
        <p class="feature-title">EthStorage Features</p>
        <div class="feature-context">
          <div class="feature-context-item">
            <img class="feature-context-image" src="@/assets/feature-icon1.png" />
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
  </div>
</template>

<style scoped>
.home {
  background: url("../assets/rings.svg") bottom center no-repeat;
  background-size: 100% auto;
}
.higher {
  max-width: 1200px;
  margin: 0 auto;
}

.higher-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
.higher-lt {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 145px;
}
.higher-lt-arrow {
  margin-top: 120px;
  width: 60px;
  height: 130px;
  margin-right: 25px;
}
.higher-title {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 125%;
  color: #000000;
  text-align: left;
  margin-top: 30px;
  font-family: 'Futura';
}
.higher-message {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #000000;
  width: 334px;
  margin-top: 35px;
  text-align: left;
  font-family: 'Avenir';
}
.higher-lt-font {
  margin-top: 12px;
  margin-left: -40px;
}

.higher-icon{
  width: 700px;
  margin-top: 45px;
}


.higher-rt {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 185px;
  margin-left: 15px;
}
.higher-rt-arrow {
  margin-top: 50px;
  width: 100px;
  height: 110px;
  margin-left: -30px;
}
.higher-rt-font {
  margin-top: -15px;
}


.feature-title {
  margin-top: 96px;
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
}

.feature-context {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 65px;
  width: 100%;
}
.feature-context-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.feature-context-image {
  width: 80px;
  height: 80px;
}

.feature-context-item-text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
  width: 450px;
}
.feature-context-title {
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-align: left;
}
.feature-context-message {
  margin-top: 8px;
  font-family: 'Avenir';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #000000;
  text-align: left;
}
.feature-margin {
  padding-bottom: 80px;
}

a.f-link:link,
a.f-link:visited,
a.f-link:hover {
  color: #0d64c6;
  background: transparent;
}
@media screen and (max-width: 500px) {
  .home {
    background: none;
  }
  .higher {
    max-width: 100%;
  }

  .higher-item {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .higher-lt {
    justify-content: center;
    margin-top: 0;
  }
  .higher-lt-arrow {
    display: none;
  }
  .higher-title {
    font-size: 24px;
    text-align: center;
    margin-top: 30px;
  }
  .higher-message {
    width: 90%;
    margin: 15px auto 0;
  }
  .higher-lt-font {
    display: none;
  }

  .higher-icon{
    width: 90%;
    margin-top: 30px;
  }


  .higher-item2 {
    flex-direction: column-reverse;
  }
  .higher-rt {
    justify-content: center;
    margin-top: 0;
    margin-left: 0;
  }
  .higher-rt-arrow {
    display: none;
  }
  .higher-rt-font {
    display: none;
  }

  .feature-title {
    margin-top: 70px;
    margin-bottom: 10px;
    font-size: 24px;
  }

  .feature-context {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .feature-context-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
  }
  .feature-context-image {
    width: 24px;
    height: 24px;
  }
  .feature-context-item-text {
    width: 100%;
  }
  .feature-context-title {
    font-size: 18px;
  }
  .feature-context-message {
    font-size: 14px;
  }
  .feature-margin {
    padding-bottom: 0;
  }
  .feature-item-margin {
    margin-top: 20px;
  }

  .br-phone {
    display: none;
  }
}
</style>
