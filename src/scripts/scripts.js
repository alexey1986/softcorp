(function () {
    // Mobile Menu
    var $mobileToggle = $('.js-mobile-toggle');
    var resizeTimer;

    $mobileToggle.on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $mobileToggle.toggleClass("active");
    });

    $(window).on('resize', function (e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            $mobileToggle.removeClass('active');
        }, 250);
    });

    $(document).click(function() {
        if ($mobileToggle.hasClass("active")) {
            $mobileToggle.removeClass("active");
        }        
    });
        
    $('.headerNav__links').click(function(e){
        e.stopPropagation();
    });

    // Form Custom Elements
    $('.uiSlider__bar').slider({
        range: "min",
        animate: true,
        value: 75,
        min: 0,
        max: 100,
        step: 1,
        slide: function(event, ui) {
            $('.uiSlider__percent').text(ui.value + "%");
        }
    });

    $( ".customSelect" ).selectmenu({
        classes: {
          "ui-selectmenu-menu": "customSelect__menu",
          "ui-selectmenu-button": "customSelect"
        },
        icons: { button: "fa fa-chevron-up fa-xs" }
      });

    $("form").submit(function(e){
        e.preventDefault();
    });

    $('.js-file').on('click', function() {
        $("."+$(this).data("target")).click();
    });

})();