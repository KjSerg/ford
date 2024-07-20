
export default function tabs() {
    $(document).on('click', '.present-item', function (e) {
        e.preventDefault();
        const $t = $(this);
        const isActive = $t.hasClass('active');
        const href = $t.attr('href');
        if (isActive) return;
        $(document).find('.present-item').removeClass('active');
        $(document).find('.present-content__item').removeClass('active');
        $t.addClass('active');
        $(document).find( href).addClass('active');
    });
}