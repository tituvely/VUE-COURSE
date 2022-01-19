<template>
  <div id="app">
    <header></header>
    <ToolBar></ToolBar>
    <main></main>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  name: "App",
  components: {
    ToolBar,
  },
};
</script>

<style>
</style>
