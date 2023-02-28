<template>
  <div>
    <HeaderBanner />
    <div class="home">
      <Header />
      <div class="header">
        <div class="header-content">
          <div>
            <p class="header-title1">Scaling the Storage</p>
            <p class="header-title2">of the World Computer</p>
          </div>
          <DocumentationIcon class="header-logo"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DocumentationIcon from './IconHeaderLogo.vue';
import HeaderBanner from './HeaderBanner.vue';
import Header from './Header.vue';

export default {
  name: "HeaderPage",
  components: {
    DocumentationIcon,
    Header,
    HeaderBanner
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%);
  padding-top: 20px;
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
  font-size: 70px;
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

@media screen and (max-width: 500px) {
  .home {
    padding-top: 15px;
  }

  .header {
    background-size: 100% auto;
  }
  .header-content {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 360px;
    justify-content: space-between;
    margin: 0 auto;
  }
  .header-title1 {
    font-size: 18px;
    line-height: 18px;
    margin-top: 0;
  }
  .header-title2 {
    border-radius: 35px;
    margin-top: 10px;
    font-size: 13px;
    line-height: 13px;
    padding: 8px;
  }
  .header-logo {
    width: 150px;
    height: 160px;
  }
}
</style>
