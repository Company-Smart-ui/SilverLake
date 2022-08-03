 function pagescroll(){
    let pscroll = 0;
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