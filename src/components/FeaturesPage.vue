<template>
  <div>
    <WorkPage1 />
    <WorkPage2 />
    <WorkPage3 />
    <WorkPage4 />
    <WorkPage5 />
  </div>
<!--  <Banner width="100%" height="768px" :indicator="indicator">-->
<!--    <Slide>-->
<!--      <WorkPage1 />-->
<!--    </Slide>-->
<!--    <Slide>-->
<!--      <WorkPage1 />-->
<!--    </Slide>-->
<!--    <Slide>-->
<!--      <WorkPage1 />-->
<!--    </Slide>-->
<!--  </Banner>-->
</template>

<script>
import WorkPage1 from "./WorkPage1";
import WorkPage2 from "./WorkPage2";
import WorkPage3 from "./WorkPage3";
import WorkPage4 from "./WorkPage4";
import WorkPage5 from "./WorkPage5";

export default {
  data() {
    return {
      indicator: {
        clickable: true,
        type: "pill",
        showCounter: false
      }
    };
  },
  components: {
    WorkPage1,
    WorkPage2,
    WorkPage3,
    WorkPage4,
    WorkPage5,
  }
}
</script>

<style scoped>
.feature {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.feature-message {
  margin-top: 60px;
  font-family: 'Futura';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 48px;
  color: #000000;
}

.feature-img {
  width: 1200px;
  margin-top: 15px;
  content: url("../assets/feature.png");
}

@media screen and (max-width: 500px) {
  .feature {
    max-width: 100%;
  }

  .feature-message {
    font-size: 24px;
    margin-top: 40px;
  }

  .feature-img {
    width: 90%;
    margin-top: 30px;
    content: url("../assets/feature-phone.png");
  }
}
</style>
