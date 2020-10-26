
// connected to productbrowsingpage.html and all detail pages (productdetailpage(original).html,productdetailpage(g-f).html,productdetailpage(walnut).html)

function cartnum() {
	let localStorage = window.localStorage;
 	let cart = JSON.parse(localStorage.getItem("cart"));
 	if (!cart) cart = [];
	document.getElementById("sc#").innerHTML = cart.length;
}

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
	let cart = JSON.parse(localStorage.getItem("cart"));
	if (!cart) cart = [];
	q = cart.length;
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
	alert("Added to Cart!" + ' (' + cart.length + ')');
}

i = 0;

//carousel (original)
function back(clickedElement){
	let page = clickedElement.id;
	if (page == "cogb"){
		var image = 'images/gf.jpeg';
		var name = "Original (G-F)";
		var des = "Our signature best seller,<br>without all the gluten!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/walnut.jpeg';
		var name2 = "Walnut";
		var des2 = "People go nutty over<br>our walnut flavor!";
	}
	if (page == "cgfb"){
		var image = 'images/pears.jpeg';
		var name = "Famous Original";
		var des = "Our signature best seller,<br>you just have to try it!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/walnut.jpeg';
		var name2 = "Walnut";
		var des2 = "People go nutty over<br>our walnut flavor!";
	}
	if (page == "cwab"){
		var image = 'images/gf.jpeg';
		var name = "Original (G-F)";
		var des = "Our signature best seller,<br>without all the gluten!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/pears.jpeg';
		var name2 = "Famous Original";
		var des2 = "Our signature best seller,<br>you just have to try it!";
	}
	// to keep track of location
	i=parseInt(i)-parseInt(1);
	if (i == -1 || i==4){
		// change images
		document.getElementById("cimg1").src = 'images/wal.jpeg';
		document.getElementById("cimg2").src = image;
		document.getElementById("cimg3").src = 'images/b.jpeg';
		// change title
		document.getElementById("clab1").innerHTML = "Caramel Pecan";
		document.getElementById("clab2").innerHTML = name;
		document.getElementById("clab3").innerHTML = "Blackberry";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-15px";
		// change description
		document.getElementById("cdes1").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes2").innerHTML = des;
		document.getElementById("cdes3").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;font-weight:normal;margin-left:10px;margin-right:-20px";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px; margin-right:-30px;font-weight:normal";
	}
	if (i == -2|| i==3){
		document.getElementById("cimg1").src = 'images/dc.jpeg';
		document.getElementById("cimg2").src = 'images/wal.jpeg';
		document.getElementById("cimg3").src = image;
		document.getElementById("clab1").innerHTML = "Pumpkin Spice";
		document.getElementById("clab2").innerHTML = "Caramel Pecan";
		document.getElementById("clab3").innerHTML = name;
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-30px";
		document.getElementById("cdes1").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes2").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes3").innerHTML = des;
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-right:-40px;font-weight:normal";
	}
	if (i == -3|| i==2){
		document.getElementById("cimg1").src = image2;
		document.getElementById("cimg2").src = 'images/dc.jpeg';
		document.getElementById("cimg3").src = 'images/wal.jpeg';
		document.getElementById("clab1").innerHTML = name2;
		document.getElementById("clab2").innerHTML = "Pumpkin Spice";
		document.getElementById("clab3").innerHTML = "Caramel Pecan";
		document.getElementById("clab1").style = "margin-left:75px";
		document.getElementById("clab2").style = "margin-left:15px";
		document.getElementById("clab3").style = "margin-left:-35px;margin-right:20px";
		document.getElementById("cdes1").innerHTML = des2;
		document.getElementById("cdes2").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes3").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:25px;font-weight:normal";
	}
	if (i == -4|| i==1){
		document.getElementById("cimg1").src = 'images/b.jpeg';
		document.getElementById("cimg2").src = image2;
		document.getElementById("cimg3").src = 'images/dc.jpeg';		
		document.getElementById("clab1").innerHTML = "Blackberry";
		document.getElementById("clab2").innerHTML = name2;
		document.getElementById("clab3").innerHTML = "Pumpkin Spice";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:25px;margin-right:-30px";
		document.getElementById("clab3").style = "margin-left:15px;margin-right:-10px";
		document.getElementById("cdes1").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes2").innerHTML = des2;
		document.getElementById("cdes3").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px;font-weight:normal";
	}
	if (i == -5|| i==0){
		document.getElementById("cimg1").src = image;
		document.getElementById("cimg2").src = 'images/b.jpeg';
		document.getElementById("cimg3").src = image2;		
		document.getElementById("clab1").innerHTML = name;
		document.getElementById("clab2").innerHTML = "Blackberry";
		document.getElementById("clab3").innerHTML = name2;
		document.getElementById("clab1").style = "margin-left:-5px";
		document.getElementById("clab2").style = "margin-left:5px";
		document.getElementById("clab3").style = "margin-left:5px";
		document.getElementById("cdes1").innerHTML = des;
		document.getElementById("cdes2").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes3").innerHTML = des2;
		document.getElementById("cdes1").style = style;
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:5px;font-weight:normal";
		i=0;
	}
}


