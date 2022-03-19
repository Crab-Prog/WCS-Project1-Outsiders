
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");


img1.addEventListener("click", () => {
  if (getComputedStyle(image1).display === "none")
  {image1.style.display = "block";}
  else { image1.style.display = "block";}
})
