let togglebutton = document.getElementById ('togglebutton');
let navbarlinks = document.getElementById('navbarlinks');


togglebutton.addEventListener('click',function()    {
    navbarlinks.classList.toggle('active');
})


$('.one-time').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
    
  });

