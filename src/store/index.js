import { createStore } from 'vuex'
import Vue from 'vue'
import axios from 'axios'

export default createStore({
  state: {
    contacts: [],
    chats: [],
    currentUserChat: {}
  },
  getters: {

  },
  mutations: {
    SET_CONTACT_TO_STORE(state, contacts) {
      state.contacts = contacts
    },
    SET_USER_TO_HEAD(state, user) {
      if (user) {
        state.currentUserChat = user
      } else {
        state.currentUserChat = {}
      }
    },
    SET_CHATS_TO_STORE(state, chats) {
      state.chats = chats
    }
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
          .then((contacts) => {
            commit('SET_CONTACT_TO_STORE', contacts.data)
          })
    },
    SET_USER_TO_HEADER({commit}, user) {
      commit('SET_USER_TO_HEAD', user);
    },
    FETCH_CHATS({commit}) {
      return axios.get('http://localhost:3000/chats')
          .then((chats) => {
            commit('SET_CHATS_TO_STORE', chats.data)
          })
    }
  },
  modules: {
  }
})
