function gnbMenuFnc() {
    $('.btn-allmenu').on('click', function(e) {
        $($(this).attr('href')).addClass('on');
        e.preventDefault();
    });
    $('.btn-gnb-close a').on('click', function(e) {
        $('#gnb-outer-zone').removeClass('on');
        e.preventDefault();
    });
    $('#gnb-wrap > li > a').on('click', function(e) {
        var ts = $(this);

        ts.parent().siblings().find('>a').filter('.on').next().slideUp(500, function() {
            $(this).prev().removeClass('on');
        });
        if ($(this).next().is(':hidden')) {
            $(this).stop(true).addClass('on').next().slideDown(500);
        } else {
            $(this).next().slideUp(500, function() {
                ts.removeClass('on');
            });
        }

        e.preventDefault();
    });
}
$(document).ready(function() {
    gnbMenuFnc();
    $('.main-visual-slide-1').slick({
        dots: true
    });
});