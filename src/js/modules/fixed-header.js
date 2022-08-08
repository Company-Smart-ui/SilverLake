 function pagescroll(){
    let pscroll = 0;
    const fixed = document.querySelector(".fixed");
    if(!fixed){
        window.addEventListener('scroll', function() {
            if (pscroll > 40){
                header.classList.add('scroll');
            }
            pscroll=pageYOffset;
            if(pscroll < 40) {
                header.classList.remove('scroll');
            }
        });
    }
}