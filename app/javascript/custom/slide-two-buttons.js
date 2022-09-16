const myCarouselElement = document.querySelector('carousel-excur')


if(window.matchMedia("(min-width:576px)").matches){
    // const carousel = new bootstrap.Carousel(myCarouselElement,
    // {
    //     interval: false
    // })
      
    var carouselWidth = $('.carousel-inner-one')[0].scrollWidth;
    var cardWidth = $('.carousel-item-one').width();

    var scrollPosition = 0;

    $('.carousel-control-next-two').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 4))){
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner-one').animate({scrollLeft: 
            scrollPosition}, 600)
        }
    });

    $('.carousel-control-prev-two').on('click', function(){
        if(scrollPosition > 0 ){
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner-one').animate({scrollLeft: 
            scrollPosition}, 600)
        }
    });
}else {
    $(myCarouselElement).addClass("slide");
}
