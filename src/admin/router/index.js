import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
import axios from "axios";

const guard = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
  const isPublicRoute = to.matched.some(route => route.meta.public);
  // console.log('333');
  const isUserLoggedIn = store.getters["user/userIsLoggedIn"];
  // console.log(isUserLoggedIn);
  
  if (isPublicRoute === false && isUserLoggedIn === false) {
    const token = localStorage.getItem("token");

    guard.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      // console.log('444');
      
      const response = await guard.get("/user");
      store.commit("user/SET_USER", response.data.user);
      next();
    } catch (error) {
      router.replace('/login');
      localStorage.clear();
    }
  } else {
    next();
  }
});

export default router;