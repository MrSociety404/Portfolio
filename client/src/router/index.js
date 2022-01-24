import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
  },
  {
    path: "/works",
    name: "Works",
    component: () => import("../views/Works.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/project/:name",
    name: "Project",
    component: () => import("../views/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

// Change the name of the current page
router.beforeEach((to, from, next) => {
  if (to.name !== "Accueil") {
    document.title = `Fabrice Cst - ${to.name}`;
  } else {
    document.title = `Fabrice Cst`;
  }
  next();
});

export default router;
