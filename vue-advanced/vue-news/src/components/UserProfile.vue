<template>
  <div class="user-container">
    <div><i class="fas fa-user"></i></div>
    <div class="user-description">
      {{ user.id }}
      <div class="time">{{ user.created }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"]),
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