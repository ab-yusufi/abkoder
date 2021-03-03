const menuItems = document.querySelector("#menuItems");

menuItems.style.maxHeight = "0px";

function menuToggle(){
  if(menuItems.style.maxHeight == "0px"){
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

// For Product Gallery
const productImg = document.querySelector("#product-img");
const productImgList = document.getElementsByClassName("small-img");

for(let i = 0; i < productImgList.length; i++){
  productImgList[i].addEventListener('click', () => {
    productImg.src = productImgList[i].src;
  })
}
