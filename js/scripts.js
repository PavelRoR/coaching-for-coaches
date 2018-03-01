$(document).ready(function() {

    $(function() {
        $("#plan_tabs").tabs({
            show: {
                duration: 800
            }
        });
    });

    $('.button').click(function (e) {
    	e.preventDefault();
    	alert('Товар ещё не создан!');
    });

    /*Карусель отзывов*/
    $("#slider").owlCarousel({
        navigation: true,
        navigationText: ['←', '→'],
        slideSpeed: 300,
        goToFirst: true,
        goToFirstSpeed: 100,
        pagination: false,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });







    /*Конец документа*/
});