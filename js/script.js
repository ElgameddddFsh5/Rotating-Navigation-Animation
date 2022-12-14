let bars = document.getElementById("bars");
let exitx = document.getElementById("exitx");
let container = document.querySelector(".container");
let circle = document.querySelector(".circle");

bars.addEventListener("click", () => {
  container.style = "transform: rotate(-20deg);";
  bars.style = " top: 95px; left: 155px;   transform: rotate(-20deg);";
  exitx.style = "  top: 125px; left: 60px;";
  circle.style = "  transform: rotate(-70deg);";
});
exitx.addEventListener("click", () => {
  container.style = "  transform: rotate(0deg);";
  bars.style = "  top: 140px; left: 130px; ";
  circle.style = "  transform: rotate(0deg);";
});
