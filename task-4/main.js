const word = document.querySelector(".word");
const result = document.querySelector(".result-value");
const baseWord = document.querySelector(".base-word");

const btn = document.querySelector(".btn");
btn.addEventListener("click", checkWord);
function checkWord() {
  const wordvalue = word.value;
  const wordStraightArr = wordvalue.split("");
  const wordStraight = wordStraightArr.join("");
  const wordSReverse = wordStraightArr.reverse().join("");
  result.textContent = wordStraight === wordSReverse ? "yes" : "no";

  clearInput();
  getWord(wordvalue);
}
function clearInput() {
  word.value = "";
}
function getWord(e) {
  baseWord.textContent = e;
}
