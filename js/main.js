$(function () {
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active')
    $(this).addClass('directions__filter-btn--active')
  })
// ==============================Слайдер====================================
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: true,
    waitForAnimate: false,
    dots: true,
    responsive:
    [
      {
        breakpoint: 1100 ,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
    // appendDots: $('.reviwes__dots')
    // appendArrows: $('.reviews__slider-arrows')
  })
  $('.reviews__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
// ============================================================================
  // $('.program__acc-link').on('click',function(e){
  //   e.preventDefault()
  //   $(this).toggleClass('program__acc-link--active')
  //   $(this).children('.program__acc-text').slideToggle()
  $('.program__acc-link').on('click',function(e){
    e.preventDefault()
    // $('.program__acc-link').removeClass('program__acc-link--active')
    // $('.program__acc-text').slideUp()
    // $(this).toggleClass('program__acc-link--active')
    
    if ($(this).hasClass('program__acc-link--active')){
      $(this).removeClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideUp()
      

    }else{
      $('.program__acc-link').removeClass('program__acc-link--active')
      $('.program__acc-text').slideUp()
      $(this).addClass('program__acc-link--active')
      $(this).children('.program__acc-text').slideDown()

    }
    
  })
  
  
  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open')===false){
      $('.burger').addClass('burger--follow')
    }else{
      $('.burger').removeClass('burger--follow')
    }
  }, 0);
  
  
  // if ($(window).scrollTop() > 0){
  //   $('.burger').addClass('burger--follow')
  // }else{
  //   $('.burger').removeClass('burger--follow')
  // }
    
  $('.burger, .overlay').on('click', function(e){
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--open')
  })
  
  
  
  
  
})

