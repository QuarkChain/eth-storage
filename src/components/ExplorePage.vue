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
  background: radial-gradient(circle, #F4FAFF 28%, #FFFFFF 50%, #FFFFFF);
}

.explore-title {
  margin-top: 70px;
  font-size: 30px;
  color: #000000;
  line-height: 30px;
  font-family: AlibabaPuHuiTiB;
}

.explore-img {
  width: 500px;
  margin-top: 50px;
  margin-bottom: 75px;
}
</style>
