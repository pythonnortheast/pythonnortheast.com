$(window).on("resize", function(){
    $(".window-height").css("height", $(window).height() + "px");
}).trigger("resize");
