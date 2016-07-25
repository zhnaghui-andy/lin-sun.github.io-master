$(function(){
  var PH=$(window).height();
  var ZH=$('.banner').height();
  $('.section').css({'minHeight':PH});
  $('.banner').css('top',(PH-ZH)/2);

  var off=[];
  $('.section').each(function (i,v) {
     off.push($(v).offset().top);
  })
  $('#menu li').on('click',function () {
    var top=off[$(this).index()];
    $('body').animate({'scrollTop':top},400);
    $('#menu li').removeClass('active');
    $(this).addClass('active');
  })

  $(window).on('scroll',function () {
    var top=$(this).scrollTop();
    for(var i=0;i<off.length;i++){
      if(top>=off[i]){
        $('#menu li').removeClass('active');
        $('#menu li:nth-child('+(i+1)+')').addClass('active');
        $('.section').removeClass('active');
        $('.section:nth-child('+(i+1)+')').addClass('active');
      }
    }
  })
})
