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
            guests.classList.toggle('d-block');
        });
        closeGuests.addEventListener('click', function(){
            guests.classList.remove('d-block');
            var inputAdults = "";
            var inputChild = "";
            var inputInfants = "";
            var inputPets = "";
            if(adults > 0) {
                inputAdults = adults + " Adult, ";
                if(adults > 1){
                    inputAdults = adults + " Adults, ";
                }
            }
            if(child > 0) {
                inputChild = child + " Child, ";
                if(child > 1){
                    inputChild = child + " Children, ";
                }
            }
            if(infants > 0) {
                inputInfants = infants + " Infant, ";
                if(infants > 1){
                    inputInfants = infants + " Infants, ";
                }
            }
            if(pets > 0) {
                inputPets = pets + " Pet";
                if(pets > 1){
                    inputPets = pets + " Pets";
                }
            }
            btnGuests.innerHTML = inputAdults + inputChild + inputInfants + inputPets;
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
// Mobile Search
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

var forms = document.getElementsByClassName('needs-validation');
(function() {
    if(forms){
        'use strict';
        window.addEventListener('load', function() {

            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    }
})();

// blocks Sale && Sold
(function() {
    var btnSale = document.querySelector('.btn-sale');
    var btnSold = document.querySelector('.btn-sold');
    var blockSale = document.querySelector('.block-sale');
    var blockSold = document.querySelector('.block-sold');
    if(btnSale && btnSold){
        btnSale.addEventListener('click', function(){
            blockSale.style.order = "-1";
            blockSold.style.order = "0";
        });
        btnSold.addEventListener('click', function(){
            blockSold.style.order = "-1";
            blockSale.style.order = "0";
        });
    }
})();

// for element-animation
let elementsAnimate = document.querySelectorAll('.element-animation');
(function(){
    if(elementsAnimate){
        function onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
        }
        let options = {
            threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);

        for (let elm of elementsAnimate) {
            observer.observe(elm);
        }
    }
})();

// if search down
(function(){
    const search = document.querySelector('.search');
    const searchBottom = document.querySelector('.search-bottom');
    const footer = document.querySelector('.footer');
    if(search && !searchBottom){
        footer.classList.add('mb-5r', 'mb-lg-0' );
    }
})();

// firter Stories
function firterStories(){
    const arrStories = Array.from(document.querySelectorAll('[data-story]'));
    const arrBtn = Array.from(document.querySelectorAll('[data-btn]'));
    if(arrStories && arrBtn){
        arrBtn.forEach(item => {
            item.addEventListener('click', function(){
                if(item.dataset.btn === "all"){
                    arrStories.forEach(e => {
                        e.classList.remove('d-none', 'opacity-0', 'active');
                    })
                    arrBtn.forEach(q =>{
                        q.classList.remove('bg-accent', 'color-white');
                    })
                }else
                if(!item.classList.contains('bg-accent')){
                    item.classList.add('bg-accent', 'color-white');
                    arrStories.filter(elem => {
                        if(!elem.classList.contains('active')){
                            elem.classList.add('d-none', 'opacity-0');
                        }
                        if(item.dataset.btn === elem.dataset.story){
                            elem.classList.remove('d-none', 'opacity-0');
                            elem.classList.add('active');
                        }
                    })
                }else{
                    item.classList.remove('bg-accent', 'color-white');
                    arrStories.filter(elem => {
                        if(item.dataset.btn === elem.dataset.story){
                            elem.classList.add('d-none', 'opacity-0');
                            elem.classList.remove('active');
                        }
                    })
                }
            })
        })
    }
}
firterStories();

// firter Treatments
function firterTreatments(){
    const arrTreatments = Array.from(document.querySelectorAll('[data-block]'));
    const arrBtn = Array.from(document.querySelectorAll('[data-button]'));
    if(arrTreatments && arrBtn){
        arrBtn.forEach(item => {
            item.addEventListener('click', function(){
                let otherBtn = arrBtn.filter(a => a !== item);
                otherBtn.forEach(iBtn => {
                    iBtn.classList.remove('bg-accent', 'color-white');
                })
                if(item.classList.contains('bg-accent')){
                    item.classList.remove('bg-accent', 'color-white');
                }else{
                    item.classList.add('bg-accent', 'color-white');
                }
                arrTreatments.filter(elem => { if(elem.dataset.block === item.dataset.button){
                    if(elem.classList.contains('active')){
                        arrTreatments.forEach(e => e.classList.remove('d-none'));
                        elem.classList.remove('active');
                    } else{
                        arrTreatments.forEach(e =>{
                            e.classList.add('d-none');
                            e.classList.remove('active');
                        });
                        elem.classList.remove('d-none');
                        elem.classList.add('active');
                    }}
                })
            })
        })
    }
}
firterTreatments();

// open/close block spa treatments
function spaTreatments(){
    const btnClose = document.querySelectorAll('.btn-close-circle');
    btnClose.forEach(item => item.addEventListener('click', function(){
        item.classList.toggle('active');
        const paren = item.closest('.treatment');
        const child = paren.querySelector('.wrap-treatments');
        child.classList.toggle('h-auto');
    }))
}
spaTreatments();







 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js')

 



