"use strict";jQuery(function(){$(".nav-link").on("click",function(){$(this).parentsUntil("navbar-collapse").removeClass("show")});$("html").attr("dir");$(".header__slider, .testimonial").slick({infinite:!1,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!0,prevArrow:"<svg class='a-left control-c prev slick-prev'>\n    <use xlink:href=\"../icons/sprite.svg#icon-Angle-Left\">\n    </svg>",nextArrow:"<svg class='a-right control-c next slick-next'>\n    <use xlink:href=\"../icons/sprite.svg#icon-Angle-Right\">\n    </svg>",responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1}}]}),$(".blog__article").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,autoplay:!0,autoplaySpeed:5e3,dots:!0,arrows:!1,appendDots:$(".placeholder"),responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$(".our-team__wrapper").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,autoplay:!0,autoplaySpeed:5e3,dots:!0,arrows:!1,responsive:[{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:2,dots:!1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),$(".our-works__btn-gallery .btn").on("click",function(){var t=$(this).data("select");$(this).addClass("active").siblings().removeClass("active"),$(".our-works__gallery__image").filter(function(s,e){$(e).hasClass(t)?$(e).removeClass("opacity"):$(e).addClass("opacity")})}),$(document).on("scroll",function(){1e3<=$(document).scrollTop()?$("#scrollUp").addClass("fadeIn"):$("#scrollUp").removeClass("fadeIn")}),$("#scrollUp").on("click",function(){$("html, body").animate({scrollTop:0},1e3)}),$(".change_lang").on("change",function(){"ar"===$(this).val().replace("#","")?$("html").attr({dir:"rtl",lang:"ar"}):$("html").attr({dir:"ltr",lang:"en"}),$(".slick-slider").addClass("direction-ltr")});var s=$("[data-src]");var t=new IntersectionObserver(function(s,l){$(s).each(function(s,e){var t,o;e.isIntersecting?(t=e.target,(o=$(t).data("src"))&&(t.src=o,$(t).removeAttr("data-src")),e.target.classList.remove("fadeOut"),e.target.classList.add("fadeIn"),l.unobserve(e.target)):e.target.classList.add("fadeOut")})},{threshold:0});s.each(function(s,e){return t.observe(e)})});