$(document).ready(function(){
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        console.log(sct);

        if($(this).scrollTop() >= 500 ){
            $('.top-btn').fadeIn();
        }else{
            $('.top-btn').fadeOut();
        }
        });

    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });
    
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
})