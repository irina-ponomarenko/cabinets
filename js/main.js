$(document).ready(function() {
    $('.jcarousel').jcarouselSwipe({
        perSwipe: 3 // by default 1
    });


    $('#btn-toggle-vertical-menu').on('click', function() {
        $('#left-nav-bar').toggleClass('hide');
        $(this).toggleClass('align-right');
        $(this).find('.fa').toggleClass('fa-angle-right');
    });

    $('#btn-toggle-vertical-menu2').on('click', function() {
        let check = $('#left-nav-bar2').hasClass('hide');

        $('#left-nav-bar2').toggleClass('hide');
        $(this).toggleClass('align-right');
        $(this).find('.fa').toggleClass('fa-angle-right');

        if (!check) {
            $('#sub-menu-close').trigger('click');
        }
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
        $(this)
            .addClass('current')
            .siblings()
            .removeClass('current');
        $('#left-nav-bar').addClass('color-block');
        // $('.color-red').css('background', 'red');
        // $('.circular-block').addClass('color-red');
        $('#sub-menu-block')
            .attr('class', 'img-menu ' + $(this).data('color'))
            .addClass('open');

        $('#btn-toggle-vertical-menu').addClass('hide');
    });

    $('.js-sub-menu2').on('click', function() {
        $(this)
            .addClass('current')
            .siblings()
            .removeClass('current');

        $('#sub-menu-block2')
            .attr('class', 'img-menu ' + $(this).data('color'))
            .addClass('open');

        $('#btn-toggle-vertical-menu2').addClass('hide');
    });

    $('#sub-menu-close').on('click', function() {
        $('#sub-menu-block').removeClass('open');
        $('#btn-toggle-vertical-menu').removeClass('hide');
    });

    $('#sub-menu-close2').on('click', function() {
        $('#sub-menu-block2').removeClass('open');
        $('#btn-toggle-vertical-menu2').removeClass('hide');
    });


    let elSticky = $('#header-sticky');
    let stickyOffset = elSticky.offset().top + $('.wrapper-nav-center').outerHeight();

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (scroll >= stickyOffset) {
            elSticky.addClass('fixed-header');
            $('.header').css('margin-top', elSticky.outerHeight());
        }
        else if (scroll < stickyOffset) {
            elSticky.removeClass('fixed-header');
            $('.header').css('margin-top', 0);
        }
    });

    $(".tabs_menu li").click(function() { // Событие нажатия на элемент меню вкладок
        if (!$(this).hasClass("active-tab")) { // Проверка, не нажали ли мы на уже активный пункт
            var i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
            $(".tabs_menu li.active-tab").removeClass("active-tab"); // Удаляем активный класс у прошлого пункта меню
            $(".tabs .active-tab").hide().removeClass("active-tab"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
            $(this).addClass("active-tab"); // Добавляем нажатому пункту меню активный класс
            $($(".tabs").children(".content")[i]).fadeIn(2000).addClass("active-tab"); // Показываем и добавляем активный класс соответствующему контейнеру

            $('.jcarousel').jcarousel('reload');
        }
    });
});
