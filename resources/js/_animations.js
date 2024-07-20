export function cloudShow() {
    $(document).ready(function () {
        setTimeout(function () {
            $(document).find('.main-promo__cloud').addClass('active');
        }, 3000);
    });
}

export function twinklingStars() {
    const $items = $(document).find('.decorative-stars svg path');
    if ($items.length === 0) return;
    let index = 0;
    const interval = setInterval(function () {
        $(document).find('.decorative-stars svg path').eq(index).addClass('animate');
        if ($items.length === $(document).find('.decorative-stars svg path.animate')) {
            clearInterval(interval);
        }
        index++;
    }, 400);
}

function setRandomStar(index) {
    if (!$(document).find('.decorative-stars svg path').eq(index).hasClass('animate')) {

    }
}

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
