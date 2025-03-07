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


    /* section-3 click drag (Jqaury) */
    const slider = $('.slide-box');

    let x, left, down;

    slider.mousedown(function (e) {
        e.preventDefault();
        down = true;
        x = e.pageX;
        left = $(this).scrollLeft();
    });

    slider.mousemove(function (e) {
        if (down) {
            let newX = e.pageX;
            $(this).scrollLeft(left - newX + x);
        }
    });

    slider.mouseleave(function (e) {
        down = false;
    });

    slider.mouseup(function (e) {
        down = false;
    });



    /* secton-3 click drag (JavaScript) */

    // const slider = document.querySelector('.slide-box');
    // let isDown = false;
    // let startX;
    // let scrollLeft;

    // slider.addEventListener('mousedown', e => {
    //     isDown = true;
    //     slider.classList.add('active');
    //     startX = e.pageX - slider.offsetLeft;
    //     scrollLeft = slider.scrollLeft;
    // });

    // slider.addEventListener('mouseleave', () => {
    //     isDown = false;
    //     slider.classList.remove('active');
    // });

    // slider.addEventListener('mouseup', () => {
    //     isDown = false;
    //     slider.classList.remove('active');
    // });

    // slider.addEventListener('mousemove', e => {
    //     if (!isDown) return;
    //     e.preventDefault();
    //     const x = e.pageX - slider.offsetLeft;
    //     const walk = x - startX;
    //     slider.scrollLeft = scrollLeft - walk;
    // });



    /* translate 속성 이용 */

    // // 요소 & 사이즈
    // const slideBox = document.querySelector('.slide-box');
    // const boxScrollWidth = slideBox.scrollWidth; // 가려진 영역(스크롤 영역)을 포함한 요소의 가로 사이즈
    // const boxClientWidth = slideBox.clientWidth; // 가려진 영역은 제외한 현재 화면에 보이는 요소에 대한 가로 사이즈
    // // scrollWidth - clientWidth = translateX (요소를 이동시킬 수 있는 최대치)

    // // 이벤트 마다 갱신될 값
    // let startX = 0;
    // let nowX = 0;
    // let endX = 0;
    // let boxX = 0;

    // // 이벤트 핸들러 선언
    // // const onScrollStart = (e) => {};
    // // const onScrollMove = (e) => {};
    // // const onScrollEnd = (e) => {};
    // // const onClick = (e) => {};

    // // 유틸 함수 정의 (코드 재사용)
    // const getClientX = (e) => {
    //     const isTouches = e.touches ? true : false;
    //     return isTouches ? e.touches[0].clientX : e.clientX;
    // };  // 마우스로 클릭한 지점의 X좌표는 e.clientX로 얻을 수 있지만, 터치 이벤트가 발생한 경우에는 e.touches[0].clientX를 참조해야 한다.


    // const getTranslateX = () => {
    //     return parselnt(getComputedStyle(slideBox).transform.split(/[^￦-0-9]+/g)[5]);
    // }; // 최초 스크롤은 상관없지만, 두 번째 스크롤부터는 스크롤이 종료된 위치도 고려해서 계산해야 하기 때문에 요소의 translateX 위치를 가져와야 한다.
    //     // window 객체에 내장된 API인 getCompuredStyle 메서드를 사용하면 요소가 가진 CSS의 속성 값을 얻을 수 있다.
    //     // transform의 경우 x, y, z의 값을 모두 반환하므로 정규표현식을 통해 필요한 x의 값만 가져옴

    // const setTranslateX = (x) => {
    //     slideBox.computedStyleMap.transform = `translateX(${x}px)`;
    // }; // 스크롤 됨에 따라 요소의 위치를 조정해야 하기 때문에, 간편하게 함수로 만들어 재사용

    // // 이벤트 연결 (처음에는 클릭과 관련된 이벤트만 연결)
    // const bindEvents = () => {
    //     slideBox.addEventListener('mousedown', onScrollStart);
    //     slideBox.addEventListener('touchstart', onScrollStart);
    //     slideBox.addEventListener('click', onClick);
    // };
    // bindEvents();

    // // 스크롤 시작 이벤트 구현
    // const onScrollStart = (e) => {
    //     startX = getClientX(e);
    //     window.addEventListener('mousemove', onScrollMove);
    //     window.addEventListener('touchmove', onScrollMove);
    //     window.addEventListener('mouseup', onScrollEnd);
    //     window.addEventListener('touchend', onScrollEnd);
    // };  // 스크롤을 시작하게 되면 마우스 또는 터치한 지점을 startX 변수에 저장

    // // 스크롤 진행 이벤트 구현
    // // 스크롤 중에도 계속해서 현재 마우스 포인터가 위치하는 지점에 대한 X 좌표를 nowX 변수에 저장하면서, 시작 지점이 저장된 nowX와의 값을 차를 요소의 translateX 속성 값으로 사용
    // // translateX의 값이 양수면 오른쪽으로, 음수면 왼쪽으로 이동
    // const onScrollMove = (e) => {
    //     nowX = getClientX(e);
    //     setTranslateX(boxX + nowX - startX);
    // };  // boxX 변수는 최초 스크롤 시에는 필요 없지만, 요소를 이동한 후의 두 번째 스크롤부터 필요
    //     // boxX 변수에는 요소의 treanslateX 값이 저장되어 있으며, 스크롤 종료 이벤트 함수 안에서 할당
    //     // 만약 이 값을 함께 계산하지 않는다면, 요소가 다음과 같이 매 순간 최초 위치(translateX: 0)에서 시작됨



    // //https://nohack.tistory.com/123










    ////////////////////////////////////////////////////
});