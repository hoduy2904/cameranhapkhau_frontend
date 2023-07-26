$(function () {
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
    rootMargin: "0px",
    threshold: 0,
  };
  let obcallBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(obcallBack, options);

  document.querySelectorAll(".lazy-img").forEach((img) => {
    observer.observe(img);
  });

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

  $(".add-to-cart").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    let dataType = $(this).attr("data-type");
    if(dataType=="product"){
    var optionPrice = $("input[name=option-price]:checked").val() ?? 1;
    var color = $("input[name=color]:checked").attr("id");
  }
    addCart(id, optionPrice, color);
  });

  $(".buy-now").on("click", function (e) {
    e.preventDefault();
    let id = $(this).attr("data-id");
    var optionPrice = $("input[name=option-price]:checked").val() ?? 1;
    var color = $("input[name=color]:checked").attr("id");
    addCart(id, optionPrice,color,true);
  });

  let addCart = function (id, number = 1, colorId = null, redirect=false) {
    $.ajax({
      url: "/api/cart/add",
      method: "POST",
      data: {
        id,
        number,
        colorId,
      },
      success: function (data) {
        if (data.status == 200) {
          showToast("Thêm giỏ hàng thành công");
          $("#cartCount").html(data.count);
          if(redirect){
            window.location.href="/gio-hang";
          }
        } else {
          showToast(data.message);
        }
      },
      error: function (xhr, status, error) {
        var err = eval("(" + xhr.responseText + ")");
        showToast(err.message, "error");
      },
    });
  };

  function deleteCart(id){
      let isSuccess=false;
      $.ajax({
          url: "/api/cart/delete",
          method: "DELETE",
          data: {
            id
          },
          async: false,
          success: function (data) {
            if (data.status == 200) {
              showToast("Xóa thành công");
              $("#cartCount").html(data.count);
              isSuccess = true;
            } else {
              showToast(data.message);
              isSuccess = false;
            }
          },
          error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            showToast(err.message, "error");
            isSuccess = false;
          },
        });
        return isSuccess;
  }

  function editCart(id,number){
      let isSuccess=false;
      $.ajax({
          url: "/api/cart/update",
          method: "PUT",
          data: {
            id,
            number
          },
          async: false,
          success: function (data) {
            if (data.status == 200) {
              showToast("Cập nhật thành công");
              isSuccess = true;
            } else {
              isSuccess = false;
            }
          },
          error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            showToast(err.message, "error");
            isSuccess = false;
          },
        });
        return isSuccess;
  }

  function showToast(text, type) {
    let className = "toast-default";
    switch (type) {
      case "error": {
        className = "toast-error";
        break;
      }
      case "success": {
        className = "toast-success";
        break;
      }
      case "warning": {
        className = "toast-warning";
        break;
      }
      default:
        break;
    }

    Toastify({
      text: text,
      className: className,
      close: true,
      offset: {
        x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: 10, // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    }).showToast();
  }

  $(".filter-item .category-title").on("click", function () {
    if ($(this).parent('.filter-item').children(".filter-content").is(":hidden")) {
      $(this).children(".end-icon").html("-");
    } else {
      $(this).children(".end-icon").html("+");
    }
    $(this).parent('.filter-item').children(".filter-content").slideToggle();
  });

  $(".filters-title .xmark-icon").on("click", function () {
    console.log("hi");
    $(".filters").removeClass("active");
  });
  $("#open-filter").on("click", function (e) {
    e.preventDefault();
    $(".filters").toggleClass("active");
  });

  $('.btn-trash-cart').on('click',function(e){
      let parent = $(this).parent('tr');
      let id =parent.attr("id");
      let result = deleteCart(id);
      if(result){
          parent.remove();
      }
  });

  onChangeInput((element, value,current) => {
      let parent = $(element).parents("tr");
      let id = parent.attr("id");
      let result = editCart(id,value);
      if(!result){
          $(element).parent().children(".qty").val(current);
      }else{
          let price = parent.children("td:nth-child(4)").attr("data-price");
          let totalPrice = parent.children("td:nth-child(5)");
          totalPrice.html((price*value).toLocaleString("vi-VN").replaceAll(".",","));
          totalCartMoney();
      }
  });

  $('.qty').on('focusin', function(){
      $(this).data('prevVal', $(this).val());
  });

  $('.qty').on('change',function(){
      let value = $(this).val();
      let parent = $(this).parents("tr");
      let id = parent.attr("id");
      let result = editCart(id,value);
          
      if(!result){
          let prev= $(this).data("prevVal");
          $(this).val(prev);
      }else{
          let price = parent.children("td:nth-child(4)").attr("data-price");
          let totalPrice = parent.children("td:nth-child(5)");
          totalPrice.html((price*value).toLocaleString("vi-VN").replaceAll(".",","));
          totalCartMoney();
      }
  });
  function totalCartMoney(){
      let total = 0;
      let allCart = $('.moneyCartItem');
      allCart.each((index, obj)=>{
          let money = parseInt($(obj).html().replaceAll(",",""))??0;
          total+=money;
      });
      $('#totalCartMoney').html(total.toLocaleString("vi-VN").replaceAll(".",","));
  }

    function onChangeInput(callback) {
      var input;
      var btnminus = $(".qty-minus");
      var btnplus = $(".qty-plus");

      if (
        btnminus !== undefined &&
        btnplus !== undefined &&
        btnminus !== null &&
        btnplus !== null
      ) {
        function qtyminus(e) {
          input = $($(this).parent().children(".qty"));
          var min = Number(input.attr("min"));
          var step = Number(input.attr("step"));
          var current = Number(input.val());
          var newval = current - step;
          if (newval < min) {
            newval = min;
          }
          input.val(Number(newval));
          e.preventDefault();
          if (input != null && input != undefined) {
            callback(input, newval,current);
          }
        }

        function qtyplus(e) {
          input = $($(this).parent().children(".qty"));
          var min = Number(input.attr("min"));
          var step = Number(input.attr("step"));
          var current = Number(input.val());
          var newval = current + step;
          input.val(Number(newval));
          e.preventDefault();
          if (input != null && input != undefined) {
            callback(input, newval,current);
          }
        }

        btnminus.on("click", qtyminus);
        btnplus.on("click", qtyplus);
      } // End if test
    }
});
