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
