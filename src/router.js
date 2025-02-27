import { createRouter, createWebHashHistory } from 'vue-router'

import LoginPage from './views/LoginPage.vue'
import CreateProfile from './views/CreateProfile.vue'
import FindFriend from './views/FindFriend.vue'
import OtherProfile from './views/OtherProfile.vue'
import MyProfile from './views/MyProfile.vue'
import ChatPage from './views/ChatPage.vue'
import editProfilepage from './views/editProfilepage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: LoginPage,
      path: '/'
    },
    {
      component: CreateProfile,
      path: '/createprofile'
    },
    {
      component: FindFriend,
      path: '/findfriend'
    },
    {
      component: OtherProfile,
      path: '/otherprofile'
    },
    {
      component: MyProfile,
      path: '/myprofile'
    },
    {
      component: ChatPage,
      path: '/chat'
    },
    {
      component: editProfilepage,
      path: '/editprofilepage'
    }
  ]
})
