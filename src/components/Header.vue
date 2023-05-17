<template>
  <b-navbar class="navbar">
    <template #brand>
      <div class="navbar-logo">
        <img class="navbar-icon" src="@/assets/logo.png" alt="logo">
        <div class="navbar-text">EthStorage</div>
      </div>
    </template>
    <template #start></template>
    <template #end>
      <b-navbar-item href="https://faucet.w3q.w3q-g.w3link.io/" target="_blank">
        <span class="item-text">Faucet<img class="item-arrow" src="@/assets/arrow-right.png"/></span>
      </b-navbar-item>
      <b-navbar-item
          href="https://file.w3q.w3q-g.w3link.io/0x67d0481cc9c2e9dad2987e58a365aae977dcb8da/dynamic_data_sharding_0_1_6.pdf"
          target="_blank">
        <span class="item-text">Technology<img class="item-arrow" src="@/assets/arrow-right.png"/></span>
      </b-navbar-item>
      <b-navbar-item href="https://github.com/ethstorage" target="_blank">
        <span class="item-text">Developer<img class="item-arrow" src="@/assets/arrow-right.png"/></span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style scoped>
.navbar {
  max-width: 1340px;
  height: 52px;
  margin: 20px auto 0;
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
  font-style: normal;
  font-weight: 590;
  line-height: 37px;
  text-align: center;
  font-size: 23px;
  margin-left: 15px;
  color: #000000 !important;
  font-family: 'SF Pro';
}

.item-text {
  margin: 0 15px;
}
.item-arrow {
  width: 16px;
  height: 16px;
  margin-left: 7px;
  margin-top: -2px;
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
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  font-family: 'Avenir';
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
  filter: opacity(50%);
  background-color: transparent !important;
}
@media screen and (max-width: 500px) {
  .b-pagination {
    margin-bottom: 230px !important;
  }

  .navbar-menu {
    background: #FFFFFF !important;
  }

  .navbar-burger {
    color: black !important;
  }
}
</style>
