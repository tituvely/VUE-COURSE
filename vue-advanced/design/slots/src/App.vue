<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :key="item" :item="item"></item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ["아이템 1", "아이템 2", "아이템 3", "아이템 4"],
    };
  },
};
</script>

<style>
</style>
