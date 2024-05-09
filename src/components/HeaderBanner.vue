<template>
  <div class="header-banner">
    <p class="header-text">
      🎉 EthStorage public testnet is live on Sepolia. <a href="https://github.com/ethstorage/es-node/blob/main/ONBOARD.md" target="_blank" class="w3q-link">
      Get involved</a> today!
    </p>
  </div>
</template>

<style scoped>
.header-banner {
  width: 100%;
  background: #9671FF;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.header-text {
  font-family: Satoshi;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 140%;
  color: #FFFFFF;
  text-align: left;
}

a.w3q-link {
  font-family: Satoshi;
  font-weight: 590;
  text-decoration: none;
  border-bottom: 1px solid #FFFFFF;
}
a.w3q-link:link,
a.w3q-link:visited,
a.w3q-link:hover {
  color: #FFFFFF;
  background-color: transparent;
}
a.w3q-link:hover {
  filter: opacity(50%);
  background-color: transparent;
}

@media screen and (max-width: 500px) {
  .header-banner {
    align-items: flex-start;
    padding: 8px 5px;
  }

  .header-text {
    font-size: 10px;
    text-align: center;
  }

}
</style>
