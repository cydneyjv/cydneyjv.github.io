
// initialize jQuery
jQuery (function() {
	// for the process book folder, on click, change the html of the popup window
	$("#process-books").on("click",function() {
		// html for the popup window here
		let pw = `
		<div class = "window">
			<h1 class = "popup-text"> hello world! </h1>
		</div>`;
		// change the html here
		$("#popup-window").html(pw);
	})
})