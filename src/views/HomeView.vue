<template>
  <div>
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
