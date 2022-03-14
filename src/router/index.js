import { createRouter, createWebHistory } from 'vue-router'

import contactList from '../components/contacts/contact-list'
import contactUserInfo from '../components/contacts/contact-user-info'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
