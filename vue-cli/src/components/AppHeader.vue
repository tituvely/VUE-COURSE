<template lang="">
    <header>
        <h1>{{ message }}</h1>
        <button @click="sendEvent">send</button>
    </header>
</template>
<script>
export default {
  props: ["message"],
  methods: {
    sendEvent() {
      this.$emit("renew");
    },
  },
};
</script>
<style lang="">
</style>