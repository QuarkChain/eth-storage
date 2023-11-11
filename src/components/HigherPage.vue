<template>
  <div class="home">
    <div class="higher">
      <div class="higher-item">
        <div class="higher-lt">
          <p class="higher-title">Higher <br class="br-phone"/>Capacity</p>
          <p class="higher-message">EthStorage enhances the storage capacity of Ethereum, increasing it from the
            terabyte (TB) level to the petabyte (PB) level.</p>
        </div>
        <div class="higher-icon">
          <img src="../assets/higher.svg" alt="higher image">
        </div>
      </div>

      <div class="higher-item higher-item2">
        <div class="higher-lt">
          <p class="higher-title">Lower <br class="br-phone"/>Cost</p>
          <p class="higher-message">EthStorage significantly decreases the storage cost of Ethereum, reducing them
            by a factor of 10,000.</p>
        </div>
        <div class="higher-right2">
          <!--     TODO     -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F4F1FF;
}

.higher {
  max-width: 1200px;
  margin: 0 auto;
}

.higher-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 60px 150px 0;
}

.higher-lt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.higher-title {
  text-align: left;
  color: #000106;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: SatoshiBlod;
}

.higher-message {
  width: 180px;
  margin-top: 24px;
  text-align: left;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Satoshi;
}

.higher-icon {
  width: 600px;
}

.higher-item2 {
  padding: 40px 150px 90px;
}
.higher-right2 {
  width: 600px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 32px;
  background: #FFF;
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

  .higher-icon {
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
