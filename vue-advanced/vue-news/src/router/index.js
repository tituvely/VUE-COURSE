import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import { store } from "../store/index.js";
import bus from "../utils/bus";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name).then(() => {
          bus.$emit("end:spinner");
          next();
        });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
