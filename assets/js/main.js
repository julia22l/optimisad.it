/***************************************************
==================== JS INDEX ======================
****************************************************
Mobile Menu Js


****************************************************/

(function ($) {
   "use strict";

   var windowOn = $(window);

   // Data js
   $("[data-bg-image]").each(function () {
      var $this = $(this),
         $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
   });

   $("[data-bg-color]").each(function () {
      $(this).css("background-color", $(this).attr("data-bg-color"));
   });

   // Preloader js
   function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
         let startWidth = 0;
         const endWidth = current.dataset.size;
         const interval = setInterval(frame, 20);
         function frame() {
            if (startWidth >= endWidth) {
               clearInterval(interval);
            } else {
               startWidth++;
               current.style.width = `${endWidth}%`;
               current.firstElementChild.innerText = `${startWidth}%`;
            }
         }
      });
   }
   setTimeout(loading, 1000);
   $(window).on("load", function () {
      $("#preloader").fadeOut(500);
   });
   if ($("#preloader").length > 0) {
      $(".tj-cancel-btn").each(function () {
         $(this).on("click", function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(500);
         });
      });
   }

   // Mobile Menu js
   $("#main-menu").meanmenu({
      meanMenuContainer: "#mobile-navbar-menu",
      meanScreenWidth: "991",
      meanExpand: ["<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>"],
   });

   // Sticky js
   $(window).scroll(function () {
      var Width = $(document).width();

      if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   //Canvas sidebar js
   var canva_expander = $(".canva_expander");
   if (canva_expander.length) {
      $(".canva_expander, #canva_close, #tj-overlay-bg2").on("click", function (e) {
         e.preventDefault();
         $("body").toggleClass("canvas_expanded");
      });
   }

   // Popup js
   $(document).ready(function () {
      $(".popup-gallery").magnificPopup({
         delegate: "a",
         type: "image",
         mainClass: "mfp-fade",
         gallery: {
            enabled: true,
         },
      });
   });

   // Hero Slider js
   var hero = new Swiper(".tj-hero-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      effect: "fade",
      autoplay: {
         delay: 5000,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         992: {
            slidesPerView: 1,
         },
         1024: {
            slidesPerView: 1,
         },
      },
   });

   // Hero Thumb Slider 2
   var slider2 = new Swiper(".thumb-slider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
   });
   var thumb_slider2 = new Swiper(".thumb-slider2", {
      spaceBetween: 10,
      allowTouchMove: false,
      thumbs: {
         swiper: slider2,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      loop: true,
   });

   // Testimonial Slider js
   var testimonial = new Swiper(".tj-testimonial-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
      },
   });

   // Testimonial Slider js
   var testimonial2 = new Swiper(".tj-testimonial-slider2", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         992: {
            slidesPerView: 1,
         },
         1024: {
            slidesPerView: 1,
         },
      },
   });

   // Testimonial Slider js
   var testimonial3 = new Swiper(".tj-testimonial-slider3", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         992: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 2,
         },
      },
   });

   // Testimonial Slider js
   var testimonial7 = new Swiper(".tj-testimonial-slider4", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1,
         },
         992: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 2,
         },
         1400: {
            slidesPerView: 3,
         },
      },
   });

   // Testimonial Slider js
   var testimonial8 = new Swiper(".tj-testimonial-slider8", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".testimonial8-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         576: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
         },
         1400: {
            slidesPerView: 3,
         },
      },
   });

   // Portfolio carousel (home 09)
   if ($(".portfolio-carousel9").length > 0) {
      $(".portfolio-carousel9").owlCarousel({
         center: true,
         items: 3,
         loop: true,
         margin: 24,
         autoWidth: true,
         dots: true,
      });
   }

   // Portfolio Slider js
   var portfolio = new Swiper(".tj-portfolio-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
      },
   });

   // Portfolio Slider js
   var portfolio2 = new Swiper(".tj-portfolio-slider2", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         640: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 2,
         },
         1024: {
            slidesPerView: 3,
         },
         1400: {
            slidesPerView: 3,
         },
         1440: {
            slidesPerView: 4,
         },
      },
   });

   // Portfolio Slider js
   var portfolio5 = new Swiper(".tj-portfolio-slider5", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         576: {
            slidesPerView: 2,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1024: {
            slidesPerView: 4,
         },
         1400: {
            slidesPerView: 4,
         },
         1440: {
            slidesPerView: 5,
         },
      },
   });

   // Portfolio carousel (home 06)
   var portfolio6 = new Swiper(".portfolio_carousel.style-6", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
         delay: 5000,
      },
      pagination: {
         el: ".portfolio_pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 2,
         },
         1200: {
            slidesPerView: 3,
         },
      },
   });

   // Portfolio carousel (home 07)
   if ($(".portfolio-carousel7").length > 0) {
      $(".portfolio-carousel7").owlCarousel({
         center: true,
         items: 3,
         loop: true,
         margin: 24,
         autoWidth: true,
         dots: true,
      });
   }

   // Service Slider js
   var service5 = new Swiper(".tj-service-slider2", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });

   // services carousel (home 06)
   var services6 = new Swiper(".services_carousel.style-6", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
         delay: 5000,
      },
      pagination: {
         el: ".services_pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      },
   });

   // services carousel (home 07)
   var services7 = new Swiper(".services_carousel.style-7", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
         delay: 5000,
      },
      pagination: {
         el: ".services_pagination",
         clickable: true,
      },
      loop: true,
      breakpoints: {
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
      },
   });

   // Team Slider js
   var team5 = new Swiper(".tj-team-slider", {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
         delay: 8500,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
   });

   // Team carousel (home 07)
   var Team7 = new Swiper(".tj-team-slider7", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
         delay: 5000,
      },
      navigation: {
         nextEl: ".slider-next",
         prevEl: ".slider-prev",
      },
      loop: true,
      breakpoints: {
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         },
         1400: {
            slidesPerView: 4,
         },
      },
   });

   // Portfolio filter js
   $("#portfolio-grid").imagesLoaded(function () {
      $(".filter-menu").on("click", "button", function () {
         var filterValue = $(this).attr("data-filter");
         $grid.isotope({
            filter: filterValue,
         });
      });
      $(".filter-menu button").on("click", function (event) {
         $(this).siblings(".active").removeClass("active");
         $(this).addClass("active");
         event.preventDefault();
      });
      var $grid = $("#portfolio-grid").isotope({
         itemSelector: ".portfolio-single-item",
         percentPosition: true,
         masonry: {
            columnWidth: ".portfolio-single-item",
         },
      });
   });
   $(document).ready(function () {
      startAnimation();
      function startAnimation() {
         jQuery(".skills").each(function () {
            jQuery(this)
               .find(".skillbar")
               .animate(
                  {
                     width: jQuery(this).attr("data-percent"),
                  },
                  4000
               );
         });
      }
   });

   // Portfolio filter js
   $("#portfolio-grid").imagesLoaded(function () {
      $(".filter-menu").on("click", "button", function () {
         var filterValue = $(this).attr("data-filter");
         $grid.isotope({
            filter: filterValue,
         });
      });
      $(".filter-menu button").on("click", function (event) {
         $(this).siblings(".active").removeClass("active");
         $(this).addClass("active");
         event.preventDefault();
      });
      var $grid = $("#portfolio-grid").isotope({
         itemSelector: ".portfolio-single-item",
         percentPosition: true,
         masonry: {
            columnWidth: ".portfolio-single-item",
         },
      });
   });
   $(document).ready(function () {
      startAnimation();
      function startAnimation() {
         jQuery(".skills").each(function () {
            jQuery(this)
               .find(".skillbar")
               .animate(
                  {
                     width: jQuery(this).attr("data-percent"),
                  },
                  4000
               );
         });
      }
   });

   // Form Validation
   /* contact form */
   if ($("#contact-form").length > 0) {
      $("#contact-form").validate({
         rules: {
            conName: "required",
            conEmail: {
               required: true,
               email: true,
            },
         },

         messages: {
            conName: "Enter your name.",
            conEmail: "Enter a valid email.",
         },
         submitHandler: function (form) {
            // start ajax request
            $.ajax({
               type: "POST",
               url: "assets/mail/contact-form.php",
               data: $("#contact-form").serialize(),
               cache: false,
               success: function (data) {
                  if (data == "Y") {
                     $("#message_sent").modal("show");
                     $("#contact-form").trigger("reset");
                  } else {
                     $("#message_fail").modal("show");
                  }
               },
            });
         },
      });
   }
   /* !contact form */

   /* contact form 2 */
   if ($("#contact-form2").length > 0) {
      $("#contact-form2").validate({
         rules: {
            con2Name: "required",
            con2Email: {
               required: true,
               email: true,
            },
            con2Subject: "required",
         },

         messages: {
            con2Name: "Enter your name.",
            con2Email: "Enter a valid email.",
            con2Subject: "Enter your Subject.",
         },
         submitHandler: function (form) {
            // start ajax request
            $.ajax({
               type: "POST",
               url: "assets/mail/contact-form2.php",
               data: $("#contact-form2").serialize(),
               cache: false,
               success: function (data) {
                  if (data == "Y") {
                     $("#message_sent").modal("show");
                     $("#contact-form2").trigger("reset");
                  } else {
                     $("#message_fail").modal("show");
                  }
               },
            });
         },
      });
   }
   /* !contact form 2 */

   // Video js
   var popupvideos = $(".popup-videos-button");
   if (popupvideos.length) {
      $(".popup-videos-button").magnificPopup({
         disableOn: 10,
         type: "iframe",
         mainClass: "mfp-fade",
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false,
      });
   }

   // Fun Fact js
   $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
         var countNumber = $(this).attr("data-count");
         $(this).html(countNumber);
      });
   });

   // Accordion js
   if ($(".accordion-item").length > 0) {
      $(".accordion-item .accordion-header").on("click", function () {
         // Check if the clicked item already has the "active" class
         if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active"); // If yes, remove the "active" class
         } else {
            // If not, remove "active" class from siblings and add it to the clicked item
            $(this).parent().siblings().removeClass("active");
            $(this).parent().addClass("active");
         }
      });
   }

   // ScrollTop js
   var webencyScrollTop = document.querySelector(".webency-scroll-top");
   if (webencyScrollTop != null) {
      var scrollProgressPatch = document.querySelector(".webency-scroll-top path");
      var pathLength = scrollProgressPatch.getTotalLength();
      var offset = 50;
      scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
      scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
      scrollProgressPatch.style.strokeDashoffset = pathLength;
      scrollProgressPatch.getBoundingClientRect();
      scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "stroke-dashoffset 10ms linear";
      window.addEventListener("scroll", function (event) {
         var scroll = document.body.scrollTop || document.documentElement.scrollTop;
         var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         var progress = pathLength - (scroll * pathLength) / height;
         scrollProgressPatch.style.strokeDashoffset = progress;
         var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
         if (scrollElementPos >= offset) {
            webencyScrollTop.classList.add("progress-done");
         } else {
            webencyScrollTop.classList.remove("progress-done");
         }
      });
      webencyScrollTop.addEventListener("click", function (e) {
         e.preventDefault();
         window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
         });
      });
   }

   // GSAP
   $(window).on("load", function () {
      var wow = new WOW({
         boxClass: "wow", // default
         animateClass: "animated", // default
         offset: 0, // default
         mobile: true, // default
         live: true, // default
      });
      wow.init();
   });
})(jQuery);
