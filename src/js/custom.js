

$('.slider_div').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots:false,
    nextArrow:"<img class='a-right control-c next slick-next' src='src/image/previous.png'>",
    prevArrow:"<img class='a-left control-c prev slick-prev' src='src/image/next.png'>"



  }
  );


  
$('.slider_div-s').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3
 



}
);




$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1202,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



var imgs = $('.slider img');
imgs.each(function(){
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});



$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});



