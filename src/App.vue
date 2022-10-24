<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  max-width: 100%;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
