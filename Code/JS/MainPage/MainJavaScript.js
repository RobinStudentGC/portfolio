$(document).ready(function () {
    $('body').css('overflow', 'hidden');
    $('.Global_Container').css('display', 'none');
    setTimeout(function () {
        $('.Global_Container').css('display', '');
        $('.loading').fadeOut(1000, function () {
            $(this).remove();
            // Enable scrolling
            $('body').css('overflow', '');
        });
    }, 1000);
});