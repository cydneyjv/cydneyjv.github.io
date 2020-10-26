let div = document.getElementById("showwl");
let arr = JSON.parse(window.localStorage.getItem("arr"));
div.innerHTML = arr;

function clearwl(){
	window.localStorage.clear("arr");
	div.innerHTML = "Nothing added to wishlist yet!";
}