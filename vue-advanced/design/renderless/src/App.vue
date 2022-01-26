<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
    </fetch-data>
  </div>
</template>

<script>
import FetchData from "./components/FetchData.vue";

export default {
  components: {
    FetchData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
