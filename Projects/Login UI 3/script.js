const joinHere = document.querySelector("#joinHere");
const loginHere = document.querySelector("#loginHere");
const container = document.querySelector('.container');

joinHere.addEventListener('click', () => {
  container.classList.toggle('signup-mode');
})

loginHere.addEventListener('click', () => {
  container.classList.toggle('signup-mode');
})
