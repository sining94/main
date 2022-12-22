let body = document.querySelector('body');

let mainSwiper = (function () {
    let bullet = ['1', '2', '3', '4'];
    let swiper = new Swiper('.section_1 .swiper-container', {
        speed: 500,
        direction: 'vertical',
        mousewheel: true,
        effect: "creative",
        creativeEffect: {
            prev: {

                translate: [0, 0, -1],
            },
            next: {
                translate: [0, "100%", 0],
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },
        on: {
            reachEnd: function () {
                swiper.mousewheel.disable();
            }
        }

    });

    window.addEventListener('wheel', function (event) {
        if (event.deltaY < 0) {
            swiper.mousewheel.enable();
        } else if (event.deltaY > 0) {
        }
    });
})();


let lee = document.querySelectorAll('.section_1 .swiper-slide');

console.log(lee.length)

