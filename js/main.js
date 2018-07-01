$(document).ready(function () {
    $('.jcarousel').jcarouselSwipe({
        perSwipe: 3 // by default 1
    });

    $('.nav-bar-left').drawer({
        align: 'left',
        top: '150px'
    });
});
