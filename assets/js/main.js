;(function($){

    // WOW Animation
    
    $(document).ready(function () {
        new WOW().init();
    });

    $(".category-span").click(function(e){
        $(this).parent().toggleClass("active")
    })

    $(".hero-banner-wpr").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        nav:true,
        navText:['<i class="icofont-thin-left"></i>','<i class="icofont-thin-right"></i>'],
    })

    $("#new-collections").owlCarousel({
        items: 1,
        margin:10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        navRewind: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        lazyLoad: true,
        navText: ["<em class='porto-icon-chevron-left'></em>","<em class='porto-icon-chevron-right'></em>"],
                    responsive: {
          0: {
            items:2
          },
          640: {
            items:3
          },
          768: {
            items:3
          },
          992: {
            items:4
          },
          1200: {
            items:4
          }
        }
                    
    });

    $(".banner-sub-content .sub-content-items").owlCarousel({
        items:4,
        loop:true,
        dots:false,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin:12,
        autoplay:true,
        responsive:{
            0:{
                items:2
            },
            400:{
                items:3
            },
            500:{
                items:4
            }

        }
    })

    $(".one-column-slider").owlCarousel({
        loop:true,
        items:1,
        dots:false,
        nav:false,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        autoplay:true,
        responsive:{
            576:{
                nav:true
            }
        }
    })

    $(".six-column-slider").owlCarousel({
        items:6,
        loop:true,
        dots:false,
        nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        margin:16,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            360:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

    $(".four-column-slider").owlCarousel({
        items:4,
        loop:true,
        dots:true,
        nav:false,
        margin:16,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            360:{
                items:2
            },
            768:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

     // Magnifig Popup
     if($(".videolink").length){
        
        $('.videolink').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                   youtube: {
                      index: 'youtube.com/', 
                      id: 'v=', 
                      src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                  }
                }
            }
        });

    }
    
    // Language Switcher  active

    $(".lang-switcher").on("click", function(e){
        e.preventDefault();
        $(".lang-list").toggleClass("lang-list-open");
    });
    $(".lang-list li").each(function(){
        $(this).on("click", function(){
            var logoSrc = $(this).children(".flag").children("img").attr("src"); 
            $(".lang-switcher > .flag img").attr("src", logoSrc);
        });
    });

    //   Show More Content

    let windowWidth = $(window).width();

    if(windowWidth < 1400  && windowWidth >=992){
        $(".liked-products > .single-product").slice(0, 16).show();
        $(".show-more-btn").on("click", function(e){
            e.preventDefault()
            $(".liked-products > .single-product:hidden").slice(0, 4).slideDown()
            if ($(".liked-products > .single-product:hidden").length == 0) {
                $(".show-more-btn").fadeOut('slow')
            }
        })
    }else if(windowWidth >=768  && windowWidth <=991){
        $(".liked-products > .single-product").slice(0, 12).show();
        $(".show-more-btn").on("click", function(e){
            e.preventDefault()
            $(".liked-products > .single-product:hidden").slice(0, 6).slideDown()
            if ($(".liked-products > .single-product:hidden").length == 0) {
                $(".show-more-btn").fadeOut('slow')
            }
        })
    }else if(windowWidth >320 && windowWidth <768 ){
        $(".liked-products > .single-product").slice(0, 12).show();
        $(".show-more-btn").on("click", function(e){
            e.preventDefault()
            $(".liked-products > .single-product:hidden").slice(0, 4).slideDown()
            if ($(".liked-products > .single-product:hidden").length == 0) {
                $(".show-more-btn").fadeOut('slow')
            }
        })
    }else{
        $(".liked-products > .single-product").slice(0, 10).show();
        $(".show-more-btn").on("click", function(e){
            e.preventDefault()
            $(".liked-products > .single-product:hidden").slice(0, 5).slideDown()
            if ($(".liked-products > .single-product:hidden").length == 0) {
                $(".show-more-btn").fadeOut('slow')
            }
        })
    }

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page=="categori-details.html"){
       
        $('.print-widget  .infinite-container').simpleLoadMore({
            item: '.load-more',
            count: 4,
            itemsToLoad: 3,
            easing:"slide"
        });
    
        $('.brand-widget  .infinite-container').simpleLoadMore({
            item: '.load-more',
            count: 4,
            itemsToLoad: 2,
            easing:"fade"
        });
    
        $('.material-widget  .infinite-container').simpleLoadMore({
            item: '.load-more',
            count: 5,
            itemsToLoad: 2,
            easing:"slide"
        });
    
        $('.color-widget  .infinite-container').simpleLoadMore({
            item: '.load-more',
            count: 13,
            itemsToLoad: 4,
            easing:"slide"
        });
    
        $('.size-widget  .infinite-container').simpleLoadMore({
            item: '.load-more',
            count: 5,
            itemsToLoad: 2,
            easing:"slide"
        });
    }else if(page=="product-details.htmll"){

        $('#cm-review').simpleLoadMore({
            item: '.load-more',
            count: 1,
            itemsToLoad: 1,
        });

        $('#cm-review .load-more__btn').text("See more comment");
    
    }

    // Product Filtering

    if($(".product-filter-label").length){
       
        $(".product-filter-label").click(function(){
            $(this).addClass("active");

            $(".filter-close").on("click",function(e){

                e.preventDefault();
                $(".product-filter-label").removeClass("active");
            })
        })
    }

    // Close Category Tabs

    var tabClose = $(".tab-close");
    var tabLinks = $(".category-list-2 .nav-link")

    for(var i = 0 ; i < tabClose.length ; i++){
        $(tabClose[i]).click(function(){
            if($(this).parent().parent().hasClass("active")){

                $(this).parent().parent().removeClass("active")

                navLinksRemove();
            }
        })
    }

    function navLinksRemove(){
        for ( var i=0; i< tabLinks.length ; i++){
            if($(tabLinks[i]).hasClass("active")){
                $(tabLinks[i]).removeClass("active")
            }
        }
    }

    // Slick Slider

    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page=="product-details.htmll"){

        $('.slider-thumb').slick({
            // autoplay: true,
            vertical: true,
            infinite: true,
            verticalSwiping: true,
            slidesToShow: 5,
            asNavFor: '.product-slider-preview',
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                    }
                },
            ]
        });

        $('.product-slider-preview').slick({
            // autoplay: true,
            vertical: true,
            infinite: true,
            slidesPerRow: 1,
            slidesToShow: 1,
            asNavFor: '.slider-thumb',
            arrows: false,
            draggable: false,
        });
    }

    // Profile Pic

    $(document).ready(function() {

    
        var readURL = function(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
    
                reader.onload = function (e) {
                    $('.profile-pic').attr('src', e.target.result);
                }
        
                reader.readAsDataURL(input.files[0]);
            }
        }
        
    
        $(".file-upload").on('change', function(){
            readURL(this);
        });
        
        $(".upload-button").on('click', function() {
           $(".file-upload").click();
        });
    });

    // Sing In-Up Form


    $(".sign-in").click(function(){
        $(".sign-up").removeClass("active");
        $(this).addClass("active");
        $(".woo-sign-up").removeClass("show")
        $(".woo-sign-in").addClass("show")
    })

    $(".sign-up").click(function(){
        $(".sign-in").removeClass("active");
        $(this).addClass("active");
        $(".woo-sign-in").removeClass("show")
        $(".woo-sign-up").addClass("show")
    })

    $(".phone-login").click(function(){
        $(".mail-login").removeClass("active");
        $(this).addClass("active");
        $(".sign-with-mail").removeClass("show")
        $(".sign-with-phone").addClass("show")
    })

    $(".mail-login").click(function(){
        $(".phone-login").removeClass("active");
        $(this).addClass("active");
        $(".sign-with-phone").removeClass("show")
        $(".sign-with-mail").addClass("show")
    })

    $(".main-menu").click(function(){
        $(".categories").removeClass("active");
        $(this).addClass("active");
        $(".woo-categories-nav").removeClass("show")
        $(".woo-product-menu").addClass("show")
    })

    $(".categories").click(function(){
        $(".main-menu").removeClass("active");
        $(this).addClass("active");
        $(".woo-product-menu").removeClass("show")
        $(".woo-categories-nav").addClass("show")
    })

    // Password Type Toggle

    $(".pass-input > i").click(function(){
       $(this).toggleClass("fa-eye-slash");
       if($(this).parents().siblings("input").attr("type") == "text"){
          $(this).parents().siblings("input").attr("type","password")
       }
       else{
        $(this).parents().siblings("input").attr("type","text")
       }
    })

    // Birthday Selector
    
    if($('.dateselector1').length){
        $('.dateselector1').dateSelector({
            dateFormat: "MM/DD/YYYY"
        });
    }

    // Ticket Modal

    if($(".ticket-btn").length){
        $(".ticket-btn").click(function(){
            $(".woo-ticket-modal").addClass("show")
        })
    }

    if($(".modal-heading .fa-times").length){
        $(".modal-heading .fa-times").click(function(){
            $(".woo-ticket-modal").removeClass("show")
        })
    }

    // Mobile Sidebar

    if($(".has-children").length){

        if($(window).width () <= 991){
            $(".has-children").on("click",function(e){
                e.preventDefault();
                $(this).next(".sub-menu").slideToggle();
            })
        }
    }

    if($(".nav-toggle .fa-bars").length){

        $(".nav-toggle .fa-bars").on("click",function(){
            $(".woo-product-nav").addClass("show")
        })
    }

    if($(".nav-toggle .fa-times").length){
        
        $(".nav-toggle .fa-times").on("click",function(){
            $(".woo-product-nav").removeClass("show")
        })
    }

    if($(".nav-search-btn").length){

        $(".nav-search-btn").on("click",function(e){
            e.preventDefault();
            $(".nav-search-input").toggleClass("show")
        })
    }

    if($(".category-toggle").length){

        $(".category-toggle").on("click",function(){

            $(this).parent().removeClass("show")
        })
    }

    if($(".product-filter").length){

        $(".product-filter").on("click",function(){

            $(".woo-sidebar-widget").addClass("show")
        })
    }

    // Layout Change

    if($(".grid-icon").length){

        $(".grid-icon").on("click",function(){
            
            $(".list-icon").removeClass("active");
            $(this).addClass("active");
            $(".filtered-products").removeClass("list");
        })
    }
    
    if($(".list-icon").length){

        $(".list-icon").on("click",function(){

            $(".grid-icon").removeClass("active");
            $(this).addClass("active");
            $(".filtered-products").addClass("list");
        })
    }

    $(".disable").on("click",function(e){
        e.preventDefault();
    })

    // Video Slider

    $(".video-list video").click(function(){
        
        $(this).addClass('active').siblings().removeClass('active');

        let vidSrc = $(this).attr('src');

        $(".product-video video").attr('src',vidSrc);
    })

    // Single Product Slider

    jQuery(document).ready(function() {
        var productPreview = jQuery(".single-product-preview");
        var productThumb = jQuery(".single-product-thumb");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;
    
        productPreview.owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: false,
            animateIn: "fadeIn",
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,

        }).on("changed.owl.carousel", syncPosition);
    
        productThumb.on("initialized.owl.carousel", function() {

            productThumb .find(".owl-item").eq(0).addClass("current");

        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: false,
            margin:8,
            smartSpeed: 1000,
            slideSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,

        }).on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;
    
          //if you disable loop you have to comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    
          if (current < 0) {
            current = count;
          }
          if (current > count) {
            current = 0;
          }
    
          //end block
    
          productThumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = productThumb.find(".owl-item.active").length - 1;
          var start = productThumb
          .find(".owl-item.active")
          .first()
          .index();
          var end = productThumb
          .find(".owl-item.active")
          .last()
          .index();
    
          if (current > end) {
            productThumb.data("owl.carousel").to(current, 100, true);
          }
          if (current < start) {
            productThumb.data("owl.carousel").to(current - onscreen, 100, true);
          }
        }
    
        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            productPreview.data("owl.carousel").to(number, 100, true);
          }
        }
    
        productThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = jQuery(this).index();
          productPreview.data("owl.carousel").to(number, 300, true);
        });

    });

    // Quick View

    $(".btn-quickview").on("click",function(){
        $(".clo-quick-view").addClass("show")
    })

    $(".modal-close").on("click",function(){
        $(".clo-quick-view").removeClass("show")
    })

    //Elevate Zoom
    if ($(".single-product-preview").length) {
        $(".single-product-preview .owl-item.active img").elevateZoom({
            zoomType: "inner",
            cursor: "crosshair",
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 750
        });
    }
    
})(jQuery);

