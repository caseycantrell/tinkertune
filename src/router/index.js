import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Piano from "../views/Piano.vue";
import DrumMachine from "../views/DrumMachine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/piano",
    name: "Piano",
    component: Piano,
  },
  {
    path: "/drummachine",
    name: "Drum Machine",
    component: DrumMachine,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
