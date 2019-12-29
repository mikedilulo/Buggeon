import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Login from "../views/Login.vue";
// @ts-ignore
import Register from "../views/Register.vue";
// @ts-ignore
import Password from "../views/Password.vue";
// @ts-ignore
import Locate from "../views/Locate.vue";
// @ts-ignore
import Help from "../views/Help.vue";
// @ts-ignore
import Version from "../views/Version.vue";
// @ts-ignore
import Contact from "../views/Contact.vue";
// @ts-ignore
import Trial from "../views/Trial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/password",
    name: "password",
    component: Password
  },
  {
    path: "/locate",
    name: "locate",
    component: Locate
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/version",
    name: "version",
    component: Version
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/contact/trial",
    name: "trial",
    component: Trial
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      // @ts-ignore
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
