$(function () {
    var i = 1;

    function slider() {
        var l = $(".fadeslider .slide").length;
        if (i == l) {
            i = 0;
        }
        $(".fadeslider .slide:nth-child(" + i + ")").fadeOut(1000);
        $(".fadeslider .slide").removeClass('active');
        i++;
        $(".fadeslider .slide:nth-child(" + i + ")").fadeIn(500);
        $(".fadeslider .slide:nth-child(" + i + ")").addClass('active');
        if (i >= l) {
            i = 0;
        }
    }

    function sliderTo(index) {
//clearInterval(timer);
        var l = $(".fadeslider .slide").length;
//        $(".fadeslider .slide").fadeOut(2000);
//        $(".fadeslider .slide:nth-child(" + index.1 + ")").fadeIn(2000);
        $(".fadeslider .slide").removeClass('active');
        i = index;
//        $(".fadeslider .slide:nth-child(" + i + ")").fadeIn(2000);
        $(".fadeslider .slide:nth-child(" + i + ")").addClass('active');
// timer = setInterval(slider, 500)
    }

    function sliderback() {
        var l = $(".fadeslider .slide").length;
        if (i == 0) {
            i = l + 1;
        }
        $(".fadeslider .slide").fadeOut(500);
        $(".slidelist div").removeClass("active");
        i--;
        if (i <= 0) {
            i = l;
        }
        $(".fadeslider .slide:nth-child(" + i + ")").fadeIn(500);
        $(".slidelist div:nth-child(" + i + ")").addClass("active");
    }
    $(".slidenext").click(function () {
        slider();
    });
    $(".slideback").click(function () {
        sliderback();
    });
// var timer = setInterval(slider, 500);
    $('.slideback,.slidenext').hover(function (ev) {
        clearInterval(timer);
    }, function (ev) {
        timer = setInterval(slider, 500);
    });
    $('#trigger-image-1').click(function () {
        sliderTo(1);
    })
    $('#trigger-image-2').click(function () {
        sliderTo(2);
    })
    $('#trigger-image-3').click(function () {
        sliderTo(3)
    })
})