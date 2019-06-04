import {slideMenu} from '@/assets/js/animeFunctions.js'
import {animateSquareMenu} from '@/assets/js/animeFunctions.js'

//---------- Menu functions

export function toggleMenu(){
  const squares = document.querySelectorAll('.square'),
        blurs = document.querySelectorAll('.bgd-blur'),
        burger = document.querySelector('.btn-burger');
  //---- click to open
  if(this.$store.state.menu.menuActif === false){

    //---- squares animations
    //-- fade
    squares.forEach(function(item){
      item.classList.add('square__opacity')
    })
    //-- slide + rolling
    // el, activeSection
    animateSquareMenu('.square','.menu--item:nth(1) square')
    //  el, time, translate, elasticity
    slideMenu('.container-menu__mobile', 500, -80, 20)
    burger.classList.add('btn-burger__actif');
    //----------- change store status
    this.$store.commit('MenuActif')

    for(let blur of blurs){
      blur.classList.add('bgd-blur__active')
    }
  }
  //---- click to close
  else{

      //---- squares animations
      //-- fade
      squares.forEach(function(item){
        item.classList.remove('square__opacity')
      })
      //-- slide
      //  el, time, translate, elasticity
      slideMenu('.container-menu__mobile', 1000, 100,100)
      burger.classList.remove('btn-burger__actif');
      //----------- change store status
      this.$store.commit('MenuActif')

      for(let blur of blurs){
      blur.classList.remove('bgd-blur__active')
    }
  }
}

//--- item menu active still need to be debugged
/*export function rollingSquare(stateOfMenu){
  const squares = document.querySelectorAll('.square')
  if(stateOfMenu !== false){
    animateSquareMenu('.square','.menu--item:nth(1) square')
  }
  else{
    squares.forEach(function(item){
      item.classList.remove('square__opacity')
    })
    return
  }
}*/
//-------------------------Lazyloading

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

//----------------- get random num

export function randomNum(iteration, max, min, allowNegative){
  const numList = [];
  if(allowNegative === true){
    for (let i = 0; i < iteration; i++){
      const randomBool = Math.random() >= 0.5;
      if(randomBool === false){
        numList.push(-Math.floor(Math.random() * Math.floor(max - min +1))+min)
      }
      else{
        numList.push(Math.floor(Math.random() * Math.floor(max - min +1))+min)
      }
    }
  }
  if(allowNegative === false){
    for (let i = 0; i < iteration; i++){
      numList.push(Math.floor(Math.random() * Math.floor(max - min +1))+min)
    }
  }
  return numList
}

//------------------ stop scroll

