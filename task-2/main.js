const num = document.querySelector(".num");
num.addEventListener("blur", getSum);

function getSum() {
  const numValue = num.value;
  const sum = document.querySelector(".sum");
  arr = numValue.split("");
  let baseSum = 0;
  for (var i = 0; i < arr.length; i++) {
    baseSum += parseInt(arr[i]);
  }
  sum.innerHTML = baseSum;
}
