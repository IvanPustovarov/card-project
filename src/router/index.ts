import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Card from "../components/Card/Card.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/card/:type", name: "Card", component: Card },
];

const router = createRouter({
  history: createWebHistory(), // для обычного HTML5 history API
  routes,
});

export default router;
