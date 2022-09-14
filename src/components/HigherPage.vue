<template>
  <div class="home">
    <div class="higher-bg"/>
    <div class="higher">
      <p class="higher-title">Higher Capacity and Lower Cost</p>
      <img class="higher-img" src="@/assets/higher.png" alt="higher image">
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FFFFFF;
  min-height: 520px;
}

.higher-bg {
  margin: 0 auto;
  height: 300px;
  width: 600px;
  background: radial-gradient(circle, #FFFCF4 0%, #FFFFFF 99%, #FFFFFF 100%);
}

.higher {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.higher-title {
  margin-top: 70px;
  font-size: 30px;
  color: #000000;
  line-height: 30px;
  font-family: AlibabaPuHuiTiB;
}
.higher-img {
  width: 750px;
  margin-top: 50px;
}
</style>
