<template>
  <div>
    <div class="subscribe-div">
      <div class="subscribe-title">Sign up for EthStorage updates</div>
      <div class="sub-layout">
        <el-input class="sub-input" v-model="subscribeEmail" type="email" placeholder="Email Address"></el-input>
        <el-button class="sub-button" :loading="subscribeProgress" @click="subscribe">
          SUBSCRIBE
        </el-button>
      </div>
    </div>
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
      <a href="https://discord.gg/xhCwaMp7ps" target="_blank">
        <img class="footer-img" src="@/assets/discord.png">
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FooterPage",
  data: () => ({
    subscribeEmail: "",
    subscribeProgress: false,
  }),
  computed: {
    isEmail() {
      const reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
      return reg.test(this.subscribeEmail);
    }
  },
  methods: {
    subscribe() {
      if (!this.isEmail) {
        this.$message({
          showClose: true,
          message: 'Invalid email address',
          type: 'error'
        });
        return;
      }
      this.subscribeProgress = true;
      axios.post(
          'https://connect.mailerlite.com/api/subscribers',
          {
            "email": this.subscribeEmail
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNGUxNmMwYTA0ZmJiMGVlOTRmYjA3YTNjY2FjODlmMDk5YWU3Zjk2MTBmMDA5MTRjODA0ZmM1Mzc4ZmZiZmY2MWUwMjdmNGNmMjhhNGU3M2EiLCJpYXQiOjE2NzY2MTc5MzUuNzMwNDY4LCJuYmYiOjE2NzY2MTc5MzUuNzMwNDcsImV4cCI6NDgzMjI5MTUzNS43MjU3MTksInN1YiI6IjM1ODk2MCIsInNjb3BlcyI6W119.w3Sv3VHOz5tQLpMx5MmlgAeMXQWS7wIQBYQ_vA7GBLtMMv2iQ81Zk2m5tTwmFYH-rTt2GnykNXwUFFLv5mt85DunUyicoCLWTUqfqGh1S0fvagJTMoX6d57jBNuZ4fWdFQY3rXTTQy4DdadWjas-TZMEVRHVkVMAO7VXYJu10VuobIgZyIr2_OvADuF71VHvKeCIBn22fm4_uRKdpViYDbRrskszL_p4xFX3aGbJu9kZTr8B3DIGQgBNmrxWXG2RVRqk8NAkdGVKkOKhqp2OujR4Ap_InKrvIQaf9iQjzhiqMtyarbhJrNMtxAyHYHA_xD9o0u6aOuZQD7PwA7IK03RiJQEDXXKML5k75Z0QSYbc9Y98enq-IbcM8_9VtP-yCucfCi2cNAdEicX8E7TE-Xkr54tGblQusErsnSDBFbULYK4mMiTjxi4lPytfLZj-9TIGWRCersgS9gA6-61XUlhTJ_Auf4SLoHa_EGgNkHimk_-prOCyOGasMsEuiOQSG2klTmjdclGy7OJrkzjNW-TkG7JdCwSmiGzX9iwZAPx6HlOPogkiE_wihFnlQ41tbw_fNoPdcjYNw9SVTctBAtryvvMVl0hLSRWNHm77v9SROrB6twC1x7-mZ3RwHGpA20TqZfgaPPVNHkmb3EusfOnv6oUJ7OACbp9SMTF8S_8'
            }
          }
      ).then(() => {
        this.subscribeProgress = false;
        this.$message({
          showClose: true,
          message: 'Subscribe success',
          type: 'success'
        });
      }).catch(() => {
        this.subscribeProgress = false;
        this.$message({
          showClose: true,
          message: 'Subscribe fail, Please try again!',
          type: 'error'
        });
      });
    }
  }
};
</script>

<style scoped>
.subscribe-div {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background: black;
}

.subscribe-title  {
  margin-top: 50px;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  font-family: AlibabaPuHuiTiR;
}

.sub-layout {
  width: 500px;
  margin-top: 25px;
  border-radius: 29px;
  border: 2px solid #FFFFFF;
  background: #000000;
  height: 52px;
}
.sub-input {
  background: transparent;
}
.sub-input >>> .el-input__inner {
  background-color: transparent;
  border: none;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 140px;
  color: #FFFFFF;
  font-size: 18px;
  font-family: AlibabaPuHuiTiR;
}

.sub-button {
  position: absolute !important;
  z-index: 1;
  right: -1px;
  width: 140px;
  height: 50px;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
  background: #FFFFFF;
  border-radius: 0 29px 29px 0;
  border: 1px solid #FFFFFF;
  font-family: AlibabaPuHuiTiR;
}
.sub-button:focus,
.sub-button:hover {
  color: #000000;
  border: 0;
  background: rgba(255, 255, 255, 0.9);
}

@media screen and (max-width: 500px) {
  .subscribe-title  {
    margin-top: 30px;
    font-size: 16px;
  }

  .sub-layout {
    width: 76%;
    height: 38px;
    margin-bottom: 5px;
  }

  .sub-input >>> .el-input__inner {
    padding-left: 15px;
    padding-right: 110px;
    height: 38px;
    font-size: 10px !important;
  }

  .sub-button {
    width: 110px;
    height: 36px;
    line-height: 10px;
    font-size: 10px;
  }
}
</style>
<style>
.footer {
  padding-top: 40px !important;
  padding-bottom: 40px !important;
  background: black !important;
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer a {
  color: #ffffff;
  font-size: 13px;
  padding: 10px;
  vertical-align: middle;
}
.footer a:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.footer-img {
  width: 50px;
  height: 50px;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(329deg) brightness(105%) contrast(102%);
}

@media screen and (max-width: 500px) {
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
