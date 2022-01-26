<template>
  <div>
    <!-- 데이터를 불러오는 로직을 컴포넌트로 분리 -->
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-if="loading">Loading...</div>
      </div>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from "./components/FetchData.vue";

export default {
  components: {
    FetchData,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
