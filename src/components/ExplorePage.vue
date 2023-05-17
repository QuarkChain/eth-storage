<template>
  <div class="explore">
    <img class="explore-img" src="@/assets/explore.png" alt="explore image">
    <div class="explore-right">
      <div class="explore-rt">
        <div>
          <p class="explore-title">Explore the <br class="br-phone"/>
            <span style="color: #59A5FF">Frontier</span> of <br class="br-phone"/>Scalability</p>
          <p class="explore-message">EthStorage takes the scalability of the <br class="br-phone">Ethereum mainnet and layer 2 to the <br class="br-phone">next level.</p>
        </div>
        <img class="explore-rt-arrow" src="@/assets/explore-arrow.svg" />
      </div>
      <img class="explore-rt-font" src="@/assets/explore-font.svg" />
    </div>
  </div>
</template>

<style scoped>
.explore {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
}

.explore-img {
  width: 700px;
  margin-top: -50px;
}

.explore-right {
  margin-left: 40px;
}
.explore-rt {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.explore-title {
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 125%;
  color: #000000;
  text-align: left;
  margin-top: 30px;
  font-family: 'Futura';
}
.explore-message {
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
.explore-rt-arrow {
  margin-left: -65px;
  margin-top: 80px;
  width: 103px;
  height: 180px;
}
.explore-rt-font {
  margin-top: -38px;
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
