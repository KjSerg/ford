export const burger = () => {
    const $doc = $(document);
    $doc.on('click', '.burger-js', function (e) {
        e.preventDefault();
        const $t = $(this);
        const isActive = $t.hasClass('active');
        const $menu = $doc.find($t.attr('data-target'));
        if ($menu.length === 0) return;
        if (isActive) {
            $t.removeClass('active');
            $menu.removeClass('active');
        } else {
            $t.addClass('active');
            $menu.addClass('active');
        }
    })
}