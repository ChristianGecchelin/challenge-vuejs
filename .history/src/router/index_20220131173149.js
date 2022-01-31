import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FormView from "@/views/FormView.vue";
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
      component: FormView,
    },
  ],
});
