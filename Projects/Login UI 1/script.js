const joinHere = document.getElementById('joinHere');
const signinHere = document.getElementById('signinHere');
const main = document.getElementsByClassName('main');
const homeLink = document.querySelector("#homeLink");
const signupLink = document.querySelector("#signupLink");
const signinLink = document.querySelector("#signinLink");
let signUpMode = false;

signinLink.classList.add('bb');

const joinHereFunc = () => {
  main[0].classList.add('signup-mode-text');
  main[0].classList.add('signup-mode-form');
  signinLink.classList.remove('bb');
  signupLink.classList.add('bb');
  singUpMode = true;
}

const signinHereFunc = () => {
  main[0].classList.remove('signup-mode-text');
  main[0].classList.remove('signup-mode-form');
  signupLink.classList.remove("bb");
  signinLink.classList.add('bb');
  signUpMode = false;
}

joinHere.addEventListener('click', joinHereFunc());

signinHere.addEventListener('click', signinHereFunc());
