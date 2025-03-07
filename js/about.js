$(function () {

    /* manu transition */
    const transition = document.querySelector('.transition');
    transition.addEventListener('click', handleClick);

    function handleClick() {
        transition.classList.toggle('close');
    }


    /* nav */
    $('header .nav-menu li').click(function () {
        $('header .nav-menu li').removeClass('pick');
        $(this).addClass('pick');

        let pick = $('header .nav-menu li').hasClass('pick');

        if (pick) {
            $(this).css({ color: "#2DA0FA" });
        } else {
            $(this).css({ color: "#111111" });
        }
    });

    $('header .nav-menu li').mouseover(function () {
        $(this).not('.pick').stop().css({ color: "#A6CFE2" });
    });

    $('header .nav-menu li').mouseout(function () {
        $(this).not('.pick').stop().css({ color: "#111111" });
    });


    /* menu */
    $('.nav-icon').on("click", function () {
        $('.menu-box').toggleClass('open');

        let menu = $('.menu-box').hasClass('open');

        if (menu) {
            $('.menu-box').animate({ left: "0" }, 500);
            $('body').css({ overflow: "hidden" });
        } else {
            $('.menu-box').animate({ left: "100%" }, 500);
            $('body').css({ overflow: "auto" });
        }

    });
    ////////////////////////////////////////////////////
});