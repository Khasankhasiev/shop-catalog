import Main from "@/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

// app.use(router);
export default router;
