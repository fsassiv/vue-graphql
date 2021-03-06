import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/Auth/Signup.vue";
import Signin from "./components/Auth/Signin.vue";
import Profile from "./components/Auth/Profile.vue";
import AddPost from "./components/Posts/AddPost.vue";
import Posts from "./components/Posts/Posts.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPost
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "SignIn",
      component: Signin
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    { path: "*", redirect: "/" }
  ]
});
