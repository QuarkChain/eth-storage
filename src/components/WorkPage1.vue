<template>
  <div class="home">
    <div class="work">
      <div class="work-title">How EthStorage Works</div>
      <div class="work-step">Step 1/5</div>
      <div class="work-message">Users upload their data to an application contract, which then<br>interacts with the EthStorage contract to store the data.</div>
      <img class="work-img" alt="work image" />
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #F5FAFF;
}

.work {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.work-title {
  margin-top: 80px;
  color: #000;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.work-step {
  margin-top: 16px;
  color: #4AA6FF;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Satoshi;
}

.work-message {
  margin-top: 16px;
  color: #000;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: Satoshi;
}

.work-img {
  width: 876px;
  margin-top: 24px;
  margin-bottom: 92px;
  content: url("../assets/work1.svg");
}

@media screen and (max-width: 500px) {
  .work {
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
