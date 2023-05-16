<template>
  <div>
    <Header/>
    <div class="header">
      <p class="header-title1">Scaling the <span class="header-title1-color">storage</span> of</p>
      <p class="header-title2">
        the <span class="title-color2">world</span> <span class="title-color3">computer</span>
      </p>

      <div class="header-content">
        <div class="header-content-lt">
          <img class="lt-img" src="@/assets/header-connectors1.svg"/>
          <div class="lt-text">
            Expanding the storage capacity is crucial for the world computer to onboard the next billion users.
          </div>
        </div>
        <div class="header-content-rt">
          <img src="@/assets/header-connectors2.svg"/>
          <span class="rt-text" @click="goGrant">Supported By <span class="grant-text2">Ethereum ESP</span></span>
          <img class="rt-go" src="../assets/arrow-right-blue.png"/>
        </div>
      </div>

      <div class="header-content">
        <div class="header-content-lb">
          <div class="lb-text" @click.stop="goEthDenver">
            Watch ETHDenver Talk<img class="rt-go" src="../assets/arrow-right-blue.png"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goDevcon">
            Watch Devcon Talk<img class="rt-go" src="../assets/arrow-right-blue.png"/>
          </div>
        </div>
        <img class="header-font-icon" src="@/assets/header-font.svg"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  name: "HeaderPage",
  components: {
    Header,
  },
  methods: {
    goGrant() {
      window.open('https://blog.ethereum.org/2023/02/14/layer-2-grants-roundup#-cryptography-and-zero-knowledge-proofs', "_blank");
    },
    goEthDenver() {
      window.open('https://www.youtube.com/watch?v=7ir-fSEisnc', "_blank");
    },
    goDevcon() {
      window.open('https://www.youtube.com/watch?v=rRI-3RV_JHw', "_blank");
    },
  }
};
</script>

<style scoped>
.header {
  background: url("../assets/header-bg.png") top 30px center no-repeat;
}

.header-title1 {
  padding-top: 216px;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 85px;
  color: #000000;
  text-align: center;
  font-family: 'Futura';
}
.header-title1-color {
  color: #E6AFAA;
}

.header-title2 {
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 85px;
  text-align: center;
  color: #000000;
  font-family: 'Futura';
}
.title-color2 {
  color: #59A5FF;
}
.title-color3 {
  color: #9671FF;
}



.header-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.header-content-lt {
  margin-top: -45px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.lt-img {
  width: 86px;
  height: 92px;
  margin-right: 90px;
}
.lt-text {
  width: 100%;
  height: 190px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #000000;
  padding-top: 25px;
  text-align: left;
  font-family: 'Avenir';
}

.header-content-rt {
  padding-left: 460px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}
.rt-text {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  padding-left: 25px;
  font-family: 'Avenir';
  cursor: pointer;
}
.grant-text2 {
  font-weight: 700;
}
.rt-go {
  width: 16px;
  padding-bottom: 9px;
  margin-left: 4px;
}


.header-content-lb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
}
.lb-text {
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
  line-height: 33px;
  color: #000000;
  font-family: 'Avenir';
  cursor: pointer;
}
.lb-text-margin {
  margin-top: 15px;
}
.header-font-icon {
  margin-left: 450px;
  width: 380px;
  height: 350px;
}
@media screen and (max-width: 500px) {
  .header {
    background-size: 100% auto;
  }

  .header-content {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 98%;
    justify-content: space-around;
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
}
</style>
