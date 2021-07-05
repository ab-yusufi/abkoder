const container = document.querySelector(".container");
const signupBtn = document.querySelector("#signup");
const signinBtn = document.querySelector("#signin");
signupBtn.addEventListener("click", () => {
  container.classList.toggle("signup-mode");
});

signinBtn.addEventListener("click", () => {
  container.classList.toggle("signup-mode");
});
