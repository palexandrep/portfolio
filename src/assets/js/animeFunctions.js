import anime from 'animejs'



export function followPath(el, pathx, pathy){
    const motionPath = anime({
        targets: el,
        translateX: pathx,
        translateY: pathy,
        easing: 'linear',
        duration: 5000,
        loop: true
    });
}

export function growItem(el, time, scale, elasticity){
    anime.remove(el);
    const grow = anime({
        targets: el,
        duration: time,
        scale: scale,
        elasticity: elasticity
    });
}

export function slideMenu(el, time, translate, elasticity){
    anime.remove(el);
    const slide = anime({
        targets: el,
        duration: time,
        translateX: translate+'%',
        elasticity: elasticity
    });
}

export function animateSquareMenu(el, activeSection){
    //anime.remove(el);
    const rolling = anime({
        targets: el,
        translateX:{
            value: function(el, i, l) {
                switch(i){
                    case 0:
                    return -110+10;
                    case 1:
                    return -110+10;
                    case 2:
                    return -110+70;
                    case 3:
                    return -110+31;
                    case 4:
                    return -110+3;
                    case 5:
                    return -110+2;
                }
              },
            duration: 300,
        },
          rotate: {
            value: 360,
            duration: 300,
            easing: 'easeInOutSine'
          },
          delay: function(el, i, l) {
            return i * 85;
          },
          direction: 'alternate'
    });
    const activeSquare = anime({
        targets: activeSection,
        delay: 2000,
        translateX: -20,
        duration: 500
    })
}

export function animateBtn(el, scale, duration){
    anime.remove(el);
    const scaling = anime({
        targets: el,
        scale: scale,
        duration: duration,

    });
}

export function slideAnimation(el, translation){
    anime.remove(el);
    const slide = anime({
        targets: el,
        translateX: translation,
        duration: 2000,
        elasticity: 250,
        loop: false,
        delay: 1000,
        direction: 'alternate'
    });
}

export function btnDecorationAnimate(el, translationx, translationy, time, delay){
    anime.remove(el);
    const move = anime({
        targets: el,
        translateX: translationx,
        translateY: translationy,
        duration: time,
        elasticity: 250,
        loop: true,
        delay: delay,
        easing: 'easeInOutSine',
        direction: 'alternate'
    });
}

export function hideSection(el, height){
    anime.remove(el);
    const move = anime({
        targets: el,
        duration: 500,
        height: height,
        elasticity: 1000,
        loop: false,
        easing: 'easeInOutSine',
        direction: 'alternate'
    });
}

export function animCell(el, maxLat, minLat, maxLong, minLong, delay, time){
    anime({
        targets: el,

        keyframes:[
            {
                translateX: function() {
                    return anime.random(minLong, maxLong);
                },
                  translateY: function() {
                      return anime.random(minLat, maxLat);
                },
            },
            {
                translateX: function() {
                    return anime.random((minLong-2), (maxLong+2));
                  },
                  translateY: function() {
                      return anime.random((minLat-3), (maxLat+3));
                    },
            }
        ],
        
        easing: 'easeInOutSine',
        duration: time,
        loop: true,
        elasticity: 500,
        direction: 'alternate',
        delay: delay
      });
}
