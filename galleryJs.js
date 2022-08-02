// Top nav bar
const zcahneg = document.querySelector('#zcahnge')
zcahneg.addEventListener('mouseover',function (e){
    zcahneg.setAttribute('style','z-index: 901;')
})

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
// loading
// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector(".gallery").style.visibility = "hidden";
//         document.querySelector(".loadeParent").style.visibility = "visible";
//     } else {
//         document.querySelector(".loadeParent").style.display = "none";
//         document.querySelector(".gallery").style.visibility = "visible";
//     }
// }

// Function to increase image size

// Get the modal
var modal = document.getElementById("myModal");



// var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
// img.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.nextElementSibling.innerHTML;
// }

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// span or model
modal.onclick = function() {
    modal.style.display = "none";
}

function enlarge() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
}
let images = document.querySelectorAll(".gallery__image")
images.forEach( it => it.onclick = enlarge )

// Typing effect OPTION 1
// var i = 0;
// var txt = `
//                 I tend to not take pictures, and prefer to "live the moment" but here are some exceptions that I thought sharing may add
//                 a "Friendly Flavour" to the website as one of my friends suggested. Purely random images and memories with only
//                 one shred thing; all taken by my phone camera
//
//
// `; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */
// typeWriter()
// function typeWriter() {
//     if (i < txt.length) {
//         document.getElementById("demo").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }
