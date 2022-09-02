import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/users/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/review",
    name: "review",
    component: () => import("../views/ReviewView.vue"),
  },
  {
    path: "/reservation",
    name: "reservation",
    component: () => import("../views/ReservationView.vue"),
  },
  {
    path: "/selectDate",
    name: "selectDate",
    component: () => import("../views/dateView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UserAdminView.vue"),
  },
  {
    path: "/rooms",
    name: "rooms",
    component: () => import("../views/RoomsAdminView.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
