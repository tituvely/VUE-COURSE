<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit("start:spinner");
    // 가상의 network 환경
    setTimeout(() => {
      this.$store.dispatch("FETCH_NEWS").then(() => {
        bus.$emit("end:spinner");
      });
    }, 3000);
  },
};
</script>

<style>
</style>