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
export default router;
import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Form from "@/views/Form";
import Error from "@/views/Error";
const history = createWebHistory();
export default createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: Error,
    },
  ],
});