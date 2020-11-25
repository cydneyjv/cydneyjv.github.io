
// initialize jQuery
jQuery (function() {
	// for the process book folder, on click, change the html of the popup window

    let pb0 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "images/p1-pb.PNG" alt = "Process Book 1"><h5 class = "pop-up-text">UI Website Redesign</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "images/p2-pb.PNG" alt = "Process Book 2"><h5 class = "pop-up-text">Lamp Control Redesign</h5></div><div class = "pb pb-3"><img class = "pop-up-image" src = "images/p3-pb.PNG" alt = "Process Book 3"><h5 class = "pop-up-text">Adidas Dashboard Design</h5></div>`;

	let pw = `
		<div class = "window">
        <div class="window-row window-top">
          CMU Process Books
          <button id = "pb-back-button" class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">3837.38 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
            ${pb0}
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
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb0}');
          	$(".back-button").css('visibility','hidden');
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
      </script>
    `;

	$("#process-books").on("click",function pb() {
		// html for the popup window here
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
	})



	// for the coding projects folder, on click, change the html of the popup window
	$("#coding-projects").on("click",function cp() {
		// html for the popup window here
		let pb00 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "images/battleship.PNG" alt = "Battleship Code"><h5 class = "pop-up-text">Play Battleship With R!</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "images/R-logo.png" alt = "R Logo for Self-Written Package"><h5 class = "pop-up-text">Self-Written R Package</h5></div>`;

		let pw = `
		<div class = "window">
        <div class="window-row">
          UCLA Coding Projects
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">2 items</span>
          <span style = "float: right">219.72 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          	${pb00}
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
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="media/play_bs.pdf" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src="media/r-package.pdf" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb00}');
          	$(".back-button").css('visibility','hidden');
          })
        })
      </script>
      `;
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
	})

	// for the video projects folder, on click, change the html of the popup window
	$("#video-edits").on("click",function vp() {
		// html for the popup window here
		let pw = `
		<div class = "window">
        <div class="window-row">
          Video Editing & Pitches
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">715.24 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
            <div class = "pb pb-1" style = "object-fit: cover;">
              <img class = "pop-up-image" src = "images/sh.PNG" alt = "Shanghai Thumbnail">
              <h5 class = "pop-up-text">Welcome to Shanghai!</h5>
            </div>
            <div class = "pb pb-2">
              <img class = "pop-up-image" src = "images/hk.png" alt = "Hong Kong Thumbnail">
              <h5 class = "pop-up-text">Welcome to Hong Kong!</h5>
            </div>
            <div class = "pb pb-3">
              <img class = "pop-up-image" src = "images/p3p.png" alt = "Pitch Thumbnail">
              <h5 class = "pop-up-text">CMU Adidas Dashboard Pitch</h5>
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
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="https://www.youtube.com/embed/JPPKCIDQrHA" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "https://www.youtube.com/embed/y9-hdJ0k3BI" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-3").on("click", function() {
            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src="https://drive.google.com/file/d/1PA8N4_YSIoPmLnDP-30U7sM3oKFUiZnI/preview" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb3);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
	})

	// for the research experience folder, on click, change the html of the popup window
	$("#research-projects").on("click",function vp() {
		// html for the popup window here
		let pw = `
		<div class = "window">
        <div class="window-row">
          Research Experience
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">2 items</span>
          <span style = "float: right">1836.10 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
            <div class = "pb pb-1" style = "object-fit: cover;">
              <img class = "pop-up-image" src = "images/twitch.PNG" alt = "Twitch Logo">
              <h5 class = "pop-up-text">CMU Twitch Independent Study</h5>
            </div>
            <div class = "pb pb-2">
              <img class = "pop-up-image" src = "images/cfa.PNG" alt = "Chick-Fil-A Logo">
              <h5 class = "pop-up-text">UCLA Chick-Fil-A Stats Project</h5>
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
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "media/twitch.pdf" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "media/cfa.pdf" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
	})

	// for the advertising plans book folder, on click, change the html of the popup window
	$("#advertising-books").on("click",function vp() {
		// html for the popup window here
		let pw = `
		<div class = "window">
        <div class="window-row">
          Advertising Plans Books
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">491.02 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
            <div class = "pb pb-1" style = "object-fit: cover">
              <img class = "pop-up-image" src = "images/2018-at.PNG" alt = "Ocean Spray 2018">
              <h5 class = "pop-up-text">18' 1st Place Ocean Spray </h5>
            </div>
            <div class = "pb pb-2">
              <img class = "pop-up-image" src = "images/2019-at.PNG" alt = "Wienerschnitzel 2019">
              <h5 class = "pop-up-text" style = "font: 30px">19' 1st Place Wienerschnitzel</h5>
            </div>
            <div class = "pb pb-3">
              <img class = "pop-up-image" src = "images/2020-at.PNG" alt = "Adobe 2020">
              <h5 class = "pop-up-text">20' 2nd Place Adobe</h5>
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
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "media/2018-at.pdf" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "media/2019-at.pdf" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-3").on("click", function() {
            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src = "media/2020-at.pdf" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb3);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
	})

	//$("#pb-back-button").on("click", function() {
	//	console.log("hello")
    //})
	$("#about-me-button").on("click",function() {
		let am = `
		<div id = 'am-resume' class = "about-me-labels" style = "cursor: pointer;">Resume</div>
    	<div id = 'am-contact' class = "about-me-labels" style = "cursor: pointer;">Contact Me</div>
    	<div id = 'am-fun' class = "about-me-labels" style = "cursor: pointer;">Fun Facts!</div>

    	<script>
    		$("#am-resume").on("click", function() {
    			let amr = '<div class = "about-me-file">hello resume</div>';
    			$(".about-me-main").html(amr);
    		})
    		$("#am-contact").on("click", function() {
    			let amc = '<div class = "about-me-file">hello contact</div>';
    			$(".about-me-main").html(amc);
    		})
    		$("#am-fun").on("click", function() {
    			let amf = '<div class = "about-me-file">hello fun</div>';
    			$(".about-me-main").html(amf);
    		})
    	</script>
		`;
		$(".about-me-tabs").html(am);
		$(".about-me-tabs").css('z-index', '101');
		$(".about-me-main").css('z-index', '100');
		$(".invisible-div").css('z-index', '99');
		$(".invisible-div").css('width','100vw');
		$(".invisible-div").css('height','100vh');
	})
	$(".invisible-div").on("click", function() {
		let ind = '';
		$(".about-me-tabs").html(ind);
		$(".about-me-main").html(ind);
		$("#am-resume").html(ind);
		$("#am-contact").html(ind);
		$("#am-fun").html(ind);
		$(".about-me-main").css('z-index', '0');
		$(".invisible-div").css('width','0');
		$(".invisible-div").css('height','0');
	})
	$("#sprite").on("click",function() {
		$(".sprite-sheet").toggleClass("wave-front wave-left");
		var text = $('.sprite-saying').text();
    	$('.sprite-saying').text(
        text == "Welcome to Cydney Vicentina's Portfolio!" ? "Click on a folder icon to begin!" : "Welcome to Cydney Vicentina's Portfolio!");
		})
})

    