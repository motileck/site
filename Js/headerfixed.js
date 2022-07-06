$(function() {
    let header = $('.nav');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('nav_fixed');
      } else {
       header.removeClass('nav_fixed');
      }
    });
   });