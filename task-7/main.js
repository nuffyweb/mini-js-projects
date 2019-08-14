const elem = document.querySelector(".text");
elem.addEventListener("blur", bigLetter);

function uswords(str) {
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("");
    arr[i][0] = arr[i][0].toUpperCase();
    arr[i] = arr[i].join("");
  }
  str = arr.join(" ");
  return str;
}

function bigLetter() {
  elem.value = uswords(elem.value);
}
