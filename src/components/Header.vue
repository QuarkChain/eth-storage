<template>
  <b-navbar class="navbar">
    <template #brand>
      <div class="navbar-logo" @click.stop="goHome">
        <img class="navbar-icon" src="@/assets/logo.png" alt="logo">
        <div class="navbar-text">EthStorage</div>
      </div>
    </template>
    <template #start></template>
    <template #end>
      <b-navbar-item href="https://faucet.w3q.w3q-g.w3link.io/" target="_blank">Faucet</b-navbar-item>
      <b-navbar-item
          href="https://file.w3q.w3q-g.w3link.io/0x67d0481cc9c2e9dad2987e58a365aae977dcb8da/dynamic_data_sharding_0_1_6.pdf"
          target="_blank">
        Technology
      </b-navbar-item>
      <b-navbar-dropdown label="Community">
        <b-navbar-item href="https://twitter.com/EthStorage" target="_blank">Twitter</b-navbar-item>
        <b-navbar-item href="https://discord.gg/xhCwaMp7ps" target="_blank">Discord</b-navbar-item>
        <b-navbar-item href="https://t.me/ethstorage" target="_blank">Telegram</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="https://github.com/ethstorage" target="_blank">Developer</b-navbar-item>
      <b-navbar-item href="https://blog.ethereum.org/2023/02/14/layer-2-grants-roundup" target="_blank">ETH L2 Grant</b-navbar-item>
      <b-navbar-item>
        <div class="devcon-layout" @click.stop="goEthDenver">
          <img class="devcon-img" src="@/assets/denv.png" alt="devcon"/>
          <span class="devcon-text">ETHDenver</span>
        </div>
      </b-navbar-item>
      <b-navbar-item href="https://www.youtube.com/watch?v=rRI-3RV_JHw" target="_blank">
        <div class="devcon-layout">
          <img class="devcon-img" src="@/assets/devcon.png" alt="devcon"/>
          <span class="devcon-text">Devcon</span>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    goEthDenver(){
      this.$router.push({path: "/denver"});
    },
    goHome() {
      this.$router.push({path: "/"});
    }
  }
};
</script>

<style scoped>
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
  cursor: pointer;
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

.devcon-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 35px;
  background: #6979A0;
  border-radius: 4px;
  cursor: pointer;
}
.devcon-layout:hover {
  box-shadow: 6px 6px 10px rgba(0,0,0,0.1);
}
.devcon-img {
  width: 20px;
}
.devcon-text {
  font-size: 14px;
  color: #FFFFFF;
  margin-left: 5px;
  font-family: AlibabaPuHuiTiR;
}

@media screen and (max-width: 500px) {
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

  .devcon-layout {
    width: 98%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .devcon-img {
    width: 18px;
  }
  .devcon-text {
    font-size: 14px;
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
@media screen and (max-width: 500px) {
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
