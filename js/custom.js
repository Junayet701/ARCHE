$(function () {

  "use strict";


  $(window).on('scroll', function () {

    var abc = $(this).scrollTop();
    if (abc > 150) {
      $('.bctop').fadeIn();
      $('.bctop').addClass('asd');
    } else {
      $('.bctop').fadeOut();
      $('.bctop').removeClass('asd');
    }

  });

  $('.bctop').on('click', function () {
    $('body,html').animate({
      scrollTop: 0,
    }, 2000);
  });

  // Drop Down Menu

  $('.nav-item').on('click', function () {
    $('.drp_dwn').toggle(function () {
      $('.drp_up').toggle(100);
    });
  });



  $('.nav-item').on('click', function () {
    $('.drop_down').slideToggle(600);
  });

  // Slick Slider in Banner Part


  $('.big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    speed: 2500,
    asNavFor: '.banner_samll_slilder_activate'
  });
  $('.banner_samll_slilder_activate').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.big_slider',
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows: false,
    speed: 2000,
  });

  // Counter UP in Banner Part
  $('.counter').counterUp({
    delay: 10,
    time: 1500,
  });


  // Slider in Service Part

  $('.service_slider_active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });


  // Slick Slider in testimonial Part
  $('.test_slider_active').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });



  // Menu Fix

  // var menuoff = $('.main_menu').offset().top;

  // $(window).scroll(function () {
  //   var scrolling = $(this).scrollTop();

  //   if (menuoff < scrolling) {
  //     $('.main_menu').addClass("menu_fix");
  //   } else {
  //     $('.main_menu').removeClass("menu_fix");
  //   }
  // });



  //  Preloader

  $(window).on('load', function () {
    $('.preloader').delay(1000).fadeOut();
  });


  $('.side_btn').on('click', function(){
    $('#side_menu').addClass('ftr');
  });

  $('.close_btn').on('click', function(){
    $('#side_menu').removeClass('ftr');
  });



});