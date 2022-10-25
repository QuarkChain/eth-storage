<template>
  <div class="home">
    <b-navbar class="navbar">
      <template #brand>
        <div class="navbar-logo">
          <img class="navbar-icon" src="@/assets/logo.png" alt="logo">
          <div class="navbar-text">EthStorage</div>
        </div>
      </template>
      <template #start></template>
      <template #end>
        <b-navbar-item href="https://web3q.io/faucet.w3q/" target="_blank">Faucet</b-navbar-item>
        <b-navbar-item href="https://web3q.io/file.w3q/0x67d0481cc9c2e9dad2987e58a365aae977dcb8da/dynamic_data_sharding_v0_1_4" target="_blank">
          Technology
        </b-navbar-item>
        <b-navbar-dropdown label="Community">
          <b-navbar-item href="https://twitter.com/EthStorage" target="_blank">Twitter</b-navbar-item>
          <b-navbar-item href="https://discord.gg/mZqqUZxjed" target="_blank">Discord</b-navbar-item>
          <b-navbar-item href="https://t.me/ethstorage" target="_blank">Telegram</b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item href="https://github.com/ethstorage" target="_blank">Developer</b-navbar-item>
      </template>
    </b-navbar>
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
</template>

<script>
import DocumentationIcon from './IconHeaderLogo.vue';

export default {
  name: "HeaderPage",
  components: {
    DocumentationIcon
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%);
  padding-top: 20px;
}

.navbar {
  max-width: 1340px;
  margin: 0 auto;
  background: transparent;
}
.navbar-logo {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
}
.navbar-icon {
  height: 50px;
}
.navbar-text {
  font-size: 23px;
  margin-left: 15px;
  color: #000000 !important;
  font-family: AlibabaPuHuiTiB;
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

@media screen and (max-width: 420px) {
  .home {
    padding-top: 15px;
  }

  .navbar {
    max-width: 95%;
    padding-left: 15px;
  }
  .navbar-icon {
    height: 25px;
  }
  .navbar-text {
    font-size: 14px;
    margin-left: 8px;
  }

  .header {
    background-size: 100% auto;
  }
  .header-content {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 353px;
    justify-content: space-between;
    margin: 0 auto;
  }
  .header-title1 {
    font-size: 18px;
    line-height: 18px;
    margin-top: -40px;
  }
  .header-title2 {
    border-radius: 35px;
    margin-top: 15px;
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

<style>
.navbar {
  background-color: transparent !important;
}
.navbar-item,
.navbar-link {
  color: #000000 !important;
  border-color: #000000 !important;
  font-family: AlibabaPuHuiTiR;
}
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.router-link-exact-active,
.navbar-item:focus,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  color: rgba(0, 0, 0, 0.5) !important;
  background-color: transparent !important;
}
:focus {
  outline: -webkit-focus-ring-color auto 0px;
}
.navbar-link:not(.is-arrowless)::after {
  border-width: 1px !important;
  border-color: #000000 !important;
}
.navbar-item.has-dropdown.is-active .navbar-link {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.navbar-dropdown {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.b-nav {
  background: transparent !important;
}
@media screen and (max-width: 420px) {
  .b-pagination {
    margin-bottom: 230px !important;
  }

  .navbar-menu {
    background: linear-gradient(91deg, #DAE3EB 0%, #EEF2FF 100%) !important;
  }

  .navbar-burger {
    color: black !important;
  }

  .navbar-link {
    padding-left: 37.5px !important;
  }
}
</style>