(function(){

    // Sticky Nav

    const headerContainer = document.querySelector(".clo-header.fixed");
    if(headerContainer != null){
        window.onscroll = ()=>{
            this.scrollY > 100 ? headerContainer.style.display = 'none' : headerContainer.style.display = 'block';
        }
    }
    
    // Price Range Filter

    const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
    let priceGap = 1000;

    priceInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);
            
            if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                if(e.target.className === "input-min"){
                    rangeInput[0].value = minPrice;
                    range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                }else{
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

            if((maxVal - minVal) < priceGap){
                if(e.target.className === "range-min"){
                    rangeInput[0].value = maxVal - priceGap
                }else{
                    rangeInput[1].value = minVal + priceGap;
                }
            }else{
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    const categoryBox = document.getElementsByClassName("single-sub-category");

    for ( i = 0; i < categoryBox.length ; i++){
        categoryBox[i].addEventListener("click",function(){
            this.classList.toggle("active")
        })
    }

    const accExpand = document.querySelector(".acc-expand");

    if(accExpand !== null){
        
        accExpand.addEventListener("click", function(){
            document.querySelector(".account-widget").classList.add("show")
        })
    }

    const accClose = document.querySelector(".acc-close");

    if(accClose != null){

        accClose.onclick = function(){
            document.querySelector(".account-widget").classList.remove("show")
        }
    }

    const myBtn=document.querySelector(".order-btn");
    const alertBox=document.querySelector(".alert-box");
    const closeBtn=document.querySelector(".close-alert")     
    let timer;

    if(myBtn !== null){

        myBtn.addEventListener("click",function () {

            showAlertBox();
            setTimeout(function(){
                window.location.href = "shop-cart.html";
            },3000)
        })

    }
   
    if(closeBtn !== null){

        closeBtn.addEventListener("click",function () {

            hideAlertBox();
            clearTimeout(timer);
            window.location.href = "shop-cart.html";
            
        })
    }

    function showAlertBox(){
        alertBox.classList.remove("hide");
        alertBox.classList.add("show");
        // hide animation onload 
        if(alertBox.classList.contains("hidden")){
            alertBox.classList.remove("hidden");
        }
        timer=setTimeout(function(){
            hideAlertBox();
        },2000)
     }
      
    function hideAlertBox(){
        alertBox.classList.remove("show");
        alertBox.classList.add("hide");
    }
    
})()