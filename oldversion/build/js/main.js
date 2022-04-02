/* Jquery */
$(document).ready(function () {
    // header slider
    $('.head__slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        fade: true,
        cssEase: 'ease',
    });
    $('.slick-dots button').html('')
    //  top games slider
    $('.topgames__slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        swipe: true,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.slick-dots button').html('')
    // reviews slider
    $('.reviews__slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        fade: true,
        cssEase: 'ease'
    });
    $('.slick-dots button').html('')
    // modals
    $('#register').on('click', function () {
        $('.overlay, #reg').fadeIn('slow');
    });
    $('#login').on('click', function () {
        $('.overlay, #sign').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #reg, #sign').fadeOut('slow');
    });
    $('form').submit(function (index) {
        e.preventDefault();
    });
    // плавная прокрутка
    $("a[href]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });
    // sidebar
    $(window).scroll(function () {
        if (this.scrollY > 1800) {
            $('.deal').addClass('deal_sticky');
            $('.deal').fadeIn();
        } else {
            $('.deal').removeClass('deal_sticky');
            $('.deal').fadeOut();
        }


    });
    // Tabs header
    const tabContent = document.querySelectorAll('.topgames__content'),
        tabsWrapper = document.querySelector('.topgames__tabs'),
        tabs = document.querySelectorAll('.topgames__tab');
    function hideContent() {
        tabContent.forEach(i => {
            i.classList.add('hide');
            i.classList.remove('show', 'fade');
        })
        tabs.forEach(i => {
            i.classList.remove('topgames__tab_active');
        })
    }
    function showContent(i = 0) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show', 'fade');
        tabs[i].classList.add('topgames__tab_active');
    }
    hideContent();
    showContent();
    tabsWrapper.addEventListener('click', (e) => {
        target = e.target;
        if (target && target.matches('.topgames__tab')) {
            tabs.forEach((item, index) => {
                if (target == item) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    });

    /* burgermenu */
    const menu = document.querySelector('.header__menu'),
        navLinks = document.querySelectorAll('.header__link'),
        btns = document.querySelector('.header__btns'),
        logo = document.querySelector('.header__logo'),
        hamburger = document.querySelector('.header__burger');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__menu_active');
        btns.classList.toggle('header__btns_active');
        logo.classList.toggle('header__logo_hide');
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('header__menu_active');
            btns.classList.toggle('header__btns_active');
            logo.classList.toggle('header__logo_hide');
        })
    });
    // Timer footer
    const deadline = '2021-08-10';
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / 1000 * 60 * 60) % 24),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#mins'),
            seconds = timer.querySelector('#secs'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.deal__timer', deadline);

    // Animations
    const animItems = document.querySelectorAll('._anim-items');
    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let index = 0; index < animItems.length; index++) {
                const animItem = animItems[index];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 3;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;

                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }
                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_active');
                } else {
                    if (!animItem.classList.contains('_anim-off')) {
                        animItem.classList.remove('_active');
                    }
                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {
                top: rect.top + scrollTop,
                left: rect.left + scrollLeft
            }
        }
        setTimeout(() => {
            animOnScroll();
        }, 300);
    }
});
