<template>
  <div>
    <div v-for="job in jobs" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobList } from "../api/index";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobList()
      .then((response) => (this.jobs = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>