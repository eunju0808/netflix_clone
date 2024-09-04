$(function(){
    

    $(".list>li>a").click(function(){
        $(this).toggleClass('on').parent().siblings().find('a').removeClass('on')
        $(this).addClass("on")
        $(this).next().slideToggle().parent().siblings()
        .find('.depth2').slideUp();
        })

})