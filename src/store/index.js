import { createStore } from 'vuex'
import auth from "./Auth"
import sections from "./Sections"
import users from "./Users"


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    sections,
    users
  }
})
