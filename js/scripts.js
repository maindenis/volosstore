var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {

});

$(document).scroll(function() {

});

$(document).ready(function() {

    if( $(".slider").length > 0 ) {

        $('.slider').on('init', function(event, slick, currentSlide, nextSlide){
            cSl = parseInt(slick.currentSlide) + 1;       
            if(cSl <= 9) {
                text = "0" + cSl;
            } else {
                text = cSl;
            }
            $("#curSl").text(text);
            slLength = parseInt(slick.slideCount);       
            if(slLength <= 9) {
                text = "0" + slLength;
            } else {
                text = slLength;
            }
            $("#slLenght").text(text);
        });

        $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
            console.log(currentSlide);
            cSl = parseInt(currentSlide) + 1;       
            if(cSl <= 9) {
                text = "0" + cSl;
            } else {
                text = cSl;
            }
            $("#curSl").text(text);
        });

        $(".slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 2000,
            variableWidth: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            // centerMode: true,
            prevArrow: $(".prev_arrow"),
            nextArrow: $(".next_arrow"),
            // fade: true,
            responsive: [
                // {
                //   breakpoint: 1125,
                //   settings: {
                //     slidesToShow: 3,
                //     slidesToScroll: 1
                //   }
                // },
                // {
                //   breakpoint: 540,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // }
              ]
        });
    }

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // -----------------

    $('.grid').masonry({
        itemSelector: '.grid-item',
        // columnWidth: 
    });

    $('.marquee').marquee({
        duration: 20000,
        startVisible: true,
        duplicated: true
    });

    // -----------------

    $(".dr_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dr_parent");
      sl = parent.find(".dr_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {               
        sl.slideUp(300);
        parent.removeClass("active");
      }
    });

    // ----------------

    if($("#map").length > 0) {
        var mapZoom = $("#map").attr("data-zoom");
        var lat = $("#map").attr("data-lat");
        var long = $("#map").attr("data-long");
        ymaps.ready(function () {        
            var myMap = new ymaps.Map('map', {
                center: [long, lat],
                zoom: mapZoom
            }, {
                searchControlProvider: 'yandex#search'
            });
            myPlacemark1 = new ymaps.Placemark([long, lat], {
                hintContent: ''
            }, {
            });
            myMap.geoObjects.add(myPlacemark1);        
        });
    }

});