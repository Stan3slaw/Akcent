$(document).ready(function() {
$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    let currentTop = $(window).scrollTop();
    if ($('.header__menu').hasClass('active')){

    }else{
    if (currentTop > this.previousTop && currentTop > 0 ) {
        $(".header").addClass('hidden');
    } else {
        $(".header").removeClass('hidden');
    }
}
    this.previousTop = currentTop;
});
  $('.header__burger').click(function(event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
    $('.accordeon__header').click(function(){
      $('.accordeon__item').find('ul').not($(this).next()).slideUp(500);
      $(this).next().slideToggle(500);
      $('.accordeon__item').not($(this).parent()).removeClass('open');
      $($(this).parent()).toggleClass('open');
    });




  $('.slider__catalogue').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });
  let sliderIndex = 0;
  $('.slider__catalogue').on('afterChange', function(event, slick, currentSlide){
    sliderIndex = $('.slider__catalogue').slick('slickCurrentSlide');
    let position = sliderIndex.toString() + '00% + ' + sliderIndex.toString() + 'px';
    $('.highlight').css('transform', 'translateX(calc(' + position + '))');
  });
  $('.slider__nav-item').click(function() {
    let slideTo = $(this).attr('slideTo') - 1;
    $('.slider__catalogue').slick('slickGoTo', slideTo);
    $('.highlight').css('transform', 'translateX(calc(' + slideTo.toString() + '00% + ' + slideTo.toString() + 'px))');
  });
  $('body').on('click', '.slick-arrow', function() {
    $(this).addClass('animated');
    setTimeout(function() {
       $('.slick-arrow').removeClass('animated');
    }, 300);
  });




  $('.slider__manufacturers').slick({
    arrows:true,
		dots:true,
		slidesToShow: 4,
    slidesToScroll: 4,
		// autoplay:true,
		speed:500,
		autoplaySpeed:5000,
    responsive:[
			// {
			// 	breakpoint: 950,
			// 	settings: {
			// 		slidesToShow:4,
      //     slidesToScroll:4
			// 	}
			// },
      {
				breakpoint: 950,
				settings: {
					slidesToShow:3,
          slidesToScroll:3
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow:2,
          slidesToScroll:2
				}
			},
      {
				breakpoint: 550,
				settings: {
					slidesToShow:1,
          slidesToScroll:1,
          dots: false
				}
			}
		]
  });
  $('body').on('click', '.slick-arrow', function() {
    $(this).addClass('animated');
    setTimeout(function() {
       $('.slick-arrow').removeClass('animated');
    }, 300);
  });
});
