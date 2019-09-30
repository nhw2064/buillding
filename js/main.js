$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrollT = $(this).scrollTop();
        console.log(scrollT)

        $('.cnt').each(function () {
            if (scrollT >= $(this).offset().top) {
                $(this).addClass('on').siblings().removeClass('on')
            }
        });
    });
    $('#header .open_btn').on('click', function(){
        $(this).next().show().stop().animate({right : 0});
    });
    $('#header .close_btn').on('click', function(){
        $(this).parent().stop().animate({right : -1260 }, function(){
            $(this).hide();
        });
    });
});