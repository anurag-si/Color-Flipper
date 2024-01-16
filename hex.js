const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Btn = document.getElementById("btn");
const Body1 = document.getElementsByTagName("body")[0];

Btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomColor()];
  }
  Body1.style.background = hexColor;
});

function getRandomColor() {
  return Math.floor(Math.random() * hex.length);
}
