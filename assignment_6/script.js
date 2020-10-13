function chooseglaze() {
	var g = document.getElementById("ogglaze").value;
	if (g == "no"){
		document.getElementById("oglarge").src = 'images/no.jpeg';
		document.getElementById("og1").src = 'images/pears.jpeg';
		document.getElementById("og2").src = 'images/checker.jpeg';
		document.getElementById("og3").src = 'images/bite.jpeg';
	}
	if (g == "sm") {
		document.getElementById("oglarge").src = 'images/sm.jpeg';
		document.getElementById("og1").src = 'images/pears.jpeg';
		document.getElementById("og2").src = 'images/checker.jpeg';
		document.getElementById("og3").src = 'images/bite.jpeg';
	}
	if (g == "vm") {
		document.getElementById("oglarge").src = 'images/glaze.jpeg';
		document.getElementById("og1").src = 'images/pears.jpeg';
		document.getElementById("og2").src = 'images/checker.jpeg';
		document.getElementById("og3").src = 'images/bite.jpeg';
	}
	if (g == "dc") {
		document.getElementById("oglarge").src = 'images/dc.jpeg';
		document.getElementById("og1").src = 'images/pears.jpeg';
		document.getElementById("og2").src = 'images/checker.jpeg';
		document.getElementById("og3").src = 'images/bite.jpeg';
	}
}

var q = 0

function choosequantity(){
	q=parseInt(q)+parseInt(1);
	document.getElementById("sc#").innerHTML = q;
	if ((q & 1) == 0 ) {
		document.getElementById("atc").style.background = "rgba(177, 131, 119, 1)";
	    document.getElementById("scb").style.color = "rgba(177, 131, 119, 1)";
	}
	else {
		document.getElementById("atc").style.background = "rgba(127, 86, 40, 1)";
	    document.getElementById("scb").style.color = "rgba(127, 86, 40, 1)";
	}
}