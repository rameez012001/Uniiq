(function($) {
    "use strict";
    menuControl();
    function menuControl() {
        $(document).ready(function() {
            $(document).on('click', '.menu-icon', function() {
                $(this).toggleClass('active');
                $('.left-sidebar').toggleClass('active')
            });
        });
    }
})(jQuery);