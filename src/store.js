import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//-------------------------- State

//--- sections

const sections = {
  about: {
    id: "about",
    name: 'ABOUT ME',
    anchor: "#about-me",
    seen: false,
    closed: false
  },
  skills: {
    id: "skills",
    name: 'MY SKILLS',
    anchor: "#my-skills",
    seen: false,
    closed: false
  },
  exp: {
    id: "exp",
    name: 'MY EXPERIENCES',
    anchor: "#my-experiences",
    seen: false,
    closed: false
  },
  diploma: {
    id: "diploma",
    name: 'MY DIPLOMA',
    anchor: "#my-diploma",
    seen: false,
    closed: false
  },
  work: {
    id: "work",
    name: 'MY WORK',
    anchor: "#my-work",
    seen: false,
    closed: false
  },
  contact: {
    id: "contact",
    name: 'CONTACT',
    anchor: "#contact",
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