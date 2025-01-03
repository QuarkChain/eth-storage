<template>
  <div class="explore">
    <div class="explore-title">Meet the Frontier of Scalability</div>
    <div class="explore-message">
      EthStorage takes the scalability of the Ethereum mainnet and <br/> layer 2 to the next level.
    </div>
    <img class="explore-img" src="@/assets/explore.webp" alt="explore image">
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
  margin-top: -105px;
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
  }

  .explore-title {
    margin-top: 30px;
    font-size: 24px;
  }
  .explore-message {
    margin-top: 18px;
    font-size: 12px;
  }
  .explore-img {
    width: 95%;
    margin-top: 24px;
    margin-bottom: 50px;
  }
}
</style>
