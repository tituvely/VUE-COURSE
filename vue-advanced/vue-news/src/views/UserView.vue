<template>
  <div>
    <UserProfile :user="user">
      <div slot="username">{{ user.id }}</div>
      <span slot="time">Joined {{ user.created }}, </span>
      <span slot="karma">{{ user.karma }}</span>
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