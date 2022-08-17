// get all arrays stored
let cart = JSON.parse(window.localStorage.getItem("cart"));
let quant = JSON.parse(window.localStorage.getItem("quant"));
let glaz = JSON.parse(window.localStorage.getItem("glaz"));

// get the HTML div's that store each array
let c1 = document.getElementById("scpage1");
let c2 = document.getElementById("scpage2");
let c3 = document.getElementById("scpage3");

if (!cart) cart = [];
if (!quant) quant = [];
if (!glaz) glaz = [];

// append a child for each item in the cart
for(var i = 0; i < cart.length; i++) {
var div1 = document.createElement('div');
div1.setAttribute('class', 'seconditem');
div1.innerHTML = document.getElementById('scitem1').innerHTML;
var div2 = document.createElement('div');
div2.setAttribute('class', 'seconditem');
div2.innerHTML = document.getElementById('scitem2').innerHTML;
var div3 = document.createElement('div');
div3.setAttribute('class', 'seconditem');
div3.innerHTML = document.getElementById('scitem3').innerHTML;
c1.appendChild(div1);
c2.appendChild(div2);
c3.appendChild(div3);
}

// set ID's for all quantity and "more than dozen" text boxes - for leftmost column
let quantityElements = document.querySelectorAll('.quantity');
let dozenElements = document.querySelectorAll('.hiddendozen');
// Set their ids

for (var i = 0; i < quantityElements.length; i++){
    	quantityElements[i].id = 'scq' + i;
    	dozenElements[i].id = 'schd' + i;
    	quantityElements[i].innerHTML = quant[i];
    	if (quant[i] == 12){
    		document.getElementById('schd'+i).style.visibility = "visible";
    	}
	}

let lessElements = document.querySelectorAll('.less');
let moreElements = document.querySelectorAll('.more');
// Set their ids
for (var i = 0; i < lessElements.length; i++){
    	lessElements[i].id = 'scl' + i;
    	moreElements[i].id = 'scm' + i;
	}

// set ID's for all name and image and glaze text boxes - for middle column
let nameElements = document.querySelectorAll('.name');
// Set their ids
for (var i = 0; i < nameElements.length; i++){
    	nameElements[i].id = 'scn' + i;
    	nameElements[i].innerHTML = cart[i];
	}

let imageElements = document.querySelectorAll('.image');
for (var i = 0; i < imageElements.length; i++){
    	imageElements[i].id = 'sci' + i;
    	if(cart[i] == "Famous Original Cinnamon Roll(s)"){
    		imageElements[i].src = "images/pears.jpeg";
    	}
    	if(cart[i] == "Blackberry Cinnamon Roll(s)"){
    		imageElements[i].src = "images/b.jpeg";
    	}
    	if(cart[i] == "Walnut Cinnamon Roll(s)"){
    		imageElements[i].src = "images/wal.jpeg";
    	}
    	if(cart[i] == "Original (Gluten-Free) Cinnamon Roll(s)"){
    		imageElements[i].src = "images/gf.jpeg";
    	}
    	if(cart[i] == "Pumpkin Spice Cinnamon Roll(s)"){
    		imageElements[i].src = "images/g--f.jpeg";
    	}
    	if(cart[i] == "Caramel Pecan Cinnamon Roll(s)"){
    		imageElements[i].src = "images/flower.jpeg";
    	}
    	
	}

let glazeElements = document.querySelectorAll('.glaze');
// Set their ids
for (var i = 0; i < glazeElements.length; i++){
    	glazeElements[i].id = 'scg' + i;
    	glazeElements[i].innerHTML = glaz[i];
	}

// set ID's for all price and "you saved $___" text boxes - for rightmost column
let priceElements = document.querySelectorAll('.price');
let saveElements = document.querySelectorAll('.hiddensave');
let t = 0;

// Set their ids
for (var i = 0; i < priceElements.length; i++){
    	priceElements[i].id = 'scp' + i;
    	saveElements[i].id = 'schs' + i;
    	let pr = parseInt(quant[i])* Number(2.49);
    	if (quant[i] == 3) {
    		pr = Number(pr) - Number(1.50);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $1.50 by<br>ordering 3 rolls!";
    	}
    	if (quant[i] == 6) {
    		pr = Number(pr) - Number(3);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $3.00 by<br>ordering 6 rolls!";
    	}
    	if (quant[i] == 12) {
    		pr = Number(pr) - Number(6);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $6.00 by<br>ordering 12 rolls!";
    	}
    	t = Number(t) + Number(pr.toFixed(2));
    	priceElements[i].innerHTML = '$'+pr.toFixed(2);
	}

t = Number(t);

// Calculate total price
document.getElementById("sctotal").innerHTML = '$' + t.toFixed(2);

