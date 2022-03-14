import { createStore } from 'vuex'
import Vue from 'vue'
import axios from 'axios'

export default createStore({
  state: {
    contacts: [],
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
    }
  },
  modules: {
  }
})
