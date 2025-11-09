var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
console.log(setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// --- Sunny 2.0 link support: ?color=solid%20red or ?hex=%23FF0000
const MAP = {
  "solid red":   "#FF0000",
  "solid green": "#00FF00",
  "solid blue":  "#0000FF",
  "solid yellow":"#FFFF00"
};

function setSolid(hex){
  document.body.style.background = hex;
  const cssEl = document.querySelector("h3");
  if (cssEl) cssEl.textContent = `background: ${hex};`;
}

function setNamedColor(name){
  const hex = MAP[name.toLowerCase()];
  if (hex) setSolid(hex);
}

(function initFromURL(){
  const q = new URLSearchParams(location.search);
  const hex = q.get("hex");
  const color = q.get("color");
  if (hex) setSolid(hex);
  else if (color) setNamedColor(color);
  else if (typeof setGradient === "function") setGradient(); // your existing function
})();
