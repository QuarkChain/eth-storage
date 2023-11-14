<template>
  <div class="home">
    <div class="work">
      <div class="work-title">How EthStorage Works</div>
      <div class="work-step">Step 2/5</div>
      <div class="work-message">In the EthStorage L2 network, storage providers receive<br>notifications about data awaiting storage.</div>
      <img class="work-img" alt="work image" />
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FFFBFA;
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
  color: #FF8972;
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
  margin-bottom: 70px;
  content: url("../assets/work2.svg");
}

@media screen and (max-width: 500px) {
  .work {
    max-width: 100%;
  }

  .work-title {
    display: none;
  }
  .work-step {
    margin-top: 50px;
    font-size: 18px;
  }
  .work-message {
    margin-top: 12px;
    font-size: 12px;
  }

  .work-img {
    width: 88%;
    margin-top: 24px;
    margin-bottom: 50px;
  }
}
</style>
