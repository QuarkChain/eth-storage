<template>
  <div class="home">
    <div class="explore">
      <p class="explore-title">Explore the Frontier of Scalability</p>
      <img class="explore-img" src="@/assets/explore.png" alt="explore image">
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FFFFFF;
}

.explore {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: radial-gradient(circle, #F4FAFF 28%, #FFFFFF 70%, #FFFFFF);
}

.explore-title {
  margin-top: 80px;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  font-family: AlibabaPuHuiTiB;
}

.explore-img {
  width: 880px;
  margin-top: 80px;
  margin-bottom: 80px;
}

@media screen and (max-width: 500px) {
  .explore {
    max-width: 100%;
  }

  .explore-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
  }

  .explore-img {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
    content: url("../assets/explore-phone.png");
  }
}
</style>
