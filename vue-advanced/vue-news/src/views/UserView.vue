<template>
  <div>
    <UserProfile :user="user">
      <div slot="username">{{ user.id }}</div>
      <template slot="time">{{ user.created }}</template>
      <div slot="karma">{{ user.karma }}</div>
    </UserProfile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style>
</style>