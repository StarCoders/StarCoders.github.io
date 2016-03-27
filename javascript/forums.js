function post(){
  $(document).ready(function() {
    var name = $("input").val();
    var comment = $("textarea").val();
    $("button").click(function() {
      $("<p><strong>" + name "</strong> Said:<br>" + comment "</p>").insertAfter("p.null");
    })
  });
}
