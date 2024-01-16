const Btn = document.getElementById("btn");
const Body = document.getElementsByTagName("body")[0];

const colors = ["blue", "green", "yellow", "red"];

Btn.addEventListener("click", () => {
  Body.style.background = colors[getRandomColor()]
});

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}