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
      title: 'github',
      link: 'https://github.com/palexandrep',
      iconUrl: require('@/assets/img/koma_pics/pic1.jpg'),
      picture: require('@/assets/img/links/github.svg')
    },
    behance:{
      id: 'sample2',
      title: 'behance',
      link: 'https://www.behance.net/ALEXANDREPIETTE',
      iconUrl: require('@/assets/img/koma_pics/pic1.jpg'),
      picture: require('@/assets/img/links/behance.svg')
    },
    codepen:{
      id: 'sample3',
      title: 'codepen',
      link: 'https://codepen.io/Smog/',
      iconUrl: require('@/assets/img/koma_pics/pic1.jpg'),
      picture: require('@/assets/img/links/codepen.svg')
    }
}

//--- sections

const sections = {
  about: {
    nb:1,
    id: "about",
    name: 'ABOUT ME',
    anchor: "#about-me",
    seen: false,
    closed: false
  },
  skills: {
    nb:2,
    id: "skills",
    name: 'MY SKILLS',
    anchor: "#my-skills",
    seen: false,
    closed: false
  },
  exp: {
    nb:3,
    id: "exp",
    name: 'MY EXPERIENCES',
    anchor: "#my-experiences",
    seen: false,
    closed: false
  },
  diploma: {
    nb:4,
    id: "diploma",
    name: 'MY DIPLOMA',
    anchor: "#my-diploma",
    seen: false,
    closed: false
  },
  work: {
    nb:5,
    id: "work",
    name: 'MY WORK',
    anchor: "#my-work",
    seen: false,
    closed: false
  },
  contact: {
    nb:6,
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

//-----switch btns

const switchBtnsVal = {
  switchs:{
    preferences:{
      btn1: {
        text: "INTEGRATION",
        value: 1
      },
      btn2: {
        text: "JAVASCRIPT",
        value: 2
      },
      btn3: {
        text: "DESIGN",
        value: 3
      }
    }
  }
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
    contentTeaser,
    switchBtnsVal
  },
  mutations: mutations,
  getters: getters,
  actions: {

  }
})