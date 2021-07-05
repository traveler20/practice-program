$(function(){
  // 「.social-icon」にマウスが乗ったときに
  $('.social-icon').hover(
    function(){
      // そのfont-sizeを30pxに変更し、
      $(this).animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      // 離れたときにはfont-sizeを24pxにしてください
      $(this).animate({
        'font-size':'24px'
      }, 300);
    }
  );
  
});