// to go forward instead of backwards
function forward(clickedElement){
	let page = clickedElement.id;
	if (page == "cogf"){
		var image = 'images/gf.jpeg';
		var name = "Original (G-F)";
		var des = "Our signature best seller,<br>without all the gluten!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/walnut.jpeg';
		var name2 = "Walnut";
		var des2 = "People go nutty over<br>our walnut flavor!";
	}
	if (page == "cgff"){
		var image = 'images/pears.jpeg';
		var name = "Famous Original";
		var des = "Our signature best seller,<br>you just have to try it!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/walnut.jpeg';
		var name2 = "Walnut";
		var des2 = "People go nutty over<br>our walnut flavor!";
	}
	if (page == "cwaf"){
		var image = 'images/gf.jpeg';
		var name = "Original (G-F)";
		var des = "Our signature best seller,<br>without all the gluten!";
		var style = "font-size: 18px;margin-left:-10px;font-weight:normal";
		var image2 = 'images/pears.jpeg';
		var name2 = "Famous Original";
		var des2 = "Our signature best seller,<br>you just have to try it!";
	}
	i=parseInt(i)+parseInt(1);
	if (i == 1 || i==-4){
		document.getElementById("cimg1").src = 'images/b.jpeg';
		document.getElementById("cimg2").src = image2;
		document.getElementById("cimg3").src = 'images/dc.jpeg';
		document.getElementById("clab1").innerHTML = "Blackberry";
		document.getElementById("clab2").innerHTML = name2;
		document.getElementById("clab3").innerHTML = "Pumpkin Spice";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:25px;margin-right:-30px";
		document.getElementById("clab3").style = "margin-left:15px;margin-right:-10px";
		document.getElementById("cdes1").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes2").innerHTML = des2;
		document.getElementById("cdes3").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes1").style = "font-size: 18px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:15px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px;font-weight:normal";
	}
	if (i == 2 || i==-3){
		document.getElementById("cimg1").src = image2;
		document.getElementById("cimg2").src = 'images/dc.jpeg';
		document.getElementById("cimg3").src = 'images/wal.jpeg';		
		document.getElementById("clab1").innerHTML = name2;
		document.getElementById("clab2").innerHTML = "Pumpkin Spice";
		document.getElementById("clab3").innerHTML = "Caramel Pecan";
		document.getElementById("clab1").style = "margin-left:75px";
		document.getElementById("clab2").style = "margin-left:15px";
		document.getElementById("clab3").style = "margin-left:-35px;margin-right:20px";
		document.getElementById("cdes1").innerHTML = des2;
		document.getElementById("cdes2").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes3").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px;font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:25px;font-weight:normal";

	}
	if (i == 3 || i==-2){
		document.getElementById("cimg1").src = 'images/dc.jpeg';
		document.getElementById("cimg2").src = 'images/wal.jpeg';
		document.getElementById("cimg3").src = image;		
		document.getElementById("clab1").innerHTML = "Pumpkin Spice";
		document.getElementById("clab2").innerHTML = "Caramel Pecan";
		document.getElementById("clab3").innerHTML = name;
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-30px";
		document.getElementById("cdes1").innerHTML = "A fall favorite, and<br>just spicy enough!";
		document.getElementById("cdes2").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes3").innerHTML = des;
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:0px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;margin-left:30px; margin-right:10px; font-weight:normal";
		document.getElementById("cdes3").style = "font-size: 18px;margin-right:-40px;font-weight:normal";
	}
	if (i == 4 || i==-1){
		document.getElementById("cimg1").src = 'images/wal.jpeg';
		document.getElementById("cimg2").src = image;
		document.getElementById("cimg3").src = 'images/b.jpeg';		
		document.getElementById("clab1").innerHTML = "Caramel Pecan";
		document.getElementById("clab2").innerHTML = name;
		document.getElementById("clab3").innerHTML = "Blackberry";
		document.getElementById("clab1").style = "margin-left:25px";
		document.getElementById("clab2").style = "margin-left:-15px";
		document.getElementById("clab3").style = "margin-left:-15px";
		document.getElementById("cdes1").innerHTML = "The perfect combo<br>of sweet and nutty!";
		document.getElementById("cdes2").innerHTML = des;
		document.getElementById("cdes3").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes1").style = "font-size: 18px;margin-left:10px;font-weight:normal";
		document.getElementById("cdes2").style = "font-size: 18px;font-weight:normal;margin-left:10px;margin-right:-20px";
		document.getElementById("cdes3").style = "font-size: 18px;margin-left:15px; margin-right:-30px;font-weight:normal";
	}
	if (i == 5 || i==-5){
		document.getElementById("cimg1").src = image;
		document.getElementById("cimg2").src = 'images/b.jpeg';
		document.getElementById("cimg3").src = image2;		
		document.getElementById("clab1").innerHTML = name;
		document.getElementById("clab2").innerHTML = "Blackberry";
		document.getElementById("clab3").innerHTML = name2;
		document.getElementById("clab1").style = "margin-left:-5px";
		document.getElementById("clab2").style = "margin-left:5px";
		document.getElementById("clab3").style = "margin-left:5px";
		document.getElementById("cdes1").innerHTML = des;
		document.getElementById("cdes2").innerHTML = "A fun, fruity flavor that<br>kids and adults love!";
		document.getElementById("cdes3").innerHTML = des2;
		document.getElementById("cdes1").style = style;
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

function addonef() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 let name = "Famous Original Cinnamon Roll(s)";
 let quantity = "1";
 let glaze = 'No Glaze';
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function addoneb() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 let name = "Blackberry Cinnamon Roll(s)";
 let quantity = "1";
 let glaze = 'No Glaze';
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function addonew() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 let name = "Walnut Cinnamon Roll(s)";
 let quantity = "1";
 let glaze = 'No Glaze';
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function addoneo() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 let name = "Original (Gluten-Free) Cinnamon Roll(s)";
 let quantity = "1";
 let glaze = 'No Glaze';
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function addonep() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 let name = "Pumpkin Spice Cinnamon Roll(s)";
 let quantity = "1";
 let glaze = 'No Glaze';
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function addonec() {
 let localStorage = window.localStorage;
 let cart = JSON.parse(localStorage.getItem("cart"));
 let quantity = "1";
 let glaze = 'No Glaze';
 if (!cart) cart = [];
 let name = "Caramel Pecan Cinnamon Roll(s)";
 cart.push(name);
  alert("Added to Cart!" + ' (' + cart.length + ')');
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
}

function add1o(){
 let localStorage = window.localStorage;
 let name = "Famous Original Cinnamon Roll(s)";
 let quantity = document.getElementById("ogquant").value;
 if (quantity == "none"){
 	quantity = "1";
 }
 let glaze = document.getElementById("ogglaze").value;
 if (glaze == "none"){
 	glaze = 'No Glaze'
 }
  if (glaze == "no"){
 	glaze = 'No Glaze'
 }
 if (glaze == "dc"){
 	glaze = 'Double Chocolate'
 }
 if (glaze == "vm"){
 	glaze = 'Vanilla Milk'
 }
 if (glaze == "sm"){
 	glaze = "Sugar Milk"
 }
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 cart.push(name);
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
 document.getElementById("sc#").innerHTML = cart.length;
 if ((cart.length & 1) == 0 ) {
		document.getElementById("atc").style.background = "rgba(177, 131, 119, 1)";
	    document.getElementById("scb").style.color = "rgba(177, 131, 119, 1)";
	}
else {
		document.getElementById("atc").style.background = "rgba(127, 86, 40, 1)";
	    document.getElementById("scb").style.color = "rgba(127, 86, 40, 1)";
	}
alert("Added to Cart!" + ' (' + cart.length + ')');
}

function add1g(){
 let localStorage = window.localStorage;
 let name = "Original (Gluten-Free) Cinnamon Roll(s)";
 let quantity = document.getElementById("ogquant").value;
 if (quantity == "none"){
 	quantity = "1";
 }
 let glaze = document.getElementById("ogglaze").value;
 if (glaze == "none"){
 	glaze = 'No Glaze'
 }
  if (glaze == "no"){
 	glaze = 'No Glaze'
 }
 if (glaze == "dc"){
 	glaze = 'Double Chocolate'
 }
 if (glaze == "vm"){
 	glaze = 'Vanilla Milk'
 }
 if (glaze == "sm"){
 	glaze = "Sugar Milk"
 }
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 cart.push(name);
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
 document.getElementById("sc#").innerHTML = cart.length;
 if ((cart.length & 1) == 0 ) {
		document.getElementById("atc").style.background = "rgba(177, 131, 119, 1)";
	    document.getElementById("scb").style.color = "rgba(177, 131, 119, 1)";
	}
else {
		document.getElementById("atc").style.background = "rgba(127, 86, 40, 1)";
	    document.getElementById("scb").style.color = "rgba(127, 86, 40, 1)";
	}
alert("Added to Cart!" + ' (' + cart.length + ')');
}

function add1w(){
 let localStorage = window.localStorage;
 let name = "Walnut Cinnamon Roll(s)";
 let quantity = document.getElementById("ogquant").value;
 if (quantity == "none"){
 	quantity = "1";
 }
 let glaze = document.getElementById("ogglaze").value;
 if (glaze == "none"){
 	glaze = 'No Glaze'
 }
  if (glaze == "no"){
 	glaze = 'No Glaze'
 }
 if (glaze == "dc"){
 	glaze = 'Double Chocolate'
 }
 if (glaze == "vm"){
 	glaze = 'Vanilla Milk'
 }
 if (glaze == "sm"){
 	glaze = "Sugar Milk"
 }
 let cart = JSON.parse(localStorage.getItem("cart"));
 if (!cart) cart = [];
 cart.push(name);
 localStorage.setItem("cart", JSON.stringify(cart));
 let quant = JSON.parse(localStorage.getItem("quant"));
 if (!quant) quant = [];
 quant.push(quantity);
 localStorage.setItem("quant", JSON.stringify(quant));
 let glaz = JSON.parse(localStorage.getItem("glaz"));
 if (!glaz) glaz = [];
 glaz.push(glaze);
 localStorage.setItem("glaz", JSON.stringify(glaz));
 document.getElementById("sc#").innerHTML = cart.length;
 if ((cart.length & 1) == 0 ) {
		document.getElementById("atc").style.background = "rgba(177, 131, 119, 1)";
	    document.getElementById("scb").style.color = "rgba(177, 131, 119, 1)";
	}
else {
		document.getElementById("atc").style.background = "rgba(127, 86, 40, 1)";
	    document.getElementById("scb").style.color = "rgba(127, 86, 40, 1)";
	}
alert("Added to Cart!" + ' (' + cart.length + ')');
}
