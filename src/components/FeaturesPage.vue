<template>
  <div>
    <Banner class="work-pc banner-layout" ref="bannerLayout"
            :width="this.fullWidth+'px'" height="100%"
            :indicator="indicator" :disable-on-hover="false" :autoplay="false">
      <Slide>
        <WorkPage1/>
      </Slide>
      <Slide>
        <WorkPage2/>
      </Slide>
      <Slide>
        <WorkPage3/>
      </Slide>
      <Slide>
        <WorkPage4/>
      </Slide>
      <Slide>
        <WorkPage5/>
      </Slide>
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
import Banner from "@/components/banner/Banner";
import Slide from "@/components/banner/Slide";
import WorkPage1 from "./WorkPage1";
import WorkPage2 from "./WorkPage2";
import WorkPage3 from "./WorkPage3";
import WorkPage4 from "./WorkPage4";
import WorkPage5 from "./WorkPage5";

export default {
  data() {
    return {
      fullWidth: document.documentElement.clientWidth,
      autoTime: 0,
      arrowType: 2,
      indicator: {
        clickable: true,
        type: "pill",
      }
    };
  },
  components: {
    Banner,
    Slide,
    WorkPage1,
    WorkPage2,
    WorkPage3,
    WorkPage4,
    WorkPage5,
  },
  methods: {
    handleResize() {
      const oldWidth = this.fullWidth;
      this.fullWidth = document.documentElement.clientWidth;
      if (oldWidth !== this.fullWidth) {
        this.$refs.bannerLayout.containerWidth = this.fullWidth;
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style>
.banner-layout {
  margin: 0 auto !important;
}

.work-phone {
  display: none;
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
