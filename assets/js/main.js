$('.banner').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: `<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>`,
  nextArrow:`<div class="next"><i class="fa-solid fa-chevron-right"></i></div>`
})

$('.slide-lazy').slick({
    lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>`,
  nextArrow:`<div class="next"><i class="fa-solid fa-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1042,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
})

$('.flash-sale__products').slick({
    lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: `<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>`,
  nextArrow:`<div class="next"><i class="fa-solid fa-chevron-right"></i></div>`,
  responsive: [
    {
      breakpoint: 1042,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.dropdown').on('click',function(e){
  $(this).parent().toggleClass("active");
  $(this).parent().children(".dropdown-menu").slideToggle();
})

$('.mobile-menu').on('click',function(){
  $('.sidebar-mobile').addClass("show");
})
$('.close-menu').on('click',function(){
  $('.sidebar-mobile').removeClass("show");
})


$('.image-product').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.sub-image__product'
});
$('.sub-image__product').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.image-product',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});