import { createRouter, createWebHistory } from 'vue-router'

import contactList from '../components/contacts/contact-list'
import contactUserInfo from '../components/contacts/contact-user-info'
import userList from '../components/users/users-list'
import userChat from '../components/users/chat/user-chat'
const routes = [
  {
    path: '/',
    name: "contacts",
    component: contactList,
  },
  {
    path: '/contact',
    name: "contact",
    component: contactUserInfo,
  },
  {
    path: '/chats',
    name: "chats",
    component: userList,
  },
  {
    path: '/chat',
    name: "chat",
    component: userChat,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
