<template>
  <div class="feature">
    <p class="feature-message">Feature Comparison</p>
    <img class="feature-img" src="@/assets/feature.png" alt="feature image">
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
}

@media screen and (max-width: 500px) {
  .feature {
    max-width: 100%;
  }

  .feature-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
    margin-bottom: -10px;
  }

  .feature-context {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin-top: 0;
  }

  .feature-context-item {
    align-items: center;
    max-width: 90%;
    margin-top: 45px;
  }

  .feature-context-image {
    width: 50px;
    height: 50px;
  }

  .feature-context-title {
    margin-top: 15px;
    font-size: 15px;
    line-height: 20px;
  }

  .feature-context-message {
    margin-top: 6px;
    font-size: 13px;
    line-height: 25px;
    text-align: center;
  }

  .feature-message {
    font-size: 13px;
    line-height: 17px;
    margin-top: 45px;
    font-family: AlibabaPuHuiTiB;
  }

  .feature-img {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
    content: url("../assets/feature-phone.png");
  }
}
</style>
