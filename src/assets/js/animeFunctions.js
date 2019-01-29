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

export function growItem(el,time,scale, elasticity){
    anime.remove(el);
    const grow = anime({
        targets: el,
        duration: time,
        scale: scale,
        elasticity: elasticity
    });
}

export function slideMenu(el,time,translate,elasticity){
    anime.remove(el);
    const slide = anime({
        targets: el,
        duration: time,
        translateX: translate+'%',
        elasticity: elasticity
    });
}

export function animateBtn(el,scale,duration){
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

export function btnDecorationAnimate(el, translationx,translationy,time,delay){
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

