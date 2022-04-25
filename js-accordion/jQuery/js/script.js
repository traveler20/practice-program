$(function(){
  $('.ac-parent').each(function(){
    /*clickしたら関数実行する*/
    $(this).on('click',function(){
      $(this).toggleClass('on');
      /*hiddenされていたac-childクラスを表示*/
      $("+.ac-child",this).slideToggle();
      return false;
    });
  });
});
