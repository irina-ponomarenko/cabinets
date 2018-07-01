$(document).ready(function() {
    $('.jcarousel').jcarouselSwipe({
        perSwipe: 3 // by default 1
    });


    $('#btn-toggle-vertical-menu').on('click', function() {
        $('.left-nav-bar').toggleClass('hide');
        $(this).find('.fa').toggleClass('fa-angle-right');
    });
});
