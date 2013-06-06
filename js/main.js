$(document).ready(function () {

    var $mainnav = $('.main-nav'),
		$subnav = $('.dropdown01 ul, .dropdown02 ul'),
		$dropdown01 = $('.dropdown01');

    //main nav hover
    $mainnav.children('li').hover(function () {
        $(this).not('.active').addClass('color-fff');
        $(this).children('span').addClass('arrow-down-hover');
    }, function () {
        $(this).removeClass('color-fff');
        $(this).children('span').removeClass('arrow-down-hover');
    });


    //sub nav 
    $(document, $subnav).bind('click', function () {
        $subnav.addClass('hidden');
        $dropdown01.removeClass('bg-color02 color-000');
        $dropdown01.children('span').removeClass('arrow-down-active');
    });
    
    $subnav.addClass('hidden');
    
    $dropdown01.bind('click', function (event) {
    	event.stopPropagation();
        $(this).find('ul').removeClass('hidden');
        $(this).addClass('bg-color02 color-000').removeClass('color-fff').unbind('mouseenter');
        $(this).children('span').removeClass('arrow-down-hover').addClass('arrow-down-active');
    })

});