let div = document.getElementById("showwl");
let arr = JSON.parse(window.localStorage.getItem("WL"));
div.innerHTML = arr;
console.log(arr);