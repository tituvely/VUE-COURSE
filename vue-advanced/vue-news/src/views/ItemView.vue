<template>
  <div>
    <section>
      <UserProfile :user="item">
        <router-link slot="username" :to="`/user/${item.user}`">{{
          item.user
        }}</router-link>
        <template slot="time">Posted {{ item.time_ago }}</template>
      </UserProfile>
      <h2>{{ item.title }}</h2>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["item"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style scoped>
.user-container {
  padding: 0.7rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>