import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const TheHome = () => import("./components/page/TheHome");
const TheAbout = () => import("./components/page/TheAbout");
const TheProject = () => import("./components/page/TheProject");
const TheRoadMap = () => import("./components/page/TheRoadMap");

const router = new VueRouter({
  routes: [
    { path: "/", name: "Home", component: TheHome, meta: { title: "Home" } },
    {
      path: "/about",
      name: "About",
      component: TheAbout,
      meta: { title: "About" },
    },
    {
      path: "/project",
      name: "Project",
      component: TheProject,
      meta: { title: "Project" },
    },
    {
      path: "/roadMap",
      name: "RoadMap",
      component: TheRoadMap,
      meta: { title: "RoadMap" },
    },
  ],
});

export default router;
