'use strict';
//zarzadzanie hamburgerem
const navList = document.querySelector('.nav__buttons');
const hamburgerMenu = document.querySelector('.nav__hamburger');
//console.log(navList);
//console.log(hamburgerMenu);
hamburgerMenu.addEventListener('click',function (){
    navList.classList.toggle('nav__buttons--active');
    hamburgerMenu.classList.toggle('nav__hamburger--active')
})
/*
po nacisnieciu hamburgera pojawia sie menu w wersji mobilnej
oraz x do zamkn iecia menu
 */

//Przygotowanie pokazu slidow
var slideIndex = 1;
showSlide(slideIndex);

const leftArrow = document.querySelector('.openning__Button--Left');
const rightArrow = document.querySelector('.openning__Button--Right');
leftArrow.addEventListener('click',function(event){
    slideIndex += (-1);
    showSlide(slideIndex)
});
rightArrow.addEventListener('click',function (event){
    slideIndex += 1;
    showSlide(slideIndex)
});

function showSlide(n){
    var i = 0;
    var slidesArray = document.querySelectorAll('.openning__Slides');
    //console.log(slidesArray);
    if (n > slidesArray.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slidesArray.length} ;
    for (i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.display = "none";
    }
    slidesArray[slideIndex-1].style.display = "block";
}
//koniec funkcji pookazu slidow




