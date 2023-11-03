$(document).ready(function() {

  $(document).on('click', '.main-header__link', function() {
    let target = $(this).attr('href');
    let pos = target.indexOf('#');
    if (pos !== -1) {
      target = target.substring(pos);
      let coordsScroll = $(target).offset().top - $('.main-header').outerHeight()
      $('html, body').animate({
        scrollTop: coordsScroll
      }, 800);
      return false;
    }
  })

  $('.btn--request, .btn--consult').on('click', function() {
    $('html,body').animate({
      scrollTop: $('.contacts').offset().top - $('.main-header').outerHeight()
    }, 800);
  });

  $('.mobile-wrap').on('click', function() {
    $('.line-burger').toggleClass('line-active');
    $('.main-header__list').slideToggle(200);
  });

  $('.main-header__link').on('click', function() {
    if ($(window).width() <= 960) {
      $('.line-burger').removeClass('line-active');
      $('.main-header__list').slideUp(200);
    }
  })

  $(window).resize(function() {
    if (window.innerWidth > 767) {
      $('.main-header__list').attr('style', '');
      $('.line-burger').removeClass('line-active');
    }
  })

  function fixContrastBg() {
    let $fixedMenu = $('.main-header');
    if ($fixedMenu.outerHeight() < $(window).scrollTop()) {
      $fixedMenu.addClass('control');
    } else {
      $fixedMenu.removeClass('control');
    }
  }

  fixContrastBg();

  $(window).scroll(function() {
    fixContrastBg()
  });

})
