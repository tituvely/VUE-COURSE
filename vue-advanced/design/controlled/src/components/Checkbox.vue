<template>
  <input type="checkbox" :value="value" @click="toggleCheck" />
</template>

<script>
export default {
  props: {
    value: Boolean,
  },
  methods: {
    toggleCheck() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style>
</style>