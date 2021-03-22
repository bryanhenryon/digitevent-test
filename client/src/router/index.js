import { createRouter, createWebHistory } from "vue-router";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";

const routes = [
  {
    path: "/",
    name: "PageOne",
    component: PageOne,
  },
  {
    path: "/page2",
    name: "PageTwo",
    component: PageTwo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
