<template>
  <div class="footer">
    <a href="https://github.com/ethstorage/" target="_blank">
      <img class="footer-img" src="@/assets/github.png">
    </a>
    <a href="https://twitter.com/EthStorage" target="_blank">
      <img class="footer-img" src="@/assets/twiter.png">
    </a>
    <a href="https://ethstorage.medium.com/" target="_blank">
      <img class="footer-img" src="@/assets/medium.png">
    </a>
    <a href="https://t.me/ethstorage" target="_blank">
      <img class="footer-img" src="@/assets/telegram.png">
    </a>
    <a href="https://discord.gg/mZqqUZxjed" target="_blank">
      <img class="footer-img" src="@/assets/discord.png">
    </a>
  </div>
</template>

<style>
.footer {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  background: white;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer a {
  color: #000;
  font-size: 13px;
  padding: 10px;
  vertical-align: middle;
}
.footer-img {
  width: 36px;
  height: 36px;
}

@media screen and (max-width: 450px) {
  .footer {
    padding-top: 0;
    padding-bottom: 0;
    height: 56px;
  }
  .footer-img {
    width: 25px;
    height: 25px;
  }
}
</style>
