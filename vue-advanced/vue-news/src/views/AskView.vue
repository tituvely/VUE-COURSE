<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in ask" :key="item.id">
        <div class="points">
          {{ item.points }}
        </div>
        <p class="news-title">
          <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
          <router-link :to="`user/${item.user}`">{{ item.user }}</router-link>
        </small>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["ask"]),
    // #4
    // ...mapState(["ask"]),
    // #3
    // ...mapState({
    //   ask: 'ask',
    // }),
    // #2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
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