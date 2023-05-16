<template>
  <div class="main-app">
    <HeaderBanner />
    <HeaderPage/>
    <ExplorePage/>
    <HigherPage/>
    <FeaturesPage/>
    <ApplicationPage/>
    <DAppPage/>
    <FooterPage/>
  </div>
</template>

<script>
import HeaderBanner from '../components/HeaderBanner.vue';
import HeaderPage from '../components/HeaderPage.vue';
import ExplorePage from '../components/ExplorePage.vue';
import HigherPage from '../components/HigherPage.vue';
import FeaturesPage from '../components/FeaturesPage.vue';
import ApplicationPage from '../components/ApplicationPage.vue';
import DAppPage from '../components/DAppPage.vue';
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "Home",
  components: {
    HeaderBanner,
    HeaderPage,
    ExplorePage,
    HigherPage,
    FeaturesPage,
    ApplicationPage,
    DAppPage,
    FooterPage,
  },
};
</script>

<style scoped>
.main-app {
  background: linear-gradient(0.07deg, #FFFFFF 0.06%, #E4EDF6 33.01%, #EEF3FA 64.15%, #FDFDFE 91.74%);
}
</style>
