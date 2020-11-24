`
<div class = "window">
        <div class="window-row">
          Process Books
          <button id = "pb-back-button" class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">3837.38 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
            <div class = "pb pb-1" style = "object-fit: cover;">
              <img class = "pop-up-image" src = "images/p1-pb.PNG" alt = "Process Book 1">
              <h5 class = "pop-up-text">UI Website Redesign</h5>
            </div>
            <div class = "pb pb-2">
              <img class = "pop-up-image" src = "images/p2-pb.PNG" alt = "Process Book 2">
              <h5 class = "pop-up-text">Lamp Control Redesign</h5>
            </div>
            <div class = "pb pb-3">
              <img class = "pop-up-image" src = "images/p3-pb.PNG" alt = "Process Book 3">
              <h5 class = "pop-up-text">Adidas Dashboard Design</h5>
            </div>
          </div>
        </div>
</div>
      <script>
        jQuery (function() {
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
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
          $("#pb-back-button").on("click", function() {
          	let back = '<div class = "window"><div class="window-row">Process Books<button id = "pb-back-button" class = "back-button" style = "float: left"><</button><button class = "exit-button" style = "float: right">X</button></div><div class="window-row" style = "width: 100%"><span style = "float: left">3 items</span><span style = "float: right">3837.38 mb available</span></div><div class="window-row" style = "padding: 0; padding-bottom: 52px"><div class="window-main-row"><div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "images/p1-pb.PNG" alt = "Process Book 1"><h5 class = "pop-up-text">UI Website Redesign</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "images/p2-pb.PNG" alt = "Process Book 2"><h5 class = "pop-up-text">Lamp Control Redesign</h5></div><div class = "pb pb-3"><img class = "pop-up-image" src = "images/p3-pb.PNG" alt = "Process Book 3"><h5 class = "pop-up-text">Adidas Dashboard Design</h5></div></div></div></div><script>jQuery (function() {$(".exit-button").on("click", function() {let noo = '';$("#popup-window").html(noo);$(".main-window-mobile").html(noo);)$(".pb-1").on("click", function() {let pb1 = '<div class = "pdf-file"><iframe src="media/p1-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';$(".window-main-row").html(pb1);$(".back-button").css('visibility','visible');})$(".pb-2").on("click", function() {let pb2 = '<div class = "pdf-file"><iframe src="media/p2-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';$(".window-main-row").html(pb2);$(".back-button").css('visibility','visible');})$(".pb-3").on("click", function() {let pb3 = '<div class = "pdf-file"><iframe src="media/p3-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';$(".window-main-row").html(pb3);$(".back-button").css('visibility','visible');})';
          	$("#popup-window").html(back);
          })
        })
      </script>
`
