"use strict"
const body =document.querySelector("body");
const html=document.querySelector("html");
const header=document.querySelector(".header");
const navBtn=document.querySelector(".close");
const navBtnPopUp=document.querySelector(".close-pop-up");
const popUp=document.querySelector(".wrap-pop-up");

window.onload= function(){
  pagescroll();
  closePopUp();
};

function closePopUp(){
    if(navBtnPopUp) {
        navBtnPopUp.addEventListener('click', function(){
            popUp.classList.add('cancel');
        })
    }
}
 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js')

 



