
// initialize jQuery
jQuery (function() {
	// for the process book folder, on click, change the html of the popup window

    // here's the html for the middle row, including 3 divs, 1 for each process book, with the correct image and item title
    let pb0 = `<div class = "pb pb-1" style = "object-fit: contain;"><img class = "pop-up-image" src = "assets/images/p1-pb.PNG" alt = "Process Book 1"><h5 class = "pop-up-text">UI Website Redesign</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "assets/images/p2-pb.PNG" alt = "Process Book 2"><h5 class = "pop-up-text">Lamp Control Redesign</h5></div><div class = "pb pb-3"><img class = "pop-up-image" src = "assets/images/p3-pb.PNG" alt = "Process Book 3"><h5 class = "pop-up-text">Adidas Dashboard Design</h5></div>`;

  // set a variable for the html to add to the empty divs on the home.html page, comments inside are html-style
	let pw = `
		<div class = "window">
        <div class="window-row window-top">
          <!-- title and buttons -->
          CMU Design Process Books
          <button id = "pb-back-button" class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <div class="window-row" style = "width: 100%">
        <!-- second row with extra information -->
          <span style = "float: left">3 items</span>
          <span style = "float: right">3837.38 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          <!-- add the first html variable with the images and text -->
            ${pb0}
          </div>
        </div>
      </div>
      <!-- add on click listeners -->
      <script>
        jQuery (function() {
          // if the "X" button is clicked, remove the html from the divs
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
          // if the back button is pressed, go back to all the items
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb0}');
          	$(".back-button").css('visibility','hidden');
            // re-add the on click listeners
          	  $(".pb-1").on("click", function() {
      			    let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p1-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
      			    $(".window-main-row").html(pb1);
      			    $(".back-button").css('visibility','visible');
      			  })
      			  $(".pb-2").on("click", function() {
      			    let pb2 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p2-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
      			    $(".window-main-row").html(pb2);
      			    $(".back-button").css('visibility','visible');
      			  })
      			  $(".pb-3").on("click", function() {
      			    let pb3 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p3-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
      			    $(".window-main-row").html(pb3);
      			    $(".back-button").css('visibility','visible');
      			  })
          })
          // on click listener for the first item, iframes should open a pdf viewer
          $(".pb-1").on("click", function() {
    		    let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p1-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    		    $(".window-main-row").html(pb1);
    		    $(".back-button").css('visibility','visible');
    		  })
          // on click listener for the second item
    		  $(".pb-2").on("click", function() {
    		    let pb2 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p2-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    		    $(".window-main-row").html(pb2);
    		    $(".back-button").css('visibility','visible');
    		  })
          // on click listener for the third item
    		  $(".pb-3").on("click", function() {
    		    let pb3 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/p3-pb.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    		    $(".window-main-row").html(pb3);
    		    $(".back-button").css('visibility','visible');
    		  })
        })
      </script>
    `;
  // when the process book folder is clicked, add the html to the desktop and mobile divs
	$("#process-books").on("click",function pb() {
		// html for the popup window here
		// change the html here
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
    // add an invisible div so the user can click out of the popups
    $(".invisible-div").css('z-index', '3');
    $(".invisible-div").css('width','100vw');
    $(".invisible-div").css('height','100vh');
	})

	// for the coding projects folder, on click, change the html of the popup window
	$("#coding-projects").on("click",function cp() {
    // here's the html for the middle row, including 2 divs, 1 for each coding project, with the correct image and item title
		let pb00 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "assets/images/battleship.PNG" alt = "Battleship Code"><h5 class = "pop-up-text">Play Battleship With R!</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "assets/images/R-logo.png" alt = "R Logo for Self-Written Package"><h5 class = "pop-up-text">Self-Written R Package</h5></div>`;

    // set a variable for the html to add to the empty divs on the home.html page
		let pw = `
		<div class = "window">
        <div class="window-row">
        <!-- title and buttons -->
          UCLA Coding Projects
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <!-- extra information, second row -->
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">2 items</span>
          <span style = "float: right">219.72 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          <!-- call the variable made above -->
          	${pb00}
          </div>
        </div>
      </div>
      <script>
        jQuery (function() {
          // when the "X" button is clicked, remove the html
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
          // when the "<" button is clicked, refresh the html and readd the onclick listeners
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb00}');
          	$(".back-button").css('visibility','hidden');
          	  $(".pb-1").on("click", function() {
  	            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/play_bs.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb1);
  	            $(".back-button").css('visibility','visible');
  	          })
  	          $(".pb-2").on("click", function() {
  	            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/r-package.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb2);
  	            $(".back-button").css('visibility','visible');
  	          })
          })
          // regular on click listeners, one for each coding project's pdf iframe viewer
          $(".pb-1").on("click", function() {
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/play_bs.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src="assets/media/r-package.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here for desktop and mobile
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
    // add invisible div to click out as well
    $(".invisible-div").css('z-index', '3');
    $(".invisible-div").css('width','100vw');
    $(".invisible-div").css('height','100vh');
	})

	// for the video projects folder, on click, change the html of the popup window
	$("#video-edits").on("click",function vp() {
		// html for the popup window here

    // here's the html for the middle row, including 3 divs, 1 for each video project, with the correct image and item title
		let pb000 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "assets/images/sh.PNG" alt = "Shanghai Thumbnail"><h5 class = "pop-up-text">Welcome to Shanghai!</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "assets/images/hk.PNG" alt = "Hong Kong Thumbnail"><h5 class = "pop-up-text">Welcome to Hong Kong!</h5></div><div class = "pb pb-3"><img class = "pop-up-image" src = "assets/images/p3p.PNG" alt = "Pitch Thumbnail"><h5 class = "pop-up-text">CMU Adidas Dashboard Pitch</h5></div>`;

    // set a variable for the html to add to the empty divs on the home.html page
		let pw = `
		<div class = "window">
        <div class="window-row">
        <!-- title and buttons -->
          Video Editing & Pitches
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <!-- second row's extra information -->
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">715.24 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          <!-- add the html from the variable set above -->
            ${pb000}
          </div>
        </div>
      </div>
      <script>
        jQuery (function() {
          // "X" button removes the html
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
          // "<" button readds the image/title html and the onclick listeners
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb000}');
          	$(".back-button").css('visibility','hidden');
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
  	            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src="https://www.youtube.com/embed/UfDXdAmrheA" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb3);
  	            $(".back-button").css('visibility','visible');
  	          })
          })
          // regular onclick listeners, each one for a unique folder "item" and opens the correct pdf viewer
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
            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src="https://www.youtube.com/embed/UfDXdAmrheA" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb3);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here for desktop and mobile
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
    // add invisible div to click out of the popup
    $(".invisible-div").css('z-index', '3');
    $(".invisible-div").css('width','100vw');
    $(".invisible-div").css('height','100vh');
	})

	// for the research experience folder, on click, change the html of the popup window
	$("#research-projects").on("click",function rp() {
		// html for the popup window here

    // here's the html for the middle row, including 2 divs, 1 for each research project, with the correct image and item title
		let pb0000 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "assets/images/twitch.PNG" alt = "Twitch Logo"><h5 class = "pop-up-text">CMU Twitch Independent Study</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "assets/images/cfa.PNG" alt = "Chick-Fil-A Logo"><h5 class = "pop-up-text">UCLA Chick-Fil-A Stats Project</h5></div>`;

    // set a variable for the html to add to the empty divs on the home.html page
		let pw = `
		<div class = "window">
        <div class="window-row">
        <!-- title and buttons -->
          Research Experience
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <!-- second row extra information -->
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">2 items</span>
          <span style = "float: right">1836.10 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          <!-- add the html from the outside variable initialized above -->
            ${pb0000}
          </div>
        </div>
      </div>
      <script>
        jQuery (function() {
          // remove html when the exit button is clicked
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
          // to go back, click the button and the html image and title is readded as well as their onclick listeners
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb0000}');
          	$(".back-button").css('visibility','hidden');
          	  $(".pb-1").on("click", function() {
  	            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/twitch.pdf" width= "500" height= "300" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
  	            $(".window-main-row").html(pb1);
  	            $(".back-button").css('visibility','visible');
  	          })
  	          $(".pb-2").on("click", function() {
  	            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/cfa.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb2);
  	            $(".back-button").css('visibility','visible');
  	          })
          })
          // regular on click listeners, one for each research project and the corresponding pdf viewer iframe
          $(".pb-1").on("click", function() {
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/twitch.pdf" width= "500" height= "300" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/cfa.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here for desktop and mobile
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
    // add invisible div to click out of the popup windows
    $(".invisible-div").css('z-index', '3');
    $(".invisible-div").css('width','100vw');
    $(".invisible-div").css('height','100vh');
	})

	// for the advertising plans book folder, on click, change the html of the popup window
	$("#advertising-books").on("click",function ap() {
		// html for the popup window here

    // here's the html for the middle row, including 3 divs, 1 for each advertising project's plans book, with the correct image and item title
		let pb00000 = `<div class = "pb pb-1" style = "object-fit: cover;"><img class = "pop-up-image" src = "assets/images/2018-at.PNG" alt = "Ocean Spray 2018"><h5 class = "pop-up-text">18&#39; 1st Place Ocean Spray</h5></div><div class = "pb pb-2"><img class = "pop-up-image" src = "assets/images/2019-at.PNG" alt = "Wienerschnitzel 2019"><h5 class = "pop-up-text">19&#39; 1st Place Wienerschnitzel</h5></div><div class = "pb pb-3"><img class = "pop-up-image" src = "assets/images/2020-at.PNG" alt = "Adobe 2020"><h5 class = "pop-up-text">20&#39; 2nd Place Adobe</h5></div>`;

// set a variable for the html to add to the empty divs on the home.html page
		let pw = `
		<div class = "window">
        <div class="window-row">
        <!-- title and buttons -->
          Advertising Plans Books
          <button class = "back-button" style = "float: left"><</button>
          <button class = "exit-button" style = "float: right">X</button>
        </div>
        <!-- second row extra information -->
        <div class="window-row" style = "width: 100%">
          <span style = "float: left">3 items</span>
          <span style = "float: right">491.02 mb available</span>
        </div>
        <div class="window-row" style = "padding: 0; padding-bottom: 52px">
          <div class="window-main-row">
          <!-- add the folder items using the variable above -->
          	${pb00000}
          </div>
        </div>
      </div>
      <script>
        jQuery (function() {
          // to remove the popup window
          $(".exit-button").on("click", function() {
            let noo = '';
            $("#popup-window").html(noo);
            $(".main-window-mobile").html(noo);
          })
          // to go back to the folder items, readd the old html variable and the on click listeners
          $(".back-button").on("click", function() {
          	$(".window-main-row").html('${pb00000}');
          	$(".back-button").css('visibility','hidden');
          	  $(".pb-1").on("click", function() {
  	            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2018-at.pdf" width= "500" height= "300" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
  	            $(".window-main-row").html(pb1);
  	            $(".back-button").css('visibility','visible');
  	          })
  	          $(".pb-2").on("click", function() {
  	            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2019-at.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb2);
  	            $(".back-button").css('visibility','visible');
  	          })
  	          $(".pb-3").on("click", function() {
  	            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2020-at.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
  	            $(".window-main-row").html(pb3);
  	            $(".back-button").css('visibility','visible');
  	          })
          })
          // regular on click listeners, one for each plans book that opens an iframe with a pdf
           $(".pb-1").on("click", function() {
            let pb1 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2018-at.pdf" width= "500" height= "300" style = "overflow: auto">Coming Soon: December 2020!</iframe></div>';
            $(".window-main-row").html(pb1);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-2").on("click", function() {
            let pb2 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2019-at.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb2);
            $(".back-button").css('visibility','visible');
          })
          $(".pb-3").on("click", function() {
            let pb3 = '<div class = "pdf-file"><iframe class = "frames" src = "assets/media/2020-at.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
            $(".window-main-row").html(pb3);
            $(".back-button").css('visibility','visible');
          })
        })
      </script>
      `;
		// change the html here for desktop and mobile
		$("#popup-window").html(pw);
		$(".main-window-mobile").html(pw);
    // add an invisible div to click out of the popup window without using the exit button
    $(".invisible-div").css('z-index', '3');
    $(".invisible-div").css('width','100vw');
    $(".invisible-div").css('height','100vh');
	})
  
  // when click on the about-me button on the bottom left
	$("#about-me-button").on("click",function() {

    // set a variable to add the labels (resume, contact me, and fun facts!) in a popup div
		let am = `
		<div id = 'am-resume' class = "about-me-labels" style = "cursor: pointer;">Resume</div>
    <div id = 'am-contact' class = "about-me-labels" style = "cursor: pointer;">Contact Me</div>
    <div id = 'am-fun' class = "about-me-labels" style = "cursor: pointer;">Fun Facts!</div>

      <!-- add on click listeners to open another popup div with the corresponding information -->
    	<script>
        // show an iframe with a pdf viewer of my resume
    		$("#am-resume").on("click", function() {
    			let amr = '<div class = "about-me-file"><iframe class = "frames" src="assets/media/resume.pdf" width= "500" height= "300" style = "overflow: auto"></iframe></div>';
    			$(".about-me-main").html(amr);
    		})
        // show a list of contact information with links to my linkedin, email, and instagram
    		$("#am-contact").on("click", function() {
    			let amc = '<div class = "about-me-file"><h3 class = "am-header" style = "color: rgba(66, 129, 164, 1);text-decoration: underline;">Contact Me</h3><br><a href = "https://www.linkedin.com/in/cydney-vicentina-000236159/"><h4 class = "am-header">Find Me: <u>On LinkedIn</u></h4></a><br><h4 class = "am-header">Phone Me: (510) 931 0938</h4><br><a href = "mailto:cjvicentinacmu@gmail.com"><h4 class = "am-header">Email Me: <u>cjvicentinacmu@gmail.com</u></h4></a><br><a href = "https://www.instagram.com/cydneyjv/"><h4 class = "am-header">Follow Me: <u>@cydneyjv</u> on Instagram</h4></a></div>';
    			$(".about-me-main").html(amc);
    		})
        //  show a list of fun facts
    		$("#am-fun").on("click", function() {
    			let amf = '<div class = "about-me-file"><h3 class = "am-header" style = "color: rgba(66, 129, 164, 1);text-decoration: underline">Fun Facts About Me!</h3><br><h4 class = "am-header">I love sudoku and crossword puzzles!</h4><br><h4 class = "am-header">I have recently become obsessed with Valorant (let&#39;s go TSM!).</h4><br><h4 class = "am-header">I recently finished all 5 seasons of Lucifer.</h4><br><h4 class = "am-header">In quarantine, I&#39;ve baking more. My favorites have been green onion pancakes and ciabatta bread!</h4></div>';
    			$(".about-me-main").html(amf);
    		})
    	</script>
		`;
    // add this html variable to the empty div on the home.html page
		$(".about-me-tabs").html(am);
    // make sure the invisible div (to click out) is behind the about me main content popup and the about me tabs
		$(".about-me-tabs").css('z-index', '101');
		$(".about-me-main").css('z-index', '100');
		$(".invisible-div").css('z-index', '99');
    // make sure the invisible div spans the entire screen
		$(".invisible-div").css('width','100vw');
		$(".invisible-div").css('height','100vh');
	})

  // for the invisible div, add an on click listener
	$(".invisible-div").on("click", function() {
		let ind = '';
    // set the about me tabs and main content popup to be an empty string (another way to hide them)
		$(".about-me-tabs").html(ind);
		$(".about-me-main").html(ind);
    // also hide the main content
		$("#am-resume").html(ind);
		$("#am-contact").html(ind);
		$("#am-fun").html(ind);
    // clicking the invisible div also "exits" out of the main folder popup on desktop and mobile (another way to exit or hit the 'X' button)
    $("#popup-window").html(ind);
    $(".main-window-mobile").html(ind);
    // make sure to lower the order of the about-me-main div to avoid clashing with the user's clicks on the home page folders
		$(".about-me-main").css('z-index', '-1');
    // after clicking it, set itself to take up no space to avoid any unwanted clicks
		$(".invisible-div").css('width','0');
		$(".invisible-div").css('height','0');
	})

  // for the sprite, wait for a click
	$("#sprite").on("click",function() {
    // then toggle between waving from the front view to the left view
		$(".sprite-sheet").toggleClass("wave-front wave-left");
    // also toggle between two texts (one welcome, one directional)
		var text = $('.sprite-saying').text();
    	$('.sprite-saying').text(
        text == "Welcome to Cydney Vicentina's Portfolio!" ? "Click on a folder icon to begin!" : "Welcome to Cydney Vicentina's Portfolio!");
		})
})

    