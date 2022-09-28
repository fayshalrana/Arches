// window scroll function 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.scl').addClass('scl_hide');
      } else {
          $('.scl').removeClass('scl_hide');
      }
  });
})
// for make logo small 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.nav_logo').addClass('navbar_brand_short_img');
      } else {
          $('.nav_logo').removeClass('navbar_brand_short_img');
      }
  });
})
// for hide scl png 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.hovered_scales').addClass('hovered_scales_none');
      } else {
          $('.hovered_scales').removeClass('hovered_scales_none');
      }
  });
})
// for show menu under line 
$(function(){
  $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
          $('.nav_line').addClass('nvline');
      } else {
          $('.nav_line').removeClass('nvline');
      }
  });
})


$(function(){
    // main banner part 
    $('.slider_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider_for',
      // dots: true,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        }
      
      ]
    });
    // main banner part 
  
  
    
  
    //  service part    
    $('.serv_slide').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        }
      
      ]
    });
    //  service part    
  
  
    // testimonial part
    $('.test_slide').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots:false
          }
        }
      
      ]
    });
    // testimonial part
  
    // about counter 
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
    $('.counter').addClass('animated fadeInDownBig');
    $(' h3 span ').addClass('animated fadeIn');
    // about counter 
  
})


// venobox 
$(function(){
  new VenoBox({
    selector: ".venobox",
});
})

// comment hide show 
$(function(){
  $('.frst_cmnt').click(function () {
    $('.cmnt_to_hide').toggleClass('cmnt_to_show');    
  });
  $('.frst_cmnt').click(function () {
    $('.cmnt_to_hide2').removeClass('cmnt_to_show');    
  });

  $('.last_rply_show').click(function () {
    $('.cmnt_to_hide2').toggleClass('cmnt_to_show');    
  });
  $('.last_rply_show').click(function () {
    $('.cmnt_to_hide').removeClass('cmnt_to_show');    
  });

})


// comment plate 
$('.last_cmnt').click(function () {
  $('.rply_input').toggleClass('rply_input_show');    
});
$('.frst_cmnt_rplys_rply').click(function () {
  $('.rply_input').toggleClass('rply_input_show');    
});

// preloader function 
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none"
});
