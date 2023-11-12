<template>
  <div>
    <Banner>
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
