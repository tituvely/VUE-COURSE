<template>
  <div id="app">
    <button @click="loginUser1">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    loginUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
          if (response.data.id === 1) {
            axios
              .get("https://jsonplaceholder.typicode.com/todos")
              .then((response) => {
                this.items = response.data;
              })
              .catch();
          }
        })
        .catch((error) => console.log(error));
    },
    async loginUser1() {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      if (response.data.id === 1) {
        let list = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        this.items = list;
      }
    },
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
