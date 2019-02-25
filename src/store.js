import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//--------------------------------------------------------------------------------- State

//------- Content Teaser

const contentTeaser = {
  titles:{
    title1:{
      name: "css",
      id: "teaser-title1"
    },
    title2:{
      name: "js",
      id: "teaser-title2"
    },
    title3:{
      name: "html",
      id: "teaser-title3"
    },
    title4:{
      name: "ux",
      id: "teaser-title4"
    },
    title5:{
      name: "ui",
      id: "teaser-title5"
    }
  },
  subTitle: "Laboratory"
}

//------------------------------ My Work ------------------------

//---- Content Exhibitions

const contentExhibitions = {
  images:{
    img1:{
      url: require('@/assets/img/koma_pics/pic1.jpg'),
      alt: "exhibition_picture_1"
    },
    img2:{
      url: require('@/assets/img/koma_pics/pic2.jpg'),
      alt: "exhibition_picture_2"
    },
    img3:{
      url: require('@/assets/img/koma_pics/pic3.jpg'),
      alt: "exhibition_picture_3"
    },
    img4:{
      url: require('@/assets/img/koma_pics/pic4.jpg'),
      alt: "exhibition_picture_4"
    },
    img5:{
      url: require('@/assets/img/koma_pics/pic5.jpg'),
      alt: "exhibition_picture_5"
    },
    img6:{
      url: require('@/assets/img/koma_pics/pic6.jpg'),
      alt: "exhibition_picture_6"
    },
    img7:{
      url: require('@/assets/img/koma_pics/pic7.jpg'),
      alt: "exhibition_picture_7"
    },
    img8:{
      url: require('@/assets/img/koma_pics/pic8.jpg'),
      alt: "exhibition_picture_8"
    },
    img9:{
      url: require('@/assets/img/koma_pics/pic9.jpg'),
      alt: "exhibition_picture_9"
    },
    img10:{
      url: require('@/assets/img/koma_pics/pic10.jpg'),
      alt: "exhibition_picture_10"
    },
  }
}

//-------links

const samples = {
      portfolio:{
      id: 'sample1',
      title: 'portfolio',
      link: 'https://palexandrep.github.io/alexandre.piette/',
      iconUrl: require('@/assets/img/links/img/portfolio-1.jpg'),
      picture: require('@/assets/img/links/logo_portfolio1.svg')
    },
    github:{
      id: 'sample2',
      title: 'github',
      link: 'https://github.com/palexandrep',
      iconUrl: require('@/assets/img/koma_pics/pic1.jpg'),
      picture: require('@/assets/img/links/github.svg')
    },
    behance:{
      id: 'sample3',
      title: 'behance',
      link: 'https://www.behance.net/ALEXANDREPIETTE',
      iconUrl: require('@/assets/img/koma_pics/pic1.jpg'),
      picture: require('@/assets/img/links/behance.svg')
    },
    codepen:{
      id: 'sample4',
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
    name: 'about me',
    anchor: "#about-me",
    seen: false,
    closed: false
  },
  skills: {
    nb:2,
    id: "skills",
    name: 'my skills',
    anchor: "#my-skills",
    seen: false,
    closed: false
  },
  exp: {
    nb:3,
    id: "exp",
    name: 'my experiencees',
    anchor: "#my-experiences",
    seen: false,
    closed: false
  },
  diploma: {
    nb:4,
    id: "diploma",
    name: 'my diploma',
    anchor: "#my-diploma",
    seen: false,
    closed: false
  },
  work: {
    nb:5,
    id: "work",
    name: 'my work',
    anchor: "#my-work",
    seen: false,
    closed: false
  },
  contact: {
    nb:6,
    id: "contact",
    name: 'contact',
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
        text: "integration",
        value: 1
      },
      btn2: {
        text: "javascript",
        value: 2
      },
      btn3: {
        text: "design",
        value: 3
      }
    }
  }
}

//------------------------------------------------------------------------ Getters

let getters = {
  getMyState: state => state.menu.menuActif,
  getMyStateSection: state => state.sections
}

//------------------------------------------------------------------------ Mutations

const mutations = {
  MenuActif: (state) => {
    state.menu.menuActif = !state.menu.menuActif
  },
  about: (state) => {
    state.sections.about.closed = !state.sections.about.closed
  },
  skills: (state) => {
    state.sections.skills.closed = !state.sections.skills.closed
  },
  exp: (state) => {
    state.sections.exp.closed = !state.sections.exp.closed
  },
  diploma: (state) => {
    state.sections.diploma.closed = !state.sections.diploma.closed
  },
  work: (state) => {
    state.sections.work.closed = !state.sections.work.closed
  },
  contact: (state) => {
    state.sections.contact.closed = !state.sections.contact.closed
  }
} 

//------------------------------------------------------------------------- Store

export default new Vuex.Store({
  state: {
    sections,
    menu,
    nbDecorationBtn,
    samples,
    contentTeaser,
    contentExhibitions,
    switchBtnsVal
  },
  mutations: mutations,
  getters: getters,
  actions: {

  }
})