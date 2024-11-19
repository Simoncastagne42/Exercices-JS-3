const colorGreen = document.querySelector(".color.green");
const colorRed = document.querySelector(".color.red");
const colorBlue = document.querySelector(".color.blue");
const text = document.querySelector("#text");

colorGreen.addEventListener("click", handleMouseClickColorGreen);
function handleMouseClickColorGreen (event) {
    text.classList.add("textg");
    text.classList.remove("textr");
    text.classList.remove("textb");
}

colorRed.addEventListener("click", handleMouseClickColorRed);
function handleMouseClickColorRed (event) {
    text.classList.add("textr");
    text.classList.remove("textg");
    text.classList.remove("textb");
}


colorBlue.addEventListener("click",
     handleMouseClickColorBlue);
function handleMouseClickColorBlue (event) {
    text.classList.add("textb");
    text.classList.remove("textr");
    text.classList.remove("textg");
}
