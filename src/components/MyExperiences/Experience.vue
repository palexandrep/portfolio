<template>
  <ul class="Container--experiences">
    <li class="item--experiences" v-for="domain in domains" v-bind:key="domain.id">
      <div class="container--item-img-experience">
        <div class="container--img-experience">
          <img class="item--img-experience" :src="domain.img" :alt="domain.id">
        </div>
        <span class="grid-y">
          <div class="box-item--experience cell" v-bind:key="exp.id" v-for="exp in domain.experiences">
            <h5 class="title text title__exp text_small">{{exp.textFat}}</h5>
            <p class="text title__exp text__small text__mid-color">{{exp.textSmall}}</p>
          </div>
        </span>
      </div>
      <span class="container-experiences-separation">
        <span class="experiences-separation experiences-separation__top"></span>
        <span class="experiences-separation experiences-separation__bottom"></span>
      </span>
    </li>
    <li class="container--img-experience grid-x">
      <img class="item--img-experience cell center" :src='chemicalReaction' alt="chemicals reaction">
    </li>
  </ul>
</template>

<script>



export default {
  name: 'Experience',

  data: function(){
    return{
      chemicalReaction: require("@/assets/img/chemical_reaction.svg"),
      domains:{
        learning:{
          id: "learning",
          img: require("@/assets/img/learning.svg"),
          experiences:{
            exp:{
              id: "learn-exp1",
              textFat: "Learning",
              textSmall: "on my own"
            }
          }
        },
        design:{
          id:"design",
          img: require("@/assets/img/design.svg"),
          experiences:{
            exp1:{
              id: "design-exp1",
              textFat: "UI and newsletters",
              textSmall: "integration for YAKimmo"
            },
            exp2:{
              id: "design-exp2",
              textFat: "UI ans UX",
              textSmall: "for 'La Rondinella' website"
            },
            exp3:{
              id: "design-exp3",
              textFat: "Playzone",
              textSmall: "participation in UI, UX and integration (2017 edition)"
            },
            exp4:{
              id: "design-exp4",
              textFat: "Web Design",
              textSmall: "internship in Tacite"
            }
          }
        },
        teatching:{
          id:"teatching",
          img: require("@/assets/img/teacher.svg"),
          experiences:{
            exp1:{
              id: "teatch-exp1",
              textFat: "Art teatcher",
              textSmall: "(IND shcool Fleurus)"
            },
            exp2:{
              id: "teatch-exp2",
              textFat: "Art teatcher",
              textSmall: "( Kalleis shcool Waterloo)"
            }
          }
        },
        coding:{
          id: "coding",
          img: require("@/assets/img/integration.svg"),
          experiences:{
            exp1:{
              id: "code-exp1",
              textFat: "Hackathon:",
              textSmall: "second place for the Datakathon organized by the CEPEGRA in 2017"
            },
            exp2:{
              id: "code-exp2",
              textFat: "Front End",
              textSmall: "internship in MIGHDY"
            }
          }
        },
        art:{
          id:"art",
          img: require("@/assets/img/artist.svg"),
          experiences:{
            exp1:{
              id: "art-exp1",
              textFat: "Art exhibition:",
              textSmall: "Gallerie Koma, Simply Seen, On Air Studio, CALVAS en folie, Thanks galerie..."
            }
          }
        }
      }
    }
  },
  methods:{
  }
}
</script>