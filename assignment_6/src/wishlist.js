// get the wishlist array and show it on the shopping cart page
let div = document.getElementById("showwl");
let arr = JSON.parse(window.localStorage.getItem("arr"));
div.innerHTML = arr;

// clear wishlist and show the user it has been cleared
function clearwl(){
	window.localStorage.clear("arr");
	div.innerHTML = "Nothing added to wishlist yet!";
}