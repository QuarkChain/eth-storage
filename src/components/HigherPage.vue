<template>
  <div class="home">
    <div class="higher">
      <p class="higher-title">Higher Capacity and Lower Cost</p>
      <div class="img">
        <img class="higher-img" alt="higher image">
        <img class="higher-img2" alt="higher image2">
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: #FBFBFB;
}

.higher {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.higher-title {
  margin-top: 80px;
  font-size: 48px;
  color: #000000;
  line-height: 48px;
  font-family: AlibabaPuHuiTiB;
}
.img {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.higher-img {
  width: 1200px;
  margin-top: 80px;
  margin-bottom: 80px;
  content: url("../assets/higher.png");
}
.higher-img2 {
  display: none;
}

@media screen and (max-width: 450px) {
  .higher {
    max-width: 100%;
  }
  .higher-title {
    margin-top: 40px;
    font-size: 18px;
    line-height: 18px;
  }

  .img {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 40px;
    background: #FFFFFF;
    border-radius: 13px;
    border: 1px solid #D5D6EE;
  }
  .higher-img {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 0;
    content: url("../assets/higher-phone1.png");
  }
  .higher-img2 {
    display: block;
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    content: url("../assets/higher-phone2.png");
  }
}
</style>
