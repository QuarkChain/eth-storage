<template>
  <div>
    <div class="header-banner">
      <img alt="Vue logo" src="data:image/bmp;base64,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"
           class="header-img"/>
      <p class="header-text">
        The webpage is generated by EVM on EthStorage sidechain.
        <br class="header-br"/>
        Get test tokens <a href="https://galileo.web3q.io/faucet.w3q/" target="_blank" class="w3q-link">here</a> and BUIDL now.
      </p>
    </div>
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
.header-banner {
  width: 100%;
  background: #6979A0;
  min-height: 36px;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.header-img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.header-text {
  line-height: 36px;
  font-size: 15px;
}
.header-br {
  display: none;
}
a.w3q-link {
  text-decoration: none;
  border-bottom: 1px solid #eeeeee;
}
a.w3q-link:link,
a.w3q-link:visited,
a.w3q-link:hover {
  color: #eeeeee;
  background-color: transparent;
}

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

@media screen and (max-width: 500px) {
  .header-banner {
    align-items: flex-start;
    padding: 3px 5px;
  }
  .header-img {
    width: 14px;
    height: 14px;
    margin-top: 2px;
    margin-right: 5px;
  }
  .header-text {
    line-height: 18px;
    font-size: 11px;
  }
  .header-br {
    display: inherit;
  }

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
