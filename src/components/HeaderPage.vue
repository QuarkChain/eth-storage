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
          <img class="rt-img" src="@/assets/header-connectors2.svg"/>
          <span class="rt-text" @click="goGrant">
            Supported By <span class="grant-text2">Ethereum ESP</span> <img class="rt-go" src="@/assets/arrow-right-blue.png"/>
          </span>
        </div>
      </div>

      <div class="header-content">
        <div class="header-content-lb">
          <div class="lb-text" @click.stop="goEthDenver">
            Watch ETHDenver Talk <img class="rt-go" src="@/assets/arrow-right-blue.png"/>
          </div>
          <div class="lb-text lb-text-margin" @click.stop="goDevcon">
            Watch Devcon Talk <img class="rt-go" src="@/assets/arrow-right-blue.png"/>
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
  background: url("../assets/header-bg.png") top center no-repeat;
  background-size: 75%;
  max-width: 1200px;
  margin: 0 auto;
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
  justify-content: space-between;
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
  margin-right: 45px;
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
  margin-top: 15px;
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
.rt-text:hover {
  filter: opacity(50%);
}
.grant-text2 {
  font-weight: 700;
}
.rt-go {
  width: 16px;
  padding-bottom: 2px;
}


.header-content-lb {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 95px;
}
.lb-text {
  font-style: normal;
  font-size: 23px;
  line-height: 33px;
  color: #000000;
  font-family: 'Avenir';
  cursor: pointer;
}
.lb-text:hover {
  filter: opacity(50%);
}
.lb-text-margin {
  margin-top: 15px;
}
.header-font-icon {
  margin-left: 450px;
  margin-top: 95px;
  width: 380px;
  height: 350px;
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
