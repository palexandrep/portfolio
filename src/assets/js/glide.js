import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

export function glideCarousel(type,self){
    new Glide('.glide', {
        type: type,
        startAt: 0,
        perView: 1,
        gap: 0,
        autoplay: self.carouselTimer,
        keyboard: false,
        hoverpause: false
      }).mount({Autoplay})
}

/*export function glideSlider(type){
    new Glide('.glide', {
        type: type,
        startAt: 0,
        perView: 1,
        gap: 0,
        keyboard: true,
        autoplay: 1000
      }).mount({Autoplay})
}*/
