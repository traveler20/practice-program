(function($){

  $(document).ready(function(){

    /*変数の定義*/
    const thumbs = $(".thumb img");
    const top_images = $(".top img");

    thumbs.hover(function(){
      top_images.hide().eq(thumbs.index($(this))).show();
    });

  });

})(jQuery);
