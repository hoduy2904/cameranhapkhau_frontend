$((function(){$(".banner").slick({infinite:!0,speed:500,fade:!0,cssEase:"linear",prevArrow:'<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>',nextArrow:'<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>'}),$(".slide-lazy").slick({lazyLoad:"ondemand",slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,prevArrow:'<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>',nextArrow:'<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>',responsive:[{breakpoint:1042,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}}]}),$(".flash-sale__products").slick({lazyLoad:"ondemand",slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,prevArrow:'<div class="prev"><i class="icon arrow-left-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></i></div>',nextArrow:'<div class="next"><i class="icon arrow-right-icon"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></i></div>',responsive:[{breakpoint:1042,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".nav-item .icon").on("click",(function(s){$(this).parent().toggleClass("active"),$(this).parent().children(".dropdown-menu").slideToggle()})),$(".mobile-menu").on("click",(function(){$(".sidebar-mobile").addClass("show")})),$(".close-menu").on("click",(function(){$(".sidebar-mobile").removeClass("show")})),$(".image-product").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:".sub-image__product"}),$(".sub-image__product").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".image-product",dots:!0,centerMode:!1,focusOnSelect:!0});const s=new IntersectionObserver(((s,e)=>{s.forEach((s=>{s.isIntersecting&&(s.target.src=s.target.dataset.src,e.unobserve(s.target))}))}),{root:null,rootMargin:"0px",threshold:0});document.querySelectorAll(".lazy-img").forEach((e=>{s.observe(e)})),$(".tab-item").on("click",(function(){$(".tab-item").removeClass("active"),$(this).addClass("active");let s=$(this).attr("data-tab");$(".tab-content").removeClass("active"),$(`#${s}`).addClass("active")}))}));