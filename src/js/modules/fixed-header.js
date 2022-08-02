 function pagescroll(){
    let pscroll = 0;
    window.addEventListener('scroll', function() { 
        if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
                 header.classList.add('scroll');
        }
        pscroll=pageYOffset;

        if(pscroll < 10) {
            header.classList.remove('scroll');
        }
    });
}