<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
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
</style>