<template>
  <div>
    <div v-for="user in users" :key="user">{{ user.title }}</div>
    news
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then((response) => (this.users = response.data))
      .catch(console.log);
  },
};
</script>

<style>
</style>