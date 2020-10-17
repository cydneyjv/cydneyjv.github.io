
// connected to productdetailpage(original).html

//changing images as you change the chosen glaze
function chooseglaze() {
	let g = document.getElementById("ogglaze").value;
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

let q = 0;

//change "add to cart" button and shopping cart icon as you press so it changes color (light or dark) and adds a counter to show how many items in cart (on the top right corner in the cart icon)
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

i = 0;

//carousel
function back(){
	// to keep track of location
	i=parseInt(i)-parseInt(1);
	if (i == -1 || i==4){
		// change images
		document.getElementById("cimg1").src = 'images/wal.jpeg';
		document.getElementById("cimg2").src = 'images/gf.jpeg';
		document.getElementById("cimg3").src = 'images/b.jpeg';
		// change title
		document.getElementById("clab1").innerHTML = "Caramel Pecan";
		document.getElementById("clab2").innerHTML = "Original (G-F)";
		document.getElementById("clab3").innerHTML = "Blackberry";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-15px";
		// change description
		document.getElementById("cdes1").innerHTML = "The perfect combo<br>of sweet and nutty!"
		document.getElementById("cdes2").innerHTML = "Our signature best seller,<br>without all the gluten!"
		document.getElementById("cdes3").innerHTML = "A fun, fruity flavor that<br>kids and adults love!"
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;font-weight:normal;margin-left:10px;margin-right:-20px";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px; margin-right:-30px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-right:-40px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:25px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		i=0;
	}
}


// to go forward instead of backwards
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
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:25px;font-weight:normal";

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
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-right:-40px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;font-weight:normal;margin-left:10px;margin-right:-20px";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px; margin-right:-30px;font-weight:normal";
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
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		i=0;
	}
}

// create class for each bun
class Item {
	constructor(name, glaze, quantity) {
		this.name = name
		this.glaze = glaze
		this.quantity = quantity
	}
	
	display() {
		return ('<br />' + this.quantity + '  ' + this.name + ' Glaze: ' + this.glaze)
	}
}

// create a wishlist class
class wish {
	constructor() {
		this.items = []
	}
	
	//Adds an item to the items array, if it the item already exists (based on the name and glaze and quantity)
	//then it updates the quantity accordingly instead of adding the item again
	addItem(item) {
		var itemInItems = false
		for(var i = 0; i < this.items.length; i++) {
			if (this.items[i].name == item.name && this.items[i].glaze == item.glaze) {
				itemInItems = true;
				alert("This item is already in the wishlist!");
			}
		}
		
		if (!itemInItems) { 
			this.items.push(item);
			alert("This item has been added to the wishlist!");
		}
	}
	
	display() {
		//TODO
		var i = 0
		var allitems = []
		for (; i < this.items.length; i++) {
			allitems.push(this.items[i].display())
		}
		return allitems.join('')
	}
}

wish_list = new wish();

function wishlist() {
	// get quantity, glaze, and name of bun
 let val = document.getElementById("ogquant").value;
 if (val == "none"){
 	val = ' '
 }
 let gla = document.getElementById("ogglaze").value;
 if (gla == "none"){
 	gla = 'not selected'
 }
 if (gla == "no"){
 	gla = 'no glaze'
 }
 if (gla == "dc"){
 	gla = 'double chocolate'
 }
 if (gla == "vm"){
 	gla = 'vanilla milk'
 }
 if (gla == "sm"){
 	gla = "sugar milk"
 }
 let Iname = document.getElementById("wltitle").innerHTML;

 item = new Item(Iname,gla,val);
 wish_list.addItem(item);

// add to local storage
 let localStorage = window.localStorage;
 let arr = JSON.parse(localStorage.getItem("arr"));
 if (!arr) arr = [];
 arr.push(item.display());
 arr = [...new Set(arr)];
 localStorage.setItem("arr", JSON.stringify(arr));

 // wishlist counter
 document.getElementById("atw").innerHTML = "Add to Wishlist ("+ arr.length + ")";
}
