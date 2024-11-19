let mask = document.querySelector("#masquer");
let print = document.querySelector("#afficher");
let divtext = document.querySelector("#text");
mask.addEventListener("click", handleMouseClickMasquer);
function handleMouseClickMasquer() {
  divtext.style.display = "none";
};
print.addEventListener("click", handleMouseClickAfficher);
function handleMouseClickAfficher() {
  divtext.style.display = "block";
};
