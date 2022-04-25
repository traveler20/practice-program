(function($){
  // 画面が開いた瞬間動作する
  $(document).ready(function(){
    $(".tasks").sortable({
      connectWith: ".tasks",
      placeholder: "on_tasks"
    });
  });
})(jQuery);
