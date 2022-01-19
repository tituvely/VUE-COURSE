<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
    news
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => (this.users = response.data))
      .catch(console.log);
  },
};
</script>

<style>
</style>