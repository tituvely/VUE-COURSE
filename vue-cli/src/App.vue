<template>
  <div>
    <app-header :message="str" @renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: { AppHeader },
  data() {
    return {
      str: "Header",
    };
  },
  methods: {
    renewStr() {
      this.str = "hi";
    },
  },
};
</script>

<style>
</style>
