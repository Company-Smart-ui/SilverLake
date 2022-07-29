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
  openGuests();

  countAdults();
  countChild();
  countInfants();
  countPets();
  if( window.innerWidth <= 992 ){
      openMobileSearch();
  }
};

function closePopUp(){
    if(navBtnPopUp) {
        navBtnPopUp.addEventListener('click', function(){
            popUp.classList.add('cancel');
        })
    }
}

const btnGuests = document.querySelector(".btn-guests");
const guests = document.querySelector(".guests");
const closeGuests = document.querySelector(".close-guests");
var adults = 0;
const incrementAdults = document.querySelector("#increment-adults");
const decrementAdults = document.querySelector("#decrement-adults");
var child = 0;
const incrementChild = document.querySelector("#increment-children");
const decrementChild = document.querySelector("#decrement-children");
var infants = 0;
const incrementInfants = document.querySelector("#increment-infants");
const decrementInfants = document.querySelector("#decrement-infants");
var pets = 0;
const incrementPets = document.querySelector("#increment-pets");
const decrementPets = document.querySelector("#decrement-pets");

function openGuests(){
    if(guests && btnGuests) {
        btnGuests.addEventListener('click', function(){
            guests.style.display="block";
        });
        closeGuests.addEventListener('click', function(){
            guests.style.display="none";
            btnGuests.innerHTML = adults + " Adults" + ', ' + child + " Child" + ', ' + infants + " Infants" + ', ' + pets + " Pets";
        });
    }
}

function countAdults() {
    if(incrementAdults && decrementAdults){
        incrementAdults.addEventListener('click', function(){
            if(adults < 8) {
                adults++;
                document.getElementById("adults-value").innerHTML = adults;
            }
        });
        decrementAdults.addEventListener('click', function(){
            if(adults > 0){
                adults--;
                document.getElementById("adults-value").innerHTML = adults;
            }
        });
    }
}
function countChild() {
    if(incrementChild && decrementChild){
        incrementChild.addEventListener('click', function(){
            if(child < 8) {
                child++;
                document.getElementById("children-value").innerHTML = child;
            }
        });
        decrementChild.addEventListener('click', function(){
            if(child > 0){
                child--;
                document.getElementById("children-value").innerHTML = child;
            }
        });
    }
}
function countInfants() {
    if(incrementInfants && decrementInfants){
        incrementInfants.addEventListener('click', function(){
            if(infants < 8) {
                infants++;
                document.getElementById("infants-value").innerHTML = infants;
            }
        });
        decrementInfants.addEventListener('click', function(){
            if(infants > 0){
                infants--;
                document.getElementById("infants-value").innerHTML = infants;
            }
        });
    }
}
function countPets() {
    if(incrementPets && decrementPets){
        incrementPets.addEventListener('click', function(){
            if(pets < 8) {
                pets++;
                document.getElementById("pets-value").innerHTML = pets;
            }
        });
        decrementPets.addEventListener('click', function(){
            if(pets > 0){
                pets--;
                document.getElementById("pets-value").innerHTML = pets;
            }
        });
    }
}
function openMobileSearch(){
    const btnSearch = document.querySelector(".btn-search");
    const search = document.querySelector(".search");
    const btnCloseSearch = document.querySelector(".btn-close");
    if(btnSearch){
        btnSearch.addEventListener("click", function(){
            search.classList.add('active');
        })
        btnCloseSearch.addEventListener("click", function(){
            search.classList.remove('active');
        })
    }
}



 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js')

 



