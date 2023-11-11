<template>
  <div class="footer-div">
    <div class="footer-top">
      <img class="footer-font" src="@/assets/footer-font.svg" />
      <div class="subscribe-div">
        <div class="subscribe-title">Sign up for EthStorage updates</div>
        <div class="sub-layout">
          <el-input class="sub-input" v-model="subscribeEmail" type="email" placeholder="Email Address"></el-input>
          <el-button class="sub-button" :loading="subscribeProgress" @click="subscribe">
            Subscribe
          </el-button>
        </div>
      </div>
      <div class="footer-empty"/>
    </div>
    <div class="footer-b">
      <div class="footer-b-text">2023 EthStorage</div>
      <img class="community-icon" src="@/assets/ethstorage.svg" alt="twitter" />
      <div class="community-layout">
        <img class="community-icon" src="@/assets/twitter.png" alt="twitter" @click.stop="goTwitter"/>
        <img class="community-icon" src="@/assets/discord.png" alt="discord" @click.stop="goDiscord"/>
        <img class="community-icon" src="@/assets/telegram.png" alt="telegram" @click.stop="goTelegram"/>
        <img class="community-icon" src="@/assets/github.png" alt="discord" @click.stop="goGithub"/>
        <img class="community-icon" src="@/assets/medium.svg" alt="telegram" @click.stop="goMedium"/>
      </div>
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
    },
    goTwitter(){
      window.open('https://twitter.com/EthStorage', "_blank");
    },
    goDiscord(){
      window.open('https://discord.gg/xhCwaMp7ps', "_blank");
    },
    goTelegram(){
      window.open('https://t.me/ethstorage', "_blank");
    },
    goGithub() {
      window.open('https://github.com/ethstorage/', "_blank");
    },
    goMedium() {
      window.open('https://ethstorage.medium.com/', "_blank");
    }
  }
};
</script>

<style scoped>
.footer-div {
  background: #825BF2 url("../assets/footer-bg.svg") bottom right no-repeat;
  background-size: 29%;
}

.footer-top {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 85px;
}

.footer-font {
  width: 265px;
  height: 162px;
}

.subscribe-div {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}
.subscribe-title  {
  color: #FFF;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  font-family: Satoshi;
}
.sub-layout {
  width: 500px;
  margin-top: 25px;
  background: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 29px;
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
  color: #9588E5;
  font-size: 18px;
  font-family: Satoshi;
}
.sub-button {
  position: absolute !important;
  z-index: 1;
  right: 3px;
  margin-top: 3px;
  display: inline-flex;
  height: 44px;
  color: #FFFFFF;
  background: #171F1A;
  border-radius: 100px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  font-family: Satoshi;
}
.sub-button:focus,
.sub-button:hover {
  color: #FFFFFF;
  background: rgba(56, 56, 56, 0.7);
}

.footer-empty {
  width: 100px;
  height: 100px;
}

.footer-b {
  padding-bottom: 20px;
  width: 1300px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.footer-b-text {
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  font-family: Satoshi;
}
.community-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.community-icon {
  margin: auto 15px;
  width: 28px;
  cursor: pointer;
}
 .community-icon:hover {
   opacity: .7;
 }

@media screen and (max-width: 500px) {
  .footer-div {
    background: none;
  }

  .footer-top {
    width: 100%;
    padding-top: 80px;
    justify-content: center;
  }

  .footer-font {
    display: none;
  }
  .subscribe-div {
    width: 90%;
  }
  .subscribe-title  {
    font-family: 'Futura';
    line-height: 125%;
    color: #000000;
  }
  .sub-layout {
    width: 100%;
    margin-top: 15px;
    height: 50px;
  }
  .sub-input >>> .el-input__inner {
    height: 48px;
    padding-left: 15px;
    padding-right: 120px;
    font-size: 15px;
  }
  .sub-button {
    width: 120px;
    height: 48px;
    font-size: 15px;
  }
  .footer-empty {
    display: none;
  }

  .footer-b {
    padding-bottom: 30px;
    width: 90%;
    margin: 80px auto 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .community-layout {
    margin-top: 15px;
  }
  .community-icon {
    margin: auto 10px;
  }
}
</style>
