const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    mobile_headermenu.classList.toggle('active');
})



    document.addEventListener('scroll', function(){
        
        let scroll_position = window.scrollY;
        console.log(scroll_position);
        if (scroll_position > 300) {
            header.style.backgroundColor = '#29323c';
        } else {
            header.style.backgroundColor = 'transparent';
        }

})