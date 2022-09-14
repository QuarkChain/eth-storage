<template>
  <div class="home">
    <div class="header">
      <!--    &lt;!&ndash; tip &ndash;&gt;-->
      <!--    <div v-if="!isMobile">-->
      <!--      <w3q-tip bgColor="#ffffff10" fontColor="#ffffff" class="home-tip"/>-->
      <!--    </div>-->
      <!--    <div v-else>-->
      <!--      <w3q-tip bgColor="#ffffff10" fontColor="#ffffff" fontSize="10px" class="home-tip"/>-->
      <!--    </div>-->

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
  background: url("../assets/header-bg.png") no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.header {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
}

.logo {
  height: 80px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.logo-icon {
  height: 80px;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 100px;
}
.header-title1 {
  height: 68px;
  font-size: 75px;
  font-weight: normal;
  color: #000000;
  line-height: 68px;
  font-family: AlibabaPuHuiTiH;
}
.header-title2 {
  background: #000000;
  border-radius: 34px;
  margin-top: 35px;
  font-size: 44px;
  font-weight: normal;
  color: #FFFFFF;
  line-height: 44px;
  padding: 15px;
  font-family: AlibabaPuHuiTiH;
}
.header-logo {
  width: 550px;
}
</style>
