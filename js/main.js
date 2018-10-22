$(function(){

  $(window).scroll(function(){
    scrollTop=$(window).scrollTop();
    page1=$('#page1').offset().top;
    page2=$('#page2').offset().top;
    page3=$('#page3').offset().top;
    page4=$('#page4').offset().top;
    if(scrollTop >= page2){
      $('nav').show();
    }else{
      $('nav').hide();
    }

    if(scrollTop >= page1 && scrollTop < page2){
      index=0;
    }else if(scrollTop >= page2 && scrollTop < page3){
      index=1;
    }else if(scrollTop >= page3 && scrollTop < page4){
      index=2;
    }else if(scrollTop >= page4){
      index=3;
    }
    $('nav a').removeClass().eq(index).addClass('active');
  })
  $(window).trigger('scroll');

  $('nav a').click(function(e){
    e.preventDefault();
    id=$(this).attr('href');
    $('html').stop().animate({
      scrollTop:$(id).offset().top
    })
  })

  $(window).resize(function(){
    //page2 .wrap의 높이구하기
    var wH=$(window).height();
    $('.swiper-container').height(wH-0);
    var h2H=$('.page2 h2').outerHeight(true);
    var rowH=$('.page2 .row').outerHeight(true);
    console.log(h2H, rowH, wH);
    $('.page2 .text_area').height(wH-h2H-rowH-0);
  })
  $(window).trigger('resize');


  var swiper = new Swiper('.swiper-container',{
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      // when window width is <= 320px
      991: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  })
  $('skill').each(function(index){
      var position=$(this).offset().top;
      var scroll=$(window).scrollTop();
      if(scroll > position){
      if(index==0){//About영역
        $(this).addClass('shown');
      }else{//Skills영역
        $(this).removeClass('shown');
      }
    }
  })
});
