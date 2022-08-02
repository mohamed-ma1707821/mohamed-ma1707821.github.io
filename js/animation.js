

const zcahneg = document.querySelector('#zcahnge')
zcahneg.addEventListener('mouseover',function (e){
    zcahneg.setAttribute('style','z-index: 901;')
})
// zcahneg.addEventListener('mouseout',function (e){
//     zcahneg.setAttribute('style',' ')
// })

const moreNav = document.querySelector('#w-dropdown-toggle-0')
const last = document.querySelector('#w-dropdown-list-0')

moreNav.addEventListener('mouseover', function (e){
    moreNav.setAttribute('class','nav-link nav-link-dropdown w-dropdown-toggle w--open')
    moreNav.setAttribute('aria-expanded','true')

    last.setAttribute('class','nav-dropdown-list w-dropdown-list w--open')
    last.setAttribute('style','opacity:1;')

})


zcahneg.addEventListener('mouseleave', function (e){
    moreNav.setAttribute('class','nav-link nav-link-dropdown w-dropdown-toggle')
    moreNav.setAttribute('aria-expanded','false')

    last.setAttribute('style','opacity:0;')
    last.setAttribute('class','nav-dropdown-list w-dropdown-list')
})


// Project animation
// const firstLeft = document.querySelector('.work-arrow.w-slider-arrow-left')
// const firstright = document.querySelector('.work-arrow.w-slider-arrow-right')
// const wSlide = document.querySelector('#w-slider-mask-0')
//
// wSlide.addEventListener('mouseenter',function (e) {
//     firstLeft.setAttribute('style','transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')
//     firstright.setAttribute('style','transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')
//
// })
//
// wSlide.addEventListener('mouseout',function (e) {
//     firstLeft.setAttribute('style','transform: translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')
//     firstright.setAttribute('style','transform: translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;')
// })


// btn Scroll Down
document.querySelector('.demo').addEventListener('click', function (e) {
        e.preventDefault()
        // window.scrollTo(0,document.querySelector('.hero-content').offsetTop)
        window.scroll({
            top: document.querySelector('.hero-content').offsetTop,
            behavior: 'smooth'  // 👈 Nice !
        });
    }
    )


// scroll back up
window.onscroll = function() {scrollFunction()};
const mybutton = document.getElementById("UpBtn");

function scrollFunction(){

    let vh100 = Math.round(window.innerHeight / 100);
    if (document.body.scrollTop > vh100 || document.documentElement.scrollTop > vh100) {
        mybutton.getElementsByTagName('a')[0].style.display = "inline-block";
    } else {
        mybutton.getElementsByTagName('a')[0].style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scroll({
        top: 0,
        behavior: 'smooth'  // 👈 Nice !
    });
}


// Good morning/afternoon/evening
const today = new Date();
let curHr = today.getHours()
const greet = document.getElementById('greet')
if (curHr < 12) {
    greet.innerHTML = 'Good Morning,'
    greet.className ="goodsmt glowM"
} else if (curHr < 18) {
    greet.innerHTML = 'Good Afternoon,'
    greet.className ="goodsmt glowN"
} else {
    greet.innerHTML = 'Good Evening,'
    greet.className ="goodsmt glowE"
}

// copy email by pressing
const emailDiv = document.getElementById("emailDiv")
emailDiv.addEventListener('click',onClickEmail)
emailDiv.addEventListener('mouseout',onOutEmail)

function onClickEmail() {
    let tooltip = document.getElementById("personalEmail");
    navigator.clipboard.writeText(" m.e.abdelmoniem@gmail.com");

    tooltip.innerHTML = "Copied ! ";
}

function onOutEmail() {
    let tooltip = document.getElementById("personalEmail");
    tooltip.innerHTML = "Copy";
}


// make scroll up white
btnColored = document.querySelector('#tobeColored')
btnColored2= document.querySelector('#tobeColored2')
function isInView(el) {
    let box = el.getBoundingClientRect();
    return box.top < window.innerHeight-btnColored.clientHeight && box.bottom >= 0;
}

window.addEventListener("scroll", function() {
    let footer = document.getElementById("footer");
    let visible = isInView(footer);
    if(visible) {
        btnColored.className = "whileColor"
        btnColored2.className = "whileColor2"
    } else {
        btnColored.className = ""
        btnColored2.className = ""
    }
});

// Congrads
let end = Date.now() + (15 * 1000)
let colors = ['#bb0000', '#ffffff']

function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    })
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    })

    if (Date.now() < end) {
        requestAnimationFrame(frame)
    }
}
// option 2

``
const count = 200;
// const defaults = {
//     origin: { y: 0.3 }
// };

function fire(particleRatio, opts ,pos) {
    confetti(Object.assign({},pos , opts, {
        particleCount: Math.floor(count * particleRatio)
    }));
}

function action(){

// let defaults = {
//     origin: { y: document.getElementById('ex3').getBoundingClientRect().bottom }
// };
    let rect = document.getElementById('ex3').getBoundingClientRect()
    let offset = rect.top + (rect.bottom - rect.top)/2
    offset /= 1000
    let pos = {
        origin: { y: offset,
                x: 0.3}
    };


fire(0.25, {
    spread: 26,
    startVelocity: 55,
},pos);
fire(0.2, {
    spread: 60,
},pos);
fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
},pos);
fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
},pos);
fire(0.1, {
    spread: 120,
    startVelocity: 45,
},pos);
}

// News animation
// document.querySelectorAll('.ex1Change').forEach(element =>
//
//         window.addEventListener('scroll', function() {
//
//                 let position = element.getBoundingClientRect();
//                 let value = (window.innerHeight - position.top) / position.height
//                 if (position.top < window.innerHeight && (position.bottom >= window.innerHeight || position.top <= window.innerHeight)) {
//                     value = 0.85 + value * 0.15
//                     // if(value > 1)  value = 2-value  // optional for smaller as U leave !!!
//                     if (value > 1 || value < 0.85) return
//
//                     element.setAttribute('style', `will-change: transform; transform: translate3d(0px, 0px, 0px) scale3d(${value}, ${value}, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;`)
//
//                 }
//             }
//         )
// )




