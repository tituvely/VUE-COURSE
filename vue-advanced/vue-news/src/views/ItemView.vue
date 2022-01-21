<template>
  <div>
    <p>{{ item.title }}</p>
    <p>{{ item.content }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["item"]),
  },
  created() {
    const itemId = this.$router.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style>
</style>