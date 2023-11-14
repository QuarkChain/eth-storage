<template>
  <div>
    <Banner class="work-pc" arrow="2" autoPlay="-1" :showPage="false">
      <div class="fly-banner-slider">
        <WorkPage1 />
      </div>
      <div class="fly-banner-slider">
        <WorkPage2 />
      </div>
      <div class="fly-banner-slider">
        <WorkPage3 />
      </div>
      <div class="fly-banner-slider">
        <WorkPage4 />
      </div>
      <div class="fly-banner-slider">
        <WorkPage5 />
      </div>
    </Banner>

    <div class="work-phone">
      <WorkPage1 />
      <WorkPage2 />
      <WorkPage3 />
      <WorkPage4 />
      <WorkPage5 />
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
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
    Banner,
    WorkPage1,
    WorkPage2,
    WorkPage3,
    WorkPage4,
    WorkPage5,
  }
}
</script>

<style>
.work-phone {
  display: none;
}
.fly-banner-container {
  width: 100vw;
  height: 820px;
}
.fly-banner-slider {
  width: 100vw;
  height: 820px;
}

@media screen and (max-width: 500px) {
  .work-pc {
    display: none;
  }
  .work-phone {
    display: flex;
    flex-direction: column;
  }
}
</style>
