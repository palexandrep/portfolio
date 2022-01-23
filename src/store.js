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

//---- Portfolio

/*const portfolio = {
  url: require('@/assets/alexandre_piette_portfolio.pdf'),
  alt: "Alexandre Piette CV"
}*/

//------------------------------ My Work ------------------------

//---- Content Exhibitions

const contentExhibitions = {
  illustration:{
    url: require('@/assets/img/satellite.svg'),
    alt: 'satellite'
  },
  images:{
    firstGallery:{
      img2:{
        url: require('@/assets/img/koma_pics/pic2.jpg'),
        alt: "exhibition_picture_2"
      },
      img3:{
        url: require('@/assets/img/koma_pics/pic3.jpg'),
        alt: "exhibition_picture_3"
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
      img10:{
        url: require('@/assets/img/koma_pics/pic10.jpg'),
        alt: "exhibition_picture_10"
      }
    },
    secondGallery:{
      img1:{
        url: require('@/assets/img/koma_pics/pic1.jpg'),
        alt: "exhibition_picture_1"
      },
      img4:{
        url: require('@/assets/img/koma_pics/pic4.jpg'),
        alt: "exhibition_picture_4"
      },
      img5:{
        url: require('@/assets/img/koma_pics/pic5.jpg'),
        alt: "exhibition_picture_5"
      },
      img9:{
        url: require('@/assets/img/koma_pics/pic9.jpg'),
        alt: "exhibition_picture_9"
      }
    }
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
      iconUrl: require('@/assets/img/links/img/github.jpg'),
      picture: require('@/assets/img/links/github.svg')
    },
    behance:{
      id: 'sample3',
      title: 'behance',
      link: 'https://www.behance.net/ALEXANDREPIETTE',
      iconUrl: require('@/assets/img/links/img/behance.jpg'),
      picture: require('@/assets/img/links/behance.svg')
    },
    codepen:{
      id: 'sample4',
      title: 'codepen',
      link: 'https://codepen.io/Smog/',
      iconUrl: require('@/assets/img/links/img/codepen.jpg'),
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
    name: 'my experiences',
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

//---------------about me

const presentation = {
  paragraphs:[
    "Passionate about the IT world, I am a UI/UX designer and a Front End developer.",
    "Always fascinated by design and code, I decided to pursue a degree in web design first, followed by a degree in front-end development.",
    "Since then, I am still committed to improving my knowledge in those IT fields and putting them into practice in my work.",
    "My principal's interests are the creation of designs and high-fidelity wireframes, the reflection around how to make a better user experience with gamification, the integration of layouts via HTML and good SCSS methodology, CSS and SVG animations, and Javascript Frameworks."
  ]
}

//---------------experiences

const experiences = {
  domains:{
    learning:{
      id: "learning",
      img: require("@/assets/img/learning.svg"),
      experiences:{
        exp1:{
          value: 1,
          id: "learn-exp1",
          textFat: "Learning",
          textSmall: "on my own"
        },
        exp2:{
          value: 2,
          id: "learn-exp2",
          textFat: "Exploring",
          textSmall: "Bass player"
        }
      }
    },
    design:{
      id:"design",
      img: require("@/assets/img/design.svg"),
      experiences:{
        exp1:{
          value: 1,
          id: "design-exp1",
          textFat: "UI/UX Design",
          textSmall: "At Bridgestone"
        },
        exp2:{
          value: 2,
          id: "design-exp2",
          textFat: "UI/UX Design",
          textSmall: "At Shiftmeapp"
        },
        exp3:{
          value: 3,
          id: "design-exp3",
          textFat: "UI and newsletters",
          textSmall: "integration for YAKimmo"
        },
        exp4:{
          value: 4,
          id: "design-exp4",
          textFat: "UI and UX",
          textSmall: "for 'La Rondinella' website"
        },
        exp5:{
          value: 5,
          id: "design-exp5",
          textFat: "Playzone",
          textSmall: "participation in UI, UX and integration ( 2017 edition )"
        },
        exp6:{
          value: 6,
          id: "design-exp6",
          textFat: "Web Design",
          textSmall: "internship in Tacite"
        }
      }
    },
    coding:{
      id: "coding",
      img: require("@/assets/img/integration.svg"),
      experiences:{
        exp1:{
          value: 1,
          id: "code-exp1",
          textFat: "Front End",
          textSmall: "At Bridgestone"
        },
        exp2:{
          value: 2,
          id: "code-exp2",
          textFat: "Front End",
          textSmall: "At Shiftmeapp"
        },
        exp3:{
          value: 3,
          id: "code-exp3",
          textFat: "Hackathon",
          textSmall: "second place for the Datakathon organized by the CEPEGRA in 2017"
        },
        exp4:{
          value: 4,
          id: "code-exp4",
          textFat: "Front End",
          textSmall: "internship in MIGHDY"
        }
      }
    },
    teatching:{
      id:"teatching",
      img: require("@/assets/img/teacher.svg"),
      experiences:{
        exp1:{
          value: 1,
          id: "teatch-exp1",
          textFat: "Art teatcher",
          textSmall: "( IND shcool Fleurus )"
        },
        exp2:{
          value: 2,
          id: "teatch-exp2",
          textFat: "Art teatcher",
          textSmall: "( Kalleis shcool Waterloo )"
        }
      }
    },
    art:{
      id:"art",
      img: require("@/assets/img/artist.svg"),
      experiences:{
        exp1:{
          value: 1,
          id: "art-exp1",
          textFat: "Art exhibition",
          textSmall: "Gallerie Koma, Simply Seen, On Air Studio, CALVAS en folie, Thanks galerie..."
        }
      }
    }
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
        text: "design",
        value: 1
      },
      btn2: {
        text: "javascript",
        value: 2
      },
      btn3: {
        text: "integration",
        value: 3
      }
    }
  }
}

//--------------------- DNA length

const dnaMediaQueries = {
  mediaSmall: true
}

//------------------------------------------------------------------------ Getters

let getters = {
  getMyState: state => state.menu.menuActif,
  getMyStateSection: state => state.sections,
  getMyStateDna: state => state.dnaMediaQueries
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
  },
  Media: (state,value) => {
    state.dnaMediaQueries.mediaSmall = value
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
    switchBtnsVal,
    experiences,
    dnaMediaQueries,
    presentation
  },
  mutations: mutations,
  getters: getters,
  actions: {

  }
})