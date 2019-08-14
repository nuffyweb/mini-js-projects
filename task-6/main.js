const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", getSquar);
function getSquar(event) {
  let target = event.target;
  target.classList.toggle("active");
}
