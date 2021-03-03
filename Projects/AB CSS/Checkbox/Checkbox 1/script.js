const container = document.getElementById("container");
const input = document.getElementById('checkbox')

container.addEventListener('click', () => {
  if(input.checked){
    container.style.boxShadow = "0 0 10px #0f0, 0 0 20px #0f0,0 0 40px #0f0, 0 0 80px #0f0"
    console.log("Checked")
  } else {
    container.style.boxShadow = "0 0 10px #f00, 0 0 20px #f00,0 0 40px #f00, 0 0 80px #f00"
  }
})
