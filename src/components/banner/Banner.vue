<template>
  <div
    v-cloak
    :class="['b-wrapper', bordered ? 'b-bordered' : '']"
    :style="{ width, height }"
    @mouseover="disableOnHover ? over($event) : ''"
    @mouseout="disableOnHover ? out() : ''"
  >
    <div v-show="!didOk" class="b-layout-placeholder"></div>
    <div
      v-show="didOk"
      class="b-banner"
      ref="banner"
      :style="{
        width: `${wraperWidth}px`,
        transform: `translateX(${offset}px)`,
        'transition-duration': stopTransition ? '0s' : '500ms'
      }"
    >
      <slot></slot>
    </div>


<!--    <div-->
<!--      class="b-pagination"-->
<!--      v-if="PAGINATION.align && slideCount"-->
<!--      :style="{-->
<!--        'justify-content':-->
<!--          PAGINATION.align != 'center' ? 'flex-' + PAGINATION.align : 'center'-->
<!--      }"-->
<!--      @mouseover="overPagenation($event)"-->
<!--    >-->
<!--      <ul class="b-indicators">-->
<!--        <li-->
<!--          v-for="(v, i) in Array(-->
<!--            mode == 'loop'-->
<!--              ? slideCount - 2 > 0-->
<!--                ? slideCount - 2-->
<!--                : 1-->
<!--              : slideCount-->
<!--          )"-->
<!--          :key="i"-->
<!--          :class="[-->
<!--            'b-indicator',-->
<!--            PAGINATION.clickable ? 'b-pointer' : '',-->
<!--            `b-${PAGINATION.type}`-->
<!--          ]"-->
<!--          @click="-->
<!--            PAGINATION.clickable ? (mode == 'loop' ? goLoop(i + 1) : go(i)) : ''-->
<!--          "-->
<!--          :style="{-->
<!--            backgroundColor:-->
<!--              i == cur - 1 ? PAGINATION.activeColor : PAGINATION.color,-->
<!--            color:-->
<!--              i == cur - 1 ? PAGINATION.activeTextColor : PAGINATION.textColor-->
<!--          }"-->
<!--        >{{ PAGINATION.showCounter ? i + 1 : '' }}</li>-->
<!--      </ul>-->
<!--    </div>-->

    <div
      class="b-nav b-left-arrow"
      @click="mode == 'loop' ? debouncedPrevLoop() : prev()"
      v-show="showNavigation ? (mode != 'loop' ? activeIndex != 0 : true) : false">
      <svg width="64" height="82" viewBox="0 0 64 82" fill="none" :stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.8095 1.219L23.3717 36.2094C23.357 36.2262 23.3485 36.2475 23.3473 36.2698L22.8409 45.9318C22.8359 46.0268 22.9538 46.0744 23.0162 46.0027L53.454 11.0123C53.4687 10.9954 53.4773 10.9742 53.4784 10.9519L53.9848 1.28986C53.9898 1.1949 53.8719 1.14725 53.8095 1.219Z"
              fill="white"/>
        <path d="M43.5943 71.4378L4.48192 36.3739C4.41936 36.3178 4.3197 36.3592 4.31531 36.4432L3.80539 46.1729C3.80381 46.2031 3.81598 46.2324 3.8385 46.2526L42.9509 81.3165C43.0134 81.3726 43.1131 81.3312 43.1175 81.2473L43.6274 71.5175C43.629 71.4873 43.6168 71.458 43.5943 71.4378Z"
              fill="white"/>
        <path d="M62.547 71.4727H43.7245C43.6713 71.4727 43.6274 71.5143 43.6246 71.5674L43.1118 81.3537C43.1088 81.4109 43.1543 81.459 43.2116 81.459H62.0341C62.0873 81.459 62.1312 81.4173 62.134 81.3642L62.6468 71.5779C62.6498 71.5207 62.6043 71.4727 62.547 71.4727Z"
              fill="white"/>
        <path d="M35.0191 1H53.7611C53.8498 1 53.9076 1.10618 53.8531 1.16891L23.4097 36.1657C23.3761 36.2044 23.3837 36.2664 23.4268 36.305L62.4643 71.3019C62.5343 71.3646 62.5025 71.4708 62.4138 71.4708H53.1414H43.6719C43.6451 71.4708 43.6181 71.4601 43.597 71.4412L4.40406 36.305C4.36097 36.2664 4.35335 36.2044 4.38696 36.1657L34.9515 1.02959C34.968 1.01066 34.9923 1 35.0191 1Z"
              fill="white"/>
      </svg>
    </div>
    <div
      class="b-nav b-right-arrow"
      @click="mode == 'loop' ? debouncedNextLoop() : next()"
      v-show="showNavigation ? mode != 'loop'  ? activeIndex != slideCount - 1 : true : false">
      <svg width="64" height="82" viewBox="0 0 64 82" fill="none" :stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.1905 1.219L40.6283 36.2094C40.643 36.2262 40.6515 36.2475 40.6527 36.2698L41.1591 45.9318C41.1641 46.0268 41.0462 46.0744 40.9838 46.0027L10.546 11.0123C10.5313 10.9954 10.5227 10.9742 10.5216 10.9519L10.0152 1.28986C10.0102 1.1949 10.1281 1.14725 10.1905 1.219Z"
              fill="white"/>
        <path d="M20.4057 71.4378L59.5181 36.3739C59.5806 36.3178 59.6803 36.3592 59.6847 36.4432L60.1946 46.1729C60.1962 46.2031 60.184 46.2324 60.1615 46.2526L21.0491 81.3165C20.9866 81.3726 20.8869 81.3312 20.8825 81.2473L20.3726 71.5175C20.371 71.4873 20.3832 71.458 20.4057 71.4378Z"
              fill="white"/>
        <path d="M1.45303 71.4727H20.2755C20.3287 71.4727 20.3726 71.5143 20.3754 71.5674L20.8882 81.3537C20.8912 81.4109 20.8457 81.459 20.7884 81.459H1.96591C1.91272 81.459 1.86883 81.4173 1.86605 81.3642L1.35317 71.5779C1.35017 71.5207 1.39575 71.4727 1.45303 71.4727Z"
              fill="white"/>
        <path d="M28.9809 1H10.2389C10.1502 1 10.0924 1.10618 10.1469 1.16891L40.5903 36.1657C40.6239 36.2044 40.6163 36.2664 40.5732 36.305L1.53569 71.3019C1.46572 71.3646 1.49746 71.4708 1.58619 71.4708H10.8586H20.3281C20.3549 71.4708 20.3819 71.4601 20.403 71.4412L59.5959 36.305C59.639 36.2664 59.6467 36.2044 59.613 36.1657L29.0485 1.02959C29.032 1.01066 29.0077 1 28.9809 1Z"
              fill="white"/>
      </svg>
    </div>
  </div>
