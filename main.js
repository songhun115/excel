$(document).ready(function(){
    $('.nav_bar_item').hover(function(){
      $('.nav_bar').addClass('on');
    }  , function(){
      $('.nav_bar').removeClass('on');
    });
   


    $('.menu_toggle').click(function(){
        const $clickd = $(this);
        if( $clickd.hasClass('open')) {
          $clickd.removeClass('open');
          $('.all_menu').removeClass('open');
        } else {
          $clickd.addClass('open');
          $('.all_menu').addClass('open');
        }
        })
       

  });