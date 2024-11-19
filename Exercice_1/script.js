const image = document.querySelector("#image1");
image.addEventListener("mouseenter", handleMouseEnterOnImg);

// 1ere methode 
// function handleMouseEnterOnImg(event) {
//   event.target.classList.add("red-border");
// }

// image.addEventListener("mouseleave", handleMouseLeaveOnImg);

// function handleMouseLeaveOnImg(event) {
//    event.target.classList.remove("red-border");
// }

// 2e methode 
function handleMouseEnterOnImg() {
  image.style.border = "solid medium";
  image.style.border = "3px outset red";
}

image.addEventListener("mouseleave", handleMouseLeaveOnImg);

function handleMouseLeaveOnImg() {
  image.style.border = "none";
  image.style.border = "none";
}