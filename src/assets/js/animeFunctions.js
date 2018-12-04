import anime from 'animejs'

export function followPath(el, pathx, pathy){
    var motionPath = anime({
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
    var grow = anime({
        targets: el,
        duration: time,
        scale: scale,
        elasticity: elasticity
    });
}

export function slideMenu(el,time,translate,elasticity){
    anime.remove(el);
    var slide = anime({
        targets: el,
        duration: time,
        translateX: translate+'%',
        elasticity: elasticity
    });
}

export function morphBtn(el,morph){
    anime.remove(el);
    var morphing = anime({
        targets: el,
        d: morph,
        duration: 400,
    });
}