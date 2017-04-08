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

        var l = $(".fadeslider .slide").length;

        $(".fadeslider .slide").removeClass('active');
        i = index;

        $(".fadeslider .slide:nth-child(" + i + ")").addClass('active');

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

    $('.slideback,.slidenext').hover(function (ev) {
        clearInterval(timer);
    }, function (ev) {
        timer = setInterval(slider, 500);
    });
    $('#trigger-image-1').click(function () {
        $(".slidelist h3").removeClass("active");
        $(this).addClass("active");
        sliderTo(1);
    })
    $('#trigger-image-2').click(function () {
        $(".slidelist h3").removeClass("active");
        $(this).addClass("active");
        sliderTo(2);
    })
    $('#trigger-image-3').click(function () {
        $(".slidelist h3").removeClass("active");
        $(this).addClass("active");
        sliderTo(3)
    })
})