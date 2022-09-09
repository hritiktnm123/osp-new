$(document).ready(function(){
    $('.partners-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
  });


  $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });