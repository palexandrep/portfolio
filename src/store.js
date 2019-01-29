import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//-------------------------- State

//------- Content Teaser

const contentTeaser = {
  titles:{
    title1:{
      name: "CSS",
      id: "teaser-title1"
    },
    title2:{
      name: "JS",
      id: "teaser-title2"
    },
    title3:{
      name: "HTML",
      id: "teaser-title3"
    },
    title4:{
      name: "UX",
      id: "teaser-title4"
    },
    title5:{
      name: "UI",
      id: "teaser-title5"
    }
  },
  subTitle: "Laboratory"
}

//-------My Work links

const samples = {
    github:{
      id: 'sample1',
      name: 'github',
      link: 'https://github.com/palexandrep',
      iconUrl: require('@/assets/img/links/github.svg'),
      picture: require('@/assets/img/links/github.svg')
    },
    behance:{
      id: 'sample2',
      name: 'behance',
      link: 'https://www.behance.net/ALEXANDREPIETTE',
      iconUrl: require('@/assets/img/links/behance.svg'),
      picture: require('@/assets/img/links/behance.svg')
    },
    codepen:{
      id: 'sample3',
      name: 'codepen',
      link: 'https://codepen.io/Smog/',
      iconUrl: require('@/assets/img/links/codepen.svg'),
      picture: require('@/assets/img/links/codepen.svg')
    }
}

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

//----btn-decoration

const nbDecorationBtn = {
  nbDot: 6
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
    menu,
    nbDecorationBtn,
    samples,
    contentTeaser
  },
  mutations: mutations,
  getters: getters,
  actions: {

  }
})