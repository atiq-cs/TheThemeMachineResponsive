// ResponsiveChanges.js
// Create mobile/tablet navigation (supports 3 levels)
// Duplicate main navigation in footer on mobile/small tablets
// Place first aside below #layout-content on mobile/small tablets

$(function () {

    /* Collapse main navigation, create dropdown with icon, and append/remove based on breakpoints when document loads */
    if ($(window).width() <= 768) {
        $('#layout-navigation').hide();
        $('<a href="#" id="nav-collapsed"><span class="responsive-nav-bars"></span><span class="responsive-nav-bars"></span><span class="responsive-nav-bars"></span><span class="responsive-menu-text">Menu</span></a>').appendTo('.zone-header');
        $('#nav-collapsed').click(function () {
            $('#layout-navigation').toggle();
            if ($('#layout-navigation').is(':visible')) {
                $('#nav-collapsed').addClass('is-active');
            } else {
                $('#nav-collapsed').removeClass('is-active');
            }
        });
    } else if ($(window).width() > 768) {
        $('#nav-collapsed').remove();
        $('#layout-navigation').show();
    };

    /* Create or remove mobile navigation on resize event */
    $(window).resize(function () {
        if ($(window).width() <= 768 && $('#nav-collapsed').length != 1) {
            $('#layout-navigation').hide();
            $('<a href="#" id="nav-collapsed"><span class="responsive-nav-bars"></span><span class="responsive-nav-bars"></span><span class="responsive-nav-bars"></span><span class="responsive-menu-text">Menu</span></a>').appendTo('.zone-header');
            $('#nav-collapsed').click(function () {
                $('#layout-navigation').toggle();
                if ($('#layout-navigation').is(':visible')) {
                    $('#nav-collapsed').addClass('is-active');
                } else {
                    $('#nav-collapsed').removeClass('is-active');
                }
            });
        } else if ($(window).width() > 768) {
            $('#nav-collapsed').remove();
            $('#layout-navigation').show();
        };
    });
    /* End responsive navigation */

    /* Duplicate main navigation in Footer (this comes in handy when scrolling to the bottom on mobile device)
    ** Remove if not desired.
    */
    $('#layout-navigation').clone().insertBefore('#footer-sig').addClass('footer-menu');
    /* End duplicated main navigation in footer */

    /* Place first aside below layout-content on mobile browsers (aside's are generally less important than main content so this might make sense)
    ** Remove in not desired.
    */
    if ($(window).width() <= 768 && $('#aside-first').length == 1) {
        $('#aside-first').insertAfter('#layout-content');
    }
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('#aside-first').insertAfter('#layout-content');
        }
        else {
            $('#aside-first').insertBefore('#layout-content');
        }
    });
    /* End aside positioning */


});