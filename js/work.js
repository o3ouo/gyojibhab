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


    /* mouseover */
    // $('.box').addClass('bg')

    // const box = document.querySelector(".box");
    // box.addEventListener("mouseover", handleOver);

    // const size = $(window).innerWidth();
    // console.log(size);

    // function handleOver(){
    //     $('.box.bg').on("mouseover", function(){
    //         $(this).css({background: "none"});
    //         $(this).find('h3').css({display: "none"});
    //         $(this).find('p').css({display: "block"});
    //     });

    //     $('.box.bg').on("mouseout", function(){
    //         $(this).stop().css({background: "lightblue"});
    //         $(this).find('h3').css({display: "block"});
    //         $(this).find('p').css({display: "none"});
    //     });

    // };

    // function handleOver(){
    //     if(size > 1280){
    //         $('.box').on("mouseover", function(){
    //             $(this).stop().css({background: "none"});
    //             $(this).find('h3').css({display: "none"});
    //             $(this).find('p').css({display: "block"});
    //         });

    //         $('.box').on("mouseout", function(){
    //             $(this).stop().css({background: "#FFFFFF"});
    //             $(this).find('h3').css({display: "block"});
    //             $(this).find('p').css({display: "none"});
    //         });
    //     }else {
    //         $('.box').off();
    //     };

    // };

    // $(window).resize(function(){
    //     let size = $(window).innerWidth();

    //     if(size<1280){
    //         $('.box').off();

    //         // $('.box').off("mouseover", handleOver);
    //         // $('.box').off("mouseout", handleOver);

    //         // $('.box').off("mouseover", function(){
    //         //     $(this).stop().css({background: "none"});
    //         //     $(this).find('h3').css({display: "none"});
    //         //     $(this).find('p').css({display: "block"});
    //         // });

    //         // $('.box').off("mouseout", function(){
    //         //     $(this).stop().css({background: "#FFFFFF"});
    //         //     $(this).find('h3').css({display: "block"});
    //         //     $(this).find('p').css({display: "none"});
    //         // });
    //     };
    //     console.log(size)
    // });


    /* after image change */
    // $(".marine").addClass("change");

    // $(".hojae").addClass("change");

    // $(".briller").addClass("change");

    // $(".bonaebom").addClass("change");








    ////////////////////////////////////////////////////
});
