import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  /*
    //#1
    render: function (createElement) {
      return createElement(App);
    },
    //#2
    // h: hyperscript (Virtual Dom)
    render: function (h) {
      return h(App);
    },
    //#3
    render: (h) => {
      return h(App);
    },
  */
  //#4
  render: (h) => h(App),
}).$mount("#app");
