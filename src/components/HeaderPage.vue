<template>
  <div>
    <Header/>
    <div class="header">
      <div class="content">
        <div class="header-title1">Scaling the <span class="header-title1-color">Storage</span> of</div>
        <div class="header-title2">
          the <span class="title-color2">World Computer</span>
        </div>

        <div class="lt-text">
          Expanding the storage capacity is crucial for the<br>
          world computer to onboard the next billion users.
        </div>
        <!--        <span class="rt-text" @click="goGrant">-->
        <!--          Supported By <span class="grant-text2">Ethereum ESP</span> <img class="rt-go" src="@/assets/arrow-right-blue.png"/>-->
        <!--        </span>-->

        <div class="header-clo-item">
          <div class="lb-text" @click.stop="goEthDenver">
            Watch ETHDenver Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goDevcon">
            Watch Devcon Talk <img class="rt-go" src="@/assets/arrow-right.svg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="header-content">
      <div class="header-content-lb" />
      <img class="header-font-icon" src="@/assets/header-font.png"/>
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
  background: url("../assets/header-bg.png") center center no-repeat;
  background-size: 100%;
  height: 1100px;
}
.content {
  max-width: 1200px;
  margin: 0 auto;
}

.header-title1 {
  padding-top: 80px;
  text-align: left;
  color: #000000;
  font-size: 48px;
  font-weight: 900;
  line-height: 120%;
  font-style: normal;
  font-family: SatoshiBold;
}
.header-title1-color {
  color: #E6AFAA;
}

.header-title2 {
  text-align: left;
  color: #000000;
  font-size: 48px;
  font-weight: 900;
  line-height: 120%;
  font-style: normal;
  font-family: SatoshiBold;
}
.title-color2 {
  color: #9671FF;
}


.lt-text {
  margin-top: 24px;
  color: #000000;
  text-align: left;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  font-family: Satoshi;
}

.header-clo-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.lb-text {
  margin-top: 30px;
  cursor: pointer;
  color: #9671FF;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: SatoshiBlod;
}
.lb-text:hover {
  filter: opacity(80%);
}
.lb-text-margin {
  margin-top: 15px;
}

.rt-go {
  width: 16px;
  padding-bottom: 2px;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: -370px;
  padding-right: 25px;
}
.header-font-icon {
  width: 312px;
  height: 285px;
}
@media screen and (max-width: 500px) {
  .header {
    background: url("../assets/header-bg.png") top 30px center no-repeat;
    background-size: 99%;
    max-width: 100%;
  }


  .header-title1 {
    padding-top: 130px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  .header-title2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }


  .header-content {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header-content-lt {
    margin-top: 0;
  }
  .lt-text {
    width: 100%;
    height: auto;
    padding-top: 38px;
    text-align: center;
  }

  .header-content-rt {
    margin-top: 29px;
    align-items: center;
  }
  .rt-text {
    padding-left: 0;
  }



  .header-content-lb {
    align-items: center;
    margin-top: 46px;
  }
  .lb-text {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  .lb-text-margin {
    margin-top: 10px;
  }

  .lt-img {
    display: none;
  }
  .rt-img {
    display: none;
  }
  .header-font-icon {
    display: none;
  }
}
</style>
