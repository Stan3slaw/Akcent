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
});
