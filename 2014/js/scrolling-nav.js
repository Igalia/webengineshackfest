//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 170) {
        $(".navbar-fixed-top").removeClass("inner");
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-logo > img").css("display","block");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-fixed-top").addClass("inner");
        $(".navbar-logo > img").css("display","none");
    }
});







