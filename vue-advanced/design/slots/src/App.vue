<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :key="item">{{ item }}</item>

      <item>
        아이템 5
        <button>Click me</button>
      </item>
      <item>
        아이템 6
        <div style="color: blue; font-size: 20px">image</div>
      </item>
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
