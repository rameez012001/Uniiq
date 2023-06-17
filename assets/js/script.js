(function($) {
    "use strict";
    menuControl();
    function menuControl() {
        $(document).ready(function() {
            $(document).on('click', '.menu-icon', function() {
                $(this).toggleClass('active');
                $('.left-sidebar').toggleClass('active')
                $('.about-text').toggleClass('active')
                $('#logo').toggleClass('inactive')
                $('.item-wrapper').toggleClass('inactive')
                $('footer').toggleClass('inactive')
            });
            
        });
    }
})(jQuery);
AOS.init();