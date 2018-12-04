import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//-------------------------- State

//--- sections

const sections = {
  about: {
    name: 'ABOUT ME',
    seen: false,
    closed: false
  },
  skills: {
    name: 'MY SKILLS',
    seen: false,
    closed: false
  },
  exp: {
    name: 'MY EXPERIENCES',
    seen: false,
    closed: false
  },
  diploma: {
    name: 'MY DIPLOMA',
    seen: false,
    closed: false
  },
  work: {
    name: 'MY WORK',
    seen: false,
    closed: false
  },
  contact: {
    name: 'CONTACT',
    seen: false,
    closed: false
  }
}

//--menu

const menu = {
  menuActif: false
}

//-------------------- Getters

let getters = {
  getMyState: state => state.menu.menuActif
}
//console.log(!menu.menuActif)
//------------------Mutations

const mutations = {
  MenuActif: (state) => {
    state.menu.menuActif = !state.menu.menuActif
  }
} 

//------------------- Store

export default new Vuex.Store({
  state: {
    sections,
    menu
  },
  mutations: mutations,
  getters: getters,
  actions: {

  }
})