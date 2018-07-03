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

    let elLeftNav = $('#left-nav-bar');
    let modeNav = false;

    $(window).scroll(function() {
        let scroll = $(window).scrollTop();

        if (!modeNav && scroll >= stickyOffset) {
            $('#sale').addClass('hidden');
            elSticky.addClass('fixed-header');
            elSticky.next().css('margin-top', elSticky.outerHeight());

            elLeftNav.addClass('fixed-left-nav');
            elLeftNav.css('top', $('#header-sticky').outerHeight());

            if (!$('.left-nav-bar').hasClass('hide')) {
                $('#btn-toggle-vertical-menu').trigger('click');
            }

            modeNav = true;
        }
        else if (modeNav && scroll < stickyOffset) {
            elSticky.removeClass('fixed-header');
            elSticky.next().css('margin-top', 20);

            elLeftNav.removeClass('fixed-left-nav');
            elLeftNav.css('top', 'auto');

            if ($('.left-nav-bar').hasClass('hide')) {
                $('#btn-toggle-vertical-menu').trigger('click');
            }

            modeNav = false;
        }


        // if (scroll + $('#header-sticky').outerHeight() >= leftNavOffset) {
        //     elLeftNav.addClass('fixed-left-nav');
        //     elLeftNav.css('top', $('#header-sticky').outerHeight());
        // }
        // else {
        //     elLeftNav.removeClass('fixed-left-nav');
        //     elLeftNav.css('top', 'auto');
        // }
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
