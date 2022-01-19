<template>
  <div>
    <div v-for="user in users" :key="user.id">{{ user.title }}</div>
    news
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      users: "news",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style>
</style>