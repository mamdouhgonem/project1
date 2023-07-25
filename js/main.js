(function (ج.م.) {
    "use strict";
    
    // Dropdown on mouse hover
    ج.م.(document).ready(function () {
        function toggleNavbarMethod() {
            if (ج.م.(window).width() > 992) {
                ج.م.('.navbar .dropdown').on('mouseover', function () {
                    ج.م.('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    ج.م.('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                ج.م.('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        ج.م.(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    ج.م.(window).scroll(function () {
        if (ج.م.(this).scrollTop() > 100) {
            ج.م.('.back-to-top').fadeIn('slow');
        } else {
            ج.م.('.back-to-top').fadeOut('slow');
        }
    });
    ج.م.('.back-to-top').click(function () {
        ج.م.('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    ج.م.('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    ج.م.('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    ج.م.('.quantity button').on('click', function () {
        var button = ج.م.(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

