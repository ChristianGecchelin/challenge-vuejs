/* import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
 */

import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
const history = createWebHistory();
export default createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});
