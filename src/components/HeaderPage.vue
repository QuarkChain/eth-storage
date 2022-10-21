<script setup lang="ts">
import DocumentationIcon from './IconHeaderLogo.vue';
</script>

<template>
  <div class="home">
    <t-head-menu class="navbar" expand-type="popup">
      <template #logo>
        <img class="navbar-icon" src="@/assets/logo.png" alt="logo">
      </template>
      <template #operations>
        <a class="navbar-item" href="https://galileo.web3q.io/faucet.w3q/" target="_blank">Faucet</a>
        <a class="navbar-item" href="https://docs.web3q.io" target="_blank">Technology</a>
        <t-submenu class="navbar-item" value="0" title="Community">
          <t-menu-item value="1" href="https://twitter.com/EthStorage" target="_blank">Twitter</t-menu-item>
          <t-menu-item value="2" href="https://discord.gg/mZqqUZxjed" target="_blank">Discord</t-menu-item>
          <t-menu-item value="3" href="https://t.me/ethstorage" target="_blank">Telegram</t-menu-item>
        </t-submenu>
        <a class="navbar-item" href="https://github.com/ethstorage" target="_blank">Developer</a>
      </template>
    </t-head-menu>
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
  padding-top: 20px;
}

.navbar {
  max-width: 1340px;
  margin: 0 auto;
  background: transparent;
}
.navbar-icon {
  height: 90px;
}
.navbar-item {
  color: #000000 !important;
  padding: 0 1rem;
  font-size: 17px;
  font-family: AlibabaPuHuiTiR;
}
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active {
  color: rgba(0, 0, 0, 0.5) !important;
  background-color: transparent !important;
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
  .home {
    padding-top: 15px;
  }

  .navbar {
    max-width: 96%;
  }
  .navbar-icon {
    height: 40px;
  }
  .navbar-item {
    padding: 0 4px;
    font-size: 9px;
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

<style>
.t-head-menu__inner {
  height: 90px !important;
}
.t-menu__operations {
  height: 90px !important;
  line-height: 90px !important;
}

.t-menu__item.t-is-active,
.t-menu__item,
.t-menu__item-link {
  color: #000000 !important;
  background-color: transparent !important;
}
.t-menu__item:focus-within,
.t-menu__item:hover,
.t-menu__item-link:hover {
  color: rgba(0, 0, 0, 0.5) !important;
  background-color: transparent !important;
}

@media screen and (max-width: 420px) {
  .t-head-menu__inner {
    height: 40px !important;
  }
  .t-menu__operations {
    height: 40px !important;
    line-height: 40px !important;
  }

  .t-menu__item {
    min-width: inherit !important;
  }
  .t-fake-arrow {
    margin-left: 3px !important;
  }
}
</style>
