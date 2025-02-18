import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./views/Home.vue";
import LoginPage from "./views/LoginPage.vue";
import MyProfile from "./views/MyProfile.vue";
import ChatPage from "./views/ChatPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: Home,
      path: "/",
    },
    {
      component: LoginPage,
      path: "/login",
    },
    {
      component: MyProfile,
      path: "/myprofile",
    },
    {
      component: ChatPage,
      path: "/chat",
    },
  ],
});
