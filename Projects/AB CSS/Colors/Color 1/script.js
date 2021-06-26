const color = document.getElementsByClassName("color");
const generateBtn = document.getElementById("generateBtn");
const colorValue = document.getElementById("colorValue");
var goBack = false;

new ClipboardJS("#copy");

//Generate New Color Palette
generateBtn.addEventListener("click", () => {
  if (goBack) {
    //Bring back the color palette
    for (i = 0; i < color.length; i++) {
      color[i].style.display = "inline";
    }
    generateBtn.innerHTML = "Generate";
    goBack = false;
  } else {
    location.reload(); //reload
  }
});

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

// Generate Color Palette
for (i = 0; i < color.length; i++) {
  const color1 = `rgb(
    ${getRandom()}, ${getRandom()}, ${getRandom()}
  )`;
  const color2 = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
  const randomGradient = `linear-gradient(90deg, ${color1}, ${color2})`;
  color[i].style.background = randomGradient;
}

// Set Background Color from Color Palette
for (i = 0; i < color.length; i++) {
  color[i].addEventListener("click", (e) => {
    document.body.style.background = e.srcElement.style.background;
    colorValue.innerHTML = e.srcElement.style.background + ";";
    // Hide The Color Palletes
    for (i = 0; i < color.length; i++) {
      color[i].style.display = "none";
    }
    generateBtn.innerHTML = "Go Back";
    goBack = true;
  });
}
