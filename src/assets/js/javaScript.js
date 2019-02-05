import {slideMenu} from '@/assets/js/animeFunctions.js'
import {animateSquareMenu} from '@/assets/js/animeFunctions.js'

export function toggleMenu(){
  const blurs = document.querySelectorAll('.bgd-blur')
  const burger = document.querySelector('.btn-burger');
  if(this.$store.state.menu.menuActif === false){
    slideMenu('.container-menu__mobile', 500, -80,100)
    burger.classList.add('btn-burger__actif');
    this.$store.commit('MenuActif')
    for(let blur of blurs){
      blur.classList.add('bgd-blur__active')
    }
  }
  else{
      slideMenu('.container-menu__mobile', 1000, 100,400)
      burger.classList.remove('btn-burger__actif');
      this.$store.commit('MenuActif')
      for(let blur of blurs){
      blur.classList.remove('bgd-blur__active')
    }
  }
}


//--- item menu active still need to be debugged
export function rollingSquare(stateOfMenu){
  if(stateOfMenu !== false){
    animateSquareMenu('.square','.menu--item:nth(1) square')
  }
  else{
    return
  }
}

export function LazyLoadDirective(){
  inserted: el => {
    function loadImage() {
      const imageElement = Array.from(el.children).find(
      el => el.nodeName === "IMG"
      );
      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0"
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      
      loadImage();
    }
  }
}