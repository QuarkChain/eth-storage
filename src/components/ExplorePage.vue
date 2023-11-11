<template>
  <div class="explore">
    <div class="explore-title">Meet the Frontier of Scalability</div>
    <div class="explore-message">
      EthStorage takes the scalability of the Ethereum mainnet and <br/> layer 2 to the next level.
    </div>
    <img class="explore-img" src="@/assets/explore.svg" alt="explore image">
  </div>
</template>

<style scoped>
.explore {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
}

.explore-title {
  margin-top: -55px;
  color: #000000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}
.explore-message {
  color: #000000;
  margin-top: 22px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.explore-img {
  width: 100%;
  margin-top: 35px;
  margin-bottom: 90px;
}

@media screen and (max-width: 500px) {
  .explore {
    max-width: 100%;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .explore-img {
    width: 90%;
    margin-top: 30px;
  }

  .explore-right {
    margin-left: 0;
    margin-top: 120px;
    width: 90%;
  }
  .explore-rt {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .explore-title {
    width: 80%;
    font-size: 24px;
    text-align: center;
    margin: 0 auto;
  }
  .explore-message {
    width: 100%;
    margin-top: 15px;
    text-align: left;
  }
  .explore-rt-arrow {
    display: none;
  }
  .explore-rt-font {
    display: none;
  }
  .br-phone {
    display: none;
  }
}
</style>
