
$(function(){
    $("._d1997").click(function(e) {
        e.stopPropagation();
        $($(this).data("profile")).fadeToggle(140)
    })
    $('body,html').click(function(){
        
        $($("._d1997").data("profile")).fadeOut(140)
    })
    $($(this).data("profile")).click(function (e) {
        e.stopPropagation();
        
    })
})