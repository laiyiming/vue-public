<template>
  <div id="app">
    <PageView />
  </div>
</template>

<script>
import PageView from "./views/common/PageView.vue";

export default {
  name: "app",
  components: {
    PageView
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
