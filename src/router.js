import { createRouter, createWebHashHistory } from "vue-router";

import MatchPage from "./views/MatchPage.vue"
import LoginPage from "./views/LoginPage.vue"
import MyProfile from "./views/MyProfile.vue"
import ChatPage from "./views/ChatPage.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginPage,
      path: "/",
    },
    {
      component: MatchPage,
      path: "/matchpage",
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
