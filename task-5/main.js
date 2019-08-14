const content = document.querySelectorAll(".content");
const result = [];
for (let i = 0; i < content.length; i++) {
  result.push(content[i].textContent);
}
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
btn.addEventListener("click", geSort);
function geSort() {
  input.value = result.sort(function(a, b) {
    return a - b;
  });
}
