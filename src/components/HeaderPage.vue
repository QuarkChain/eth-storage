<script setup lang="ts">
import DocumentationIcon from './IconHeaderLogo.vue';
</script>

<template>
  <div class="home">
    <div class="logo">
      <img class="logo-icon" src="@/assets/logo.png" alt="logo">
    </div>
    <div class="header">
      <div class="header-content">
        <div>
          <p class="header-title1">Scaling Storage</p>
          <p class="header-title2">of The World Computer</p>
        </div>
        <DocumentationIcon class="header-logo"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%);
}

.logo {
  max-width: 1340px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
}
.logo-icon {
  margin: 20px -30px 0;
  height: 100px;
}

.header {
  background: url("../assets/header-bg.png") no-repeat center top;
  background-size: auto 95%;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}
.header-title1 {
  font-size: 90px;
  line-height: 90px;
  font-weight: normal;
  color: #000000;
  margin-top: -60px;
  font-family: AlibabaPuHuiTiH;
}
.header-title2 {
  background: #000000;
  border-radius: 60px;
  font-weight: normal;
  color: #FFFFFF;
  margin-top: 40px;
  font-size: 50px;
  line-height: 50px;
  padding: 20px 50px;
  font-family: AlibabaPuHuiTiH;
}
.header-logo {
  width: 650px;
}

@media screen and (max-width: 420px) {
  .logo {
    max-width: 100%;
  }
  .logo-icon {
    margin: 15px 0 0 5px;
    height: 40px;
  }

  .header {
    background-size: 90% auto;
  }

  .header-content {
    padding-top: 20px;
    padding-bottom: 40px;
  }
  .header-title1 {
    font-size: 25px;
    line-height: 25px;
    margin-top: -40px;
  }
  .header-title2 {
    border-radius: 35px;
    margin-top: 15px;
    font-size: 15px;
    line-height: 15px;
    padding: 8px 10px;
  }
  .header-logo {
    width: 150px;
    height: 160px;
  }
}
</style>