</template>
<script>
import * as PropConfig from "./config/com.config";
import throttle from "./utils/throttle";

export default {
  name: "Banner",
  data() {
    return {
      containerWidth: 600,
      activeIndex: 0,
      timer: null,
      slideCount: 20,
      flag: true,
      loopcurindex: 1,
      stopTransition: false,
      PAGINATION: {},
      shouldPause: false,
      didOk: false,
      currentColor: "#4AA6FF"
    };
  },
  beforeMount() {
    let pagination = this.$props.indicator;
    if (typeof pagination === "object") {
      this.PAGINATION = Object.assign({}, PropConfig.INDICATOR, pagination);
    } else if (typeof pagination === "boolean") {
      if (pagination) {
        this.PAGINATION = PropConfig.INDICATOR;
      }
    }
  },
  props: {
    width: {
      type: String,
      default: '800px',
    },
    height: {
      type: String,
      default: '400px',
    },
    bordered: {
      type: Boolean,
      default: PropConfig.BORDERED,
    },
    mode: {
      type: String,
      default: PropConfig.MODE,
      validator(val) {
        if (!["alternate", "loop"].includes(val)) {
          throw new TypeError(
            `invalid prop value for 'mode', expects 'alternate' or 'loop' but received '${val}'`
          );
        }
        return true;
      },
    },

    autoplay: {
      type: Boolean,
      default: PropConfig.AUTOPLAY,
    },
    interval: {
      type: Number,
      default: PropConfig.INTERVAL,
    },
    indicator: {
      type: [Object, Boolean],
      validator(val) {
        const isOptions = typeof val === "object";
        const isBool = typeof val === "boolean";
        if (!isOptions && !isBool) {
          throw new TypeError(`invalid prop type for 'indicator'`);
        }
        if (isOptions) {
          if (
            val.type &&
            !["bar", "circle", "square", "pill"].includes(val.type)
          ) {
            throw new TypeError(`invalid prop value for 'indicator.type'`);
          }
          if (val.align && !["center", "start", "end"].includes(val.align)) {
            throw new TypeError(`invalid prop value for 'indicator.align'`);
          }
        }
        return true;
      },
    },
    "show-navigation": {
      type: Boolean,
      default: PropConfig.SHOW_NAVIGATION,
    },
    "disable-on-hover": {
      type: Boolean,
      default: PropConfig.DISABLE_ON_HOVER,
    },
  },
  computed: {
    offset() {
      return -this.activeIndex * this.containerWidth;
    },
    wraperWidth() {
      return this.containerWidth * this.slideCount;
    },
    cur() {
      return this.slideCount > 1
        ? this.$props.mode == "loop"
          ? this.loopcurindex
          : this.activeIndex + 1
        : 1;
    },
  },
  mounted() {
    let banner = this.$refs.banner;
    this.containerWidth = banner.parentNode.offsetWidth;
    let slides = banner.children;
    if (slides.length == 0) {
      throw new Error(
        `The banner component must contain at least one slide component`
      );
    }
    if (
      Array.prototype.slice
        .call(slides)
        .some((slide) => !slide.classList.contains("b-slide"))
    ) {
      throw new Error(
        `The direct child element of Banner component can only be Slide component`
      );
    }
    if (this.mode == "loop") {
      if (slides.length > 1) {
        banner.appendChild(slides[0].cloneNode(true));
        banner.insertBefore(
          slides[slides.length - 2].cloneNode(true),
          slides[0]
        );
        this.activeIndex = 1;
      }
      // throttle
      this.debouncedPrevLoop = throttle(this.prevLoop, 500, this);
      this.debouncedNextLoop = throttle(this.nextLoop, 500, this);
      banner.addEventListener("transitionend", this.TREnd, false);
    }
    this.didOk = true;
    if (this.autoplay == true && slides.length > 1) {
      this.start();
    }
    this.slideCount = banner.children.length;
  },
  beforeDestroy() {
    this.cancel();
    this.$refs.banner.removeEventListener("transitionend", this.TREnd, false);
  },
  methods: {
    start() {
      this.cancel();
      if (!this.shouldPause) {
        this.timer = setInterval(this.move.bind(this), this.interval);
      }
    },
    cancel() {
      clearInterval(this.timer);
    },
    over(e) {
      if (this.slideCount < 2) return;
      const cls = e.target.classList;
      if (!cls.contains("b-nav")) {
        this.cancel();
      }
    },
    out() {
      if (this.slideCount < 2) return;
      if (this.autoplay == true) {
        this.start();
      }
    },
    move() {
      if (this.shouldPause) return;
      switch (this.mode) {
        case "loop":
          this.nextLoop();
          break;
        case "alternate":
          this.alternate();
          break;
        default:
          throw new TypeError(`unknow option ${this.mode} for 'mode'!`);
      }
    },
    next() {
      if (this.slideCount < 2) return;
      let n = this.activeIndex + 1;
      this.go(n);
    },
    nextLoop() {
      if (this.slideCount < 2) return;
      this.shouldPause = true;
      this.cancel();
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      if (this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      let n = this.activeIndex + 1;
      if (n >= this.slideCount) {
        n = 1;
      }
      this.go(n);
      this.loopcurindex = n;
      if (n == this.slideCount - 1) {
        this.loopcurindex = 1;
      }
      if(this.autoplay) {
        this.$nextTick(() => {
          this.shouldPause = false;
          this.start();
        });
      }
    },
    TREnd() {
      if (this.activeIndex == this.slideCount - 1) {
        this.stopTransition = true;
        this.activeIndex = 1;
      } else if (this.activeIndex == 0) {
        this.stopTransition = true;
        this.activeIndex = this.slideCount - 2;
      }
    },
    prevLoop() {
      if (this.slideCount < 2) return;
      this.shouldPause = true;
      this.cancel();
      if (this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      if (this.activeIndex == 1) {
        this.stopTransition = false;
      }
      let n = this.activeIndex - 1;
      if (n <= -1) {
        n = this.slideCount - 2;
      }
      this.go(n);
      this.loopcurindex = n;
      if (n <= 0) {
        this.loopcurindex = this.slideCount - 2;
      }
      if(this.autoplay) {
        this.$nextTick(() => {
          this.shouldPause = false;
          this.start();
        });
      }
    },
    prev() {
      if (this.slideCount < 2) return;
      let n = this.activeIndex - 1;
      this.go(n);
    },
    alternate() {
      if (this.slideCount < 2) return;
      let n = this.activeIndex;
      if (this.flag) {
        n++;
        if (n >= this.slideCount) {
          this.flag = false;
          n -= 2;
        }
      } else {
        n--;
        if (n <= -1) {
          this.flag = true;
          n += 2;
        }
      }
      this.activeIndex = n;
    },
    go(i) {
      if (this.slideCount < 2) return;
      this.cancel();
      this.activeIndex = i;

      const colorMod = this.activeIndex % 5;
      if (colorMod === 1 || colorMod === 4) {
        this.currentColor = "#4AA6FF";
      } else if (colorMod === 2 || colorMod === 0) {
        this.currentColor = "#FF8972";
      } else {
        this.currentColor = "#9671FF";
      }
      if (this.autoplay == true) {
        this.$nextTick(() => {
          this.start();
        });
      }
    },
    goLoop(i) {
      if (this.slideCount < 2) return;
      this.cancel();
      this.activeIndex = i;
      this.loopcurindex = i;
      if (this.activeIndex == 2 || this.activeIndex == this.slideCount - 2) {
        this.stopTransition = false;
      }
      if (this.autoplay == true) {
        this.$nextTick(() => {
          this.start();
        });
      }
    },
    overPagenation(e) {
      e.stopPropagation();
      e.preventDefault();
    },
  },
};
</script>
<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.b-bordered {
  outline: 1px solid black;
}
.b-wrapper {
  position: relative;
  margin: 10px auto;
  box-sizing: border-box;
  overflow: hidden;
  padding: 0;
  &:hover .b-nav {
    opacity: 1;
  }
  .b-banner {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: translateX(0);
    transition: all ease-in;

    .b-slide {
      height: 100%;
      flex: 1;
    }
  }
  .b-pagination {
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    bottom: 8px;
    .b-indicators {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      padding-left: 10px;
      padding-right: 10px;
      .b-indicator {
        flex: 1;
        flex-wrap: nowrap;
        height: 15px;
        width: 15px;
        margin: 4px;
        font-size: 50%;
        box-sizing: border-box;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        &.b-square {
          border: none;
        }
        &.b-circle {
          border-radius: 50%;
        }
        &.b-bar {
          width: 25px;
          height: 5px;
        }
        &.b-pill {
          width: 25px;
          height: 5px;
          border-radius: 5px;
        }
        &.b-pointer {
          cursor: pointer;
        }
      }
    }
  }
  .b-nav {
    position: absolute;
    text-align: center;
    width: 80px;
    height: 80px;
    top: 50%;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    &::selection {
      background: none;
    }
  }

  .b-nav.b-left-arrow {
    left: 0;
    transform: translate(15%, -50%);
  }
  .b-nav.b-right-arrow {
    right: 15px;
    transform: translate(-15%, -50%);
  }
}
</style>
