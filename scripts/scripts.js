 var pageHeight = $(window).height();
 var screenWidth = $(window).width();
 $(window).on("resize", function(e) {
     pageHeight = $(window).height();
     screenWidth = $(window).width();
     changeHeight();
 });

 function changeHeight() {
     $('.putMarTopHeight').css({
         "margin-top": pageHeight
     })
     $('.putpageHeight').css({
         "height": pageHeight
     })
     $('.putpagemHeight').css({
         "min-height": pageHeight
     })
     $('.putpage1Height').css({
         "height": pageHeight - screenWidth / 10
     })
     $('.top-angle').css({
         "border-left-width": screenWidth - 25,
         "border-top-width": screenWidth / 10
     })

 }

 $(document).ready(function() {

     /***************** Waypoints ******************/



     /***************** Flickity ******************/

     $('#featuresSlider').flickity({
         cellAlign: 'left',
         contain: true,
         prevNextButtons: false
     });

     $('#showcaseSlider').flickity({
         cellAlign: 'left',
         contain: true,
         prevNextButtons: false,
         imagesLoaded: true
     });

     /***************** Fancybox ******************/

     $(".youtube-media").on("click", function(e) {
         var jWindow = $(window).width();
         if (jWindow <= 768) {
             return;
         }
         $.fancybox({
             href: this.href,
             padding: 4,
             type: "iframe",
             'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
         });
         return false;
     });

 });

 $(document).ready(function() {
     $("a.single_image").fancybox({
         padding: 4,
     });
 });

 /***************** Nav Transformicon ******************/

 /* When user clicks the Icon */
 $(".nav-toggle").click(function() {
     $(this).toggleClass("active");
     $(".overlay-boxify").toggleClass("open");
 });

 /* When user clicks a link */
 $(".overlay ul li a").click(function() {
     $(".nav-toggle").toggleClass("active");
     $(".overlay-boxify").toggleClass("open");
 });

 /* When user clicks outside */
 $(".overlay").click(function() {
     $(".nav-toggle").toggleClass("active");
     $(".overlay-boxify").toggleClass("open");
 });

 /***************** Smooth Scrolling ******************/

 $('a[href*=#]:not([href=#])').click(function() {
     if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
             }, 2000);
             return false;
         }
     }
 });