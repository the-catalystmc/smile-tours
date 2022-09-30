const myCarouselElement = document.querySelector('carousel-rate')


if(window.matchMedia("(min-width:576px)").matches){
    // const carousel = new bootstrap.Carousel(myCarouselElement,
    // {
    //     interval: false
    // })
      
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next-one').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 4))){
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: 
            scrollPosition}, 600)
        }
    });

    $('.carousel-control-prev-one').on('click', function(){
        if(scrollPosition > 0 ){
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({scrollLeft: 
            scrollPosition}, 600)
        }
    });
}else {
    $(myCarouselElement).addClass("slide");
}
