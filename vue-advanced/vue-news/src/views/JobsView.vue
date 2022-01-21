<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="job in jobs" :key="job.id">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <p class="news-title">
          <a :href="job.url">{{ job.title }}</a>
        </p>
        <small class="link-text">
          {{ job.time_ago }} by
          <a :href="job.domain">{{ job.domain }}</a>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["jobs"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style>
.news-list {
  padding: 0;
  margin: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  font-weight: bold;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>