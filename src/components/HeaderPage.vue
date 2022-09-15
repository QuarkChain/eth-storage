<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img class="logo-icon" src="@/assets/logo.png" alt="logo">
      </div>
      <div class="header-content">
        <div>
          <p class="header-title1">Scaling Storage</p>
          <p class="header-title2">of The World Computer</p>
        </div>
        <img class="header-logo" src="@/assets/header-logo.png" alt="header logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%);
}
.header {
  background: url("../assets/header-bg.png") no-repeat center;
  background-size: 1000px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.logo-icon {
  height: 100px;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 100px;
}
.header-title1 {
  height: 80px;
  font-size: 80px;
  font-weight: normal;
  color: #000000;
  line-height: 80px;
  font-family: AlibabaPuHuiTiH;
}
.header-title2 {
  background: #000000;
  border-radius: 60px;
  margin-top: 35px;
  font-size: 45px;
  line-height: 45px;
  padding: 20px;
  font-weight: normal;
  color: #FFFFFF;
  font-family: AlibabaPuHuiTiH;
}
.header-logo {
  width: 550px;
  margin-left: -20px;
}
</style>
