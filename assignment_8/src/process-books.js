
jQuery (function() {
  $(".pb-1").on("click", function() {
    let pb1 = '<div class = "pdf-file"><iframe src="media/p1-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    $(".window-main-row").html(pb1);
    $(".back-button").css('visibility','visible');
  })
  $(".pb-2").on("click", function() {
    let pb2 = '<div class = "pdf-file"><iframe src="media/p2-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    $(".window-main-row").html(pb2);
    $(".back-button").css('visibility','visible');
  })
  $(".pb-3").on("click", function() {
    let pb3 = '<div class = "pdf-file"><iframe src="media/p3-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    $(".window-main-row").html(pb3);
    $(".back-button").css('visibility','visible');
  })
})