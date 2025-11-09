var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

let allowGradient = true; // NEW 🔥

// ----- Gradient behavior -----
function setGradient() {
	if (!allowGradient) return;  // NEW 🔥 prevent overriding solid color
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	if (css) css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// Call once initially
setGradient();

// ----- Sunny 2.0 solid color support -----
const MAP = {
  "solid red":   "#FF0000",
  "solid green": "#00FF00",
  "solid blue":  "#0000FF",
  "solid yellow":"#FFFF00"
};

function setSolid(hex){
  allowGradient = false;  // NEW 🔥 stop gradient from overriding
  document.body.style.background = hex;
  if (css) css.textContent = `background: ${hex};`;
}

function setNamedColor(name){
  const hex = MAP[name.toLowerCase().trim()];
  if (hex) setSolid(hex);
}

// ----- URL handler -----
(function initFromURL(){
  const q = new URLSearchParams(location.search);
  let hex = q.get("hex");
  let color = q.get("color");

  if (hex) {
    hex = hex.trim();
    if (!hex.startsWith("#")) hex = "#" + hex;
    setSolid(hex);
  } 
  else if (color) {
    setNamedColor(color);
  }
})();
