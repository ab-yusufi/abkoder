const container = document.querySelector(".container");
const signupBtn = document.querySelector("#signup");
const signinBtn = document.querySelector("#signin");
const img = document.querySelectorAll(".img");

const themeData = [
  [
    "#e6425e",
    "#b4161b",
    "#800000",
    "rgba(230, 66, 94, 0.1)",
    "images/image2.svg",
  ],

  [
    "#5DA3FA",
    "#2827CC",
    "#1F305E",
    "rgb(92, 163, 250,0.1)",
    "images/image3.svg",
  ],
  [
    "#E5D68A",
    "#A77B06",
    "#666600",
    "rgb(230, 215, 139, 0.1)",
    "images/image4.svg",
  ],
  [
    "#4dd637",
    "#006400",
    "#1B4D3E",
    "rgba(77, 214, 55, 0.1)",
    "images/image1.svg",
  ],
];
const root = document.querySelector(":root");
const cssVariables = getComputedStyle(root);
var i = 0;

const changeTheme = (i) => {
  root.style.setProperty("--primary-color", themeData[i][0]);
  root.style.setProperty("--primary-dark", themeData[i][1]);
  root.style.setProperty("--bg-gradient", themeData[i][2]);
  root.style.setProperty("--bg-light", themeData[i][3]);
  img[0].setAttribute("src", themeData[i][4]);
  img[1].setAttribute("src", themeData[i][4]);
  console.log("RUNNING");
};

setInterval(() => {
  changeTheme(i);
  i++;
  if (i == 4) {
    i = 0;
  }
}, 4000);

signupBtn.addEventListener("click", () => {
  container.classList.toggle("signup-mode");
});

signinBtn.addEventListener("click", () => {
  container.classList.toggle("signup-mode");
});
