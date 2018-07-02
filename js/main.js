$(document).ready(function() {
    $('.jcarousel').jcarouselSwipe({
        perSwipe: 3 // by default 1
    });


    $('#btn-toggle-vertical-menu').on('click', function() {
        $('.left-nav-bar').toggleClass('hide');
        $(this).toggleClass('align-right');
        $(this).find('.fa').toggleClass('fa-angle-right');
    });

    $('#toggle-menu-vertical').on('click', function() {
        let item = $('#left-bar-content');
        let check = item.hasClass('hidden');

        $(this).find('.fa').toggleClass('fa-angle-right');

        if (check) {
            item.removeClass('hidden');
            setTimeout(() => {
                item.removeClass('overflow-hidden');
            }, 300);
        }
        else {
            item.addClass('hidden');
            setTimeout(() => {
                item.addClass('overflow-hidden');
            }, 300);
        }
    });

    $('.js-sub-menu').on('click', function() {
        $('#sub-menu-block').addClass('open');
    });

    $('#sub-menu-close').on('click', function() {
        $('#sub-menu-block').removeClass('open');
    });



    let elSticky = $('#header-sticky');
    let stickyOffset = elSticky.offset().top;

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) {
            elSticky.addClass('fixed-header');
            elSticky.next().css('margin-top', elSticky.outerHeight());
        }
        else {
            elSticky.removeClass('fixed-header');
            elSticky.next().css('margin-top', 0);
        }
    });
});
