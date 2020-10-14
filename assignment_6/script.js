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

i = 0

function back(){
	i=parseInt(i)-parseInt(1);
	if (i == -1 || i==4){
		document.getElementById("cimg1").src = 'images/wal.jpeg';
		document.getElementById("cimg2").src = 'images/gf.jpeg';
		document.getElementById("cimg3").src = 'images/b.jpeg';
		document.getElementById("clab1").innerHTML = "Caramel Pecan";
		document.getElementById("clab2").innerHTML = "Original (G-F)";
		document.getElementById("clab3").innerHTML = "Blackberry";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-15px";
		document.getElementById("cdes1").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes2").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes3").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes1").style = "margin-left:20px;font-weight:normal";
		document.getElementById("cdes2").style = "font-weight:normal";
		document.getElementById("cdes3").style = "margin-right:-20px;font-weight:normal";
	}
	if (i == -2|| i==3){
		document.getElementById("cimg1").src = 'images/dc.jpeg';
		document.getElementById("cimg2").src = 'images/wal.jpeg';
		document.getElementById("cimg3").src = 'images/gf.jpeg';
		document.getElementById("clab1").innerHTML = "Pumpkin Spice";
		document.getElementById("clab2").innerHTML = "Caramel Pecan";
		document.getElementById("clab3").innerHTML = "Original (G-F)";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-30px";
		document.getElementById("cdes1").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes2").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes3").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes1").style = "margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "margin-right:-40px;font-weight:normal";
	}
	if (i == -3|| i==2){
		document.getElementById("cimg1").src = 'images/walnut.jpeg';
		document.getElementById("cimg2").src = 'images/dc.jpeg';
		document.getElementById("cimg3").src = 'images/wal.jpeg';
		document.getElementById("clab1").innerHTML = "Walnut";
		document.getElementById("clab2").innerHTML = "Pumpkin Spice";
		document.getElementById("clab3").innerHTML = "Caramel Pecan";
		document.getElementById("clab1").style = "margin-left:75px";
		document.getElementById("clab2").style = "margin-left:15px";
		document.getElementById("clab3").style = "margin-left:-35px;margin-right:20px";
		document.getElementById("cdes1").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes2").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes3").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes1").style = "margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:20px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:30px;font-weight:normal";
	}
	if (i == -4|| i==1){
		document.getElementById("cimg1").src = 'images/b.jpeg';
		document.getElementById("cimg2").src = 'images/walnut.jpeg';
		document.getElementById("cimg3").src = 'images/dc.jpeg';		
		document.getElementById("clab1").innerHTML = "Blackberry";
		document.getElementById("clab2").innerHTML = "Walnut";
		document.getElementById("clab3").innerHTML = "Pumpkin Spice";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:25px;margin-right:-30px";
		document.getElementById("clab3").style = "margin-left:15px;margin-right:-10px";
		document.getElementById("cdes1").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes2").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes3").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes1").style = "font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:15px;font-weight:normal";
	}
	if (i == -5|| i==0){
		document.getElementById("cimg1").src = 'images/gf.jpeg';
		document.getElementById("cimg2").src = 'images/b.jpeg';
		document.getElementById("cimg3").src = 'images/walnut.jpeg';		
		document.getElementById("clab1").innerHTML = "Original (G-F)";
		document.getElementById("clab2").innerHTML = "Blackberry";
		document.getElementById("clab3").innerHTML = "Walnut";
		document.getElementById("clab1").style = "margin-left:-5px";
		document.getElementById("clab2").style = "margin-left:5px";
		document.getElementById("clab3").style = "margin-left:5px";
		document.getElementById("cdes1").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes2").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes3").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes1").style = "font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:5px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:5px;font-weight:normal";
		i=0;
	}
}

function forward(){
	i=parseInt(i)+parseInt(1);
	if (i == 1 || i==-4){
		document.getElementById("cimg1").src = 'images/b.jpeg';
		document.getElementById("cimg2").src = 'images/walnut.jpeg';
		document.getElementById("cimg3").src = 'images/dc.jpeg';
		document.getElementById("clab1").innerHTML = "Blackberry";
		document.getElementById("clab2").innerHTML = "Walnut";
		document.getElementById("clab3").innerHTML = "Pumpkin Spice";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:25px;margin-right:-30px";
		document.getElementById("clab3").style = "margin-left:15px;margin-right:-10px";
		document.getElementById("cdes1").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes2").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes3").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes1").style = "font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:15px;font-weight:normal";
	}
	if (i == 2 || i==-3){
		document.getElementById("cimg1").src = 'images/walnut.jpeg';
		document.getElementById("cimg2").src = 'images/dc.jpeg';
		document.getElementById("cimg3").src = 'images/wal.jpeg';		
		document.getElementById("clab1").innerHTML = "Walnut";
		document.getElementById("clab2").innerHTML = "Pumpkin Spice";
		document.getElementById("clab3").innerHTML = "Caramel Pecan";
		document.getElementById("clab1").style = "margin-left:75px";
		document.getElementById("clab2").style = "margin-left:15px";
		document.getElementById("clab3").style = "margin-left:-35px;margin-right:20px";
		document.getElementById("cdes1").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes2").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes3").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes1").style = "margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:20px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:30px;font-weight:normal";

	}
	if (i == 3 || i==-2){
		document.getElementById("cimg1").src = 'images/dc.jpeg';
		document.getElementById("cimg2").src = 'images/wal.jpeg';
		document.getElementById("cimg3").src = 'images/gf.jpeg';		
		document.getElementById("clab1").innerHTML = "Pumpkin Spice";
		document.getElementById("clab2").innerHTML = "Caramel Pecan";
		document.getElementById("clab3").innerHTML = "Original (G-F)";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-30px";
		document.getElementById("cdes1").innerHTML = "A fall favorite, and<br>just spicy enough!"
		document.getElementById("cdes2").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes3").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes1").style = "margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "margin-right:-40px;font-weight:normal";
	}
	if (i == 4 || i==-1){
		document.getElementById("cimg1").src = 'images/wal.jpeg';
		document.getElementById("cimg2").src = 'images/gf.jpeg';
		document.getElementById("cimg3").src = 'images/b.jpeg';		
		document.getElementById("clab1").innerHTML = "Caramel Pecan";
		document.getElementById("clab2").innerHTML = "Original (G-F)";
		document.getElementById("clab3").innerHTML = "Blackberry";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-15px";
		document.getElementById("cdes1").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes2").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes3").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes1").style = "margin-left:20px;font-weight:normal";
		document.getElementById("cdes2").style = "font-weight:normal";
		document.getElementById("cdes3").style = "margin-right:-20px;font-weight:normal";
	}
	if (i == 5 || i==-5){
		document.getElementById("cimg1").src = 'images/gf.jpeg';
		document.getElementById("cimg2").src = 'images/b.jpeg';
		document.getElementById("cimg3").src = 'images/walnut.jpeg';		
		document.getElementById("clab1").innerHTML = "Original (G-F)";
		document.getElementById("clab2").innerHTML = "Blackberry";
		document.getElementById("clab3").innerHTML = "Walnut";
		document.getElementById("clab1").style = "margin-left:-5px";
		document.getElementById("clab2").style = "margin-left:5px";
		document.getElementById("clab3").style = "margin-left:5px";
		document.getElementById("cdes1").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes2").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes3").innerHTML = "People go nutty over<br>our walnut flavor!"
		document.getElementById("cdes1").style = "font-weight:normal";
		document.getElementById("cdes2").style = "margin-left:5px;font-weight:normal";
		document.getElementById("cdes3").style = "margin-left:5px;font-weight:normal";
		i=0;
	}
}