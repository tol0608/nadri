$(function () {
    // $(".slide_img").slick({
    //     lazyLoad: 'ondemand', // ondemand progressive anticipated
    //     infinite: true
    // });
    $('.slide_img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    $(".sec2_img").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $(".sec3_insta").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".sec3_youtube").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".sec4_video").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $(".sec5_slide").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
})