$(document).ready(function () {
	//문서 로딩시 첫번째 본문에 클래스명 추가하여 텍스트 애니메이션 시작됨
	setTimeout(function () {
		$('#content1').addClass('on');
	}, 300);

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