// for the subtract button to minus 1 from the quantity chosen
function subtract(clickedElement){
	let i = clickedElement.id.slice(-1);
	document.getElementById('schs'+i).style.visibility = "hidden";
	document.getElementById('schd'+i).style.visibility = "hidden";
	let oldpr = document.getElementById("scp"+i).innerHTML;
	if (quant[i] == 1 || quant[i] == "1"){
		alert("If you want to delete this item, please use the trash can item on the right.");
        return;
	}
	else {
		quant[i] = Number(quant[i]) - Number(1);
		quantityElements[i].innerHTML = quant[i];
		localStorage.setItem("quant", JSON.stringify(quant));
	}
    // for special quantities
	let pr = Number(quant[i])* Number(2.49);
    	if (quant[i] == 3) {
    		pr = Number(pr) - Number(1.50);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $1.50 by<br>ordering 3 rolls!";
    	}
    	if (quant[i] == 6) {
    		pr = Number(pr) - Number(3);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $3.00 by<br>ordering 6 rolls!";
    	}
    	if (quant[i] == 12) {
    		pr = Number(pr) - Number(6);
    		document.getElementById('schd'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $6.00 by<br>ordering 12 rolls!";
    	}
    	document.getElementById("scp"+i).innerHTML = '$'+pr.toFixed(2);
    	let t = 0;
    for (var k = 0; k < priceElements.length; k++){
    	let newpr = document.getElementById("scp"+k).innerHTML;
    	t = Number(t) + Number(newpr.slice(1));
	}
// Calculate total price
	alert("Price updated!");
	document.getElementById("sctotal").innerHTML = '$' + t.toFixed(2);
}


// for the add button to plus 1 from the quantity chosen
function add(clickedElement){
	let i = clickedElement.id.slice(-1);
	document.getElementById('schs'+i).style.visibility = "hidden";
	document.getElementById('schd'+i).style.visibility = "hidden";
	let oldapr = document.getElementById("scp"+i).innerHTML;
	if (quant[i] == 12 || quant[i] == "12"){
		alert("To order more than 12 rolls, please send us an email regarding catering!");
        return;
	}
	else {
		quant[i] = Number(quant[i]) + Number(1);
		quantityElements[i].innerHTML = quant[i];
		localStorage.setItem("quant", JSON.stringify(quant));
	}
    // for special quantities
	let pr = Number(quant[i])* Number(2.49);
    	if (quant[i] == 3) {
    		pr = Number(pr) - Number(1.50);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $1.50 by<br>ordering 3 rolls!";
    	}
    	if (quant[i] == 6) {
    		pr = Number(pr) - Number(3);
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $3.00 by<br>ordering 6 rolls!";
    	}
    	if (quant[i] == 12) {
    		pr = Number(pr) - Number(6);
    		document.getElementById('schd'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).style.visibility = "visible";
    		document.getElementById('schs'+i).innerHTML = "You saved $6.00 by<br>ordering 12 rolls!";
    	}
    	document.getElementById("scp"+i).innerHTML = '$'+pr.toFixed(2);
    	let t = 0;
    for (var k = 0; k < priceElements.length; k++){
    	let newpr = document.getElementById("scp"+k).innerHTML;
    	t = Number(t) + Number(newpr.slice(1));
	}
	// Calculate total price
	alert("Price updated!");
	document.getElementById("sctotal").innerHTML = '$' + t.toFixed(2);
}


// for trash icons on the right of each shopping cart item
let trashElements = document.querySelectorAll('.trash');
// Set their ids
for (var i = 0; i < trashElements.length; i++){
    	trashElements[i].id = 'sct' + i;
	}

// to trash an item, removes item from the arrays and updates the ID's of each item on the page
function trashing(clickedElement){
	let tid = clickedElement.id.slice(-1);
	cart.splice(tid, 1);
	localStorage.setItem("cart", JSON.stringify(cart));
	quant.splice(tid, 1);
	localStorage.setItem("quant", JSON.stringify(quant));
	glaz.splice(tid, 1);
	localStorage.setItem("glaz", JSON.stringify(glaz));

	tid = +tid + 1;
	alert("Removing item from cart!");

	c1.removeChild(c1.childNodes[tid]);
	c2.removeChild(c2.childNodes[tid]);
	c3.removeChild(c3.childNodes[tid]);

	let trashElements = document.querySelectorAll('.trash');
    let quantityElements = document.querySelectorAll('.quantity');
    let dozenElements = document.querySelectorAll('.hiddendozen');
    let nameElements = document.querySelectorAll('.name');
    let imageElements = document.querySelectorAll('.image');
    let glazeElements = document.querySelectorAll('.glaze');
    let priceElements = document.querySelectorAll('.price');
    let saveElements = document.querySelectorAll('.hiddensave');

	// Set their ids
	for (var i = 0; i < trashElements.length; i++){
    	trashElements[i].id = 'sct' + i;
        quantityElements[i].id = 'scq' + i;
        dozenElements[i].id = 'schd' + i;
        nameElements[i].id = 'scn' + i;
        imageElements[i].id = 'sci' + i;
        glazeElements[i].id = 'scg' + i;
        priceElements[i].id = 'scp' + i;
        saveElements[i].id = 'schs' + i;
	}

    let t = 0;
    for (var k = 0; k < trashElements.length; k++){
        console.log("scp"+k);
        console.log(document.getElementById("scp"+k).innerHTML);
        let newpr = document.getElementById("scp"+k).innerHTML;
        t = Number(t) + Number(newpr.slice(1));
    }
// Calculate total price
    document.getElementById("sctotal").innerHTML = '$' + t.toFixed(2);
}
