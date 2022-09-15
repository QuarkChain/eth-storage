<template>
  <div class="home">
    <div class="header-bg">
      <div class="header">
        <img class="logo" src="@/assets/logo.png" alt="logo">
        <div class="header-content">
          <div>
            <p class="header-title1">Scaling Storage</p>
            <p class="header-title2">of The World Computer</p>
          </div>
          <img class="header-logo" src="@/assets/header-logo.png" alt="header logo">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%);
}
.header-bg {
  background: url("../assets/header-bg.png") no-repeat center;
  background-size: 1450px;
}
.header {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.logo {
  margin: 20px auto 0 0;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom: 80px;
}
.header-title1 {
  height: 80px;
  font-size: 75px;
  font-weight: normal;
  color: #000000;
  line-height: 75px;
  margin-top: 120px;
  font-family: AlibabaPuHuiTiH;
}
.header-title2 {
  background: #000000;
  border-radius: 60px;
  margin-top: 30px;
  font-size: 45px;
  line-height: 45px;
  padding: 15px;
  font-weight: normal;
  color: #FFFFFF;
  font-family: AlibabaPuHuiTiH;
}
.header-logo {
  width: 700px;
  margin-left: -150px;
}
</style>
