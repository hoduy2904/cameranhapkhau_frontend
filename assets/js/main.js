$(function(){
  $(".banner").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: `<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>`,
    nextArrow: `<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>`,
  });
  
  $(".slide-lazy").slick({
    lazyLoad: "ondemand",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: `<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>`,
    nextArrow: `<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>`,
    responsive: [
      {
        breakpoint: 1042,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  $(".flash-sale__products").slick({
    lazyLoad: "ondemand",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: `<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>`,
    nextArrow: `<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>`,
    responsive: [
      {
        breakpoint: 1042,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  
  $(".nav-item .icon").on("click", function (e) {
    $(this).parent().toggleClass("active");
    $(this).parent().children(".dropdown-menu").slideToggle();
  });
  
  $(".mobile-menu").on("click", function () {
    $(".sidebar-mobile").addClass("show");
  });
  $(".close-menu").on("click", function () {
    $(".sidebar-mobile").removeClass("show");
  });
  
  $(".image-product").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".sub-image__product",
  });
  $(".sub-image__product").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".image-product",
    dots: true,
    centerMode: false,
    focusOnSelect: true,
  });
  
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
  let obcallBack = (entries, observer) => { 
    entries.forEach(entry => {
    if(entry.isIntersecting){
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
    }
    });
  };
  
  const observer = new IntersectionObserver(obcallBack, options)
  
  document.querySelectorAll('.lazy-img').forEach(img => { observer.observe(img) });
  
  $(".tab-item").on("click", function () {
    $(".tab-item").removeClass("active");
    $(this).addClass("active");
    let currentTab = $(this).attr("data-tab");
    $(".tab-content").removeClass("active");
    $(`#${currentTab}`).addClass("active");
  });

      $("#btnTracking").on("click", function () {
        $(".tracking-result").slideToggle();
      });
      
      $(".form-check-input").on("click", function () {
        console.log($(this));
        if ($(this).is(":checked")) {
          $(".form-VAT").show("slide");
        } else {
          $(".form-VAT").hide("slide");
        }
      });

      $('.add-to-cart').on('click',function(e){
        e.preventDefault();
        let id = $(this).attr('data-id');
        let optionPrice = $('input[name=option-price]:checked').val()??1;
        let color = $('input[name=color]:checked').attr('id');
        addCart(id,optionPrice,color);
      })

      $('.buy-now').on('click',function(e){
        e.preventDefault();
      })

      let addCart = function(id, number = 1, colorId=null) {
        $.ajax({
            url: '/api/cart/add',
            method: "POST",
            data: {
                id,
                number,
                colorId
            },
            success: function(data) {
                if (data.status == 200) {
                    showToast("Thêm giỏ hàng thành công");
                    $('#cartCount').html(data.count);
                }else{
                    showToast(data.message);
                }
            },
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              showToast(err.message,"error");
            }
        })
    }

      function showToast(text, type){
        let className = 'toast-default';
        switch(type){
          case "error":{
            className = 'toast-error';
            break;
          }
          case "success":{
            className = 'toast-success';
            break;
          }
          case "warning":{
            className='toast-warning'
            break;
          }
          default: break;
        }

        Toastify({
          text: text,
          className: className,
          close: true,
          offset: {
            x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 10 // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        }).showToast();
      }
      
  });