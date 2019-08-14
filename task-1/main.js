const ul = document.getElementById("ul");

ul.addEventListener("click", addSign);
function addSign() {
  event.target.innerHTML = event.target.innerHTML + "!";
}
var button = document.getElementById("button");
button.addEventListener("click", addLi);
function addLi() {
  const li = document.createElement("li");
  li.innerHTML = "new li";
  ul.appendChild(li);
}
