import anime from 'animejs'

export function followPath(el, pathx, pathy){
    var motionPath = anime({
        targets: el,
        translateX: pathx,
        translateY: pathy,
        easing: 'linear',
        duration: 3500,
        loop: true
    });
}

export function growItem(el,time,scale, elasticity){
    anime.remove(el);
    var grow = anime({
        targets: el,
        duration: time,
        scale: scale,
        elasticity: elasticity
    });
}

export function slideMenu(el,time,translate,easing, elasticity){
    anime.remove(el);
    var slide = anime({
        targets: el,
        duration: time,
        translateX: translate+'%',
        easing: easing,
        elasticity: elasticity
    });
}