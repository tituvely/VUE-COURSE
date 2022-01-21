<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in news" :key="item.id">
        <div class="points">
          {{ item.points }}
        </div>
        <p class="news-title">
          <a :href="item.url">{{ item.title }}</a>
        </p>
        <small class="link-text">
          by
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["news"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
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