const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");
const clock = document.querySelector("#clock"); //analog
const digital = document.querySelector("#digital");

// Dropdowns
const lang = document.querySelector("#lang"); //dropdown
const theme = document.querySelector("#theme"); //dropdown
const clockChange = document.querySelector("#clockChange"); //dropdown
const shape = document.querySelector("#shape");
const format = document.querySelector("#format");

//Dropdown div
const shapeDiv = document.querySelector("#shapeDiv");
const langDiv = document.querySelector("#langDiv");
const formatDiv = document.querySelector("#formatDiv");

const body = document.body;

const dHr = document.querySelector("#dHr");
const dMn = document.querySelector("#dMn");
const dSc = document.querySelector("#dSc");
const ampm = document.querySelector("#ampm");

let isTF = false;
setInterval(() => {
  let day = new Date();
  let hh = day.getHours();
  let mm = day.getMinutes();
  let ss = day.getSeconds();

  //Analog
  hr.style.transform = `rotateZ(${(hh * 30) + (mm/3)}deg)`;
  mn.style.transform = `rotateZ(${mm * 6}deg)`;
  sc.style.transform = `rotateZ(${ss * 6}deg)`;

  //digital



  if(!isTF){
    if(hh >= 12){
      ampm.innerHTML = "PM"

    } else {
      ampm.innerHTML = "AM"
    }

    if(hh > 12){
    	hh = hh - 12;
    }
    
  }
  if(hh < 10){
    hh = "0" +  hh;
  }
  if(mm < 10){
    mm = "0" +  mm;
  }
  if(ss < 10){
    ss = "0" +  ss;
  }
  dHr.innerHTML = hh + ":";
  dMn.innerHTML = mm + ":";
  dSc.innerHTML = ss;
});

const changeLang = () => {
  if(lang.value == "english"){
    if(theme.value == "dark"){
        clock.style.background = "url(./images/clock_en_light.png)";
    } else if(theme.value == "light"){
      clock.style.background = "url(./images/clock_en.png)"
    }
  } else if(lang.value == "roman"){
    if(theme.value == "dark"){
      clock.style.background = "url(./images/clock_roman_light.png)"
    } else if(theme.value == "light"){
      clock.style.background = "url(./images/clock_roman.png)"
    }
  }
  clock.style.backgroundSize = "cover";
}

const changeTheme = () => {
  if(theme.value == "light"){
    body.style.backgroundColor = "var(--light-background)";
    // Analog
    clock.style.boxShadow = "0 -15px 15px rgba(0,0,0,0.2)," +
                "inset 0 -15px 15px rgba(0,0,0,0.2)," +
                "0 15px 15px rgba(255,255,255,0.05)," +
                "inset 0 15px 15px rgba(255,255,255,0.05)";
    clock.style.border = "4px solid var(--light-background)";
    mn.style.setProperty('--min-color', '#000');
    sc.style.setProperty('--sec-color', '#000');
    // digital
    digital.style.color = "var(--light-background)";
    dHr.style.textShadow = "0 0 30px #5DA3FA," + "0 0 30px #5DA3FA";
    dMn.style.textShadow = "0 0 30px #5DA3FA," + "0 0 30px #5DA3FA";
    dSc.style.textShadow = "0 0 30px #5DA3FA," + "0 0 30px #5DA3FA";
    ampm.style.textShadow = "0 0 10px #5DA3FA," + "0 0 10px #5DA3FA";
  } else if(theme.value == "dark"){
    body.style.backgroundColor = "var(--background-color)";
    mn.style.setProperty('--min-color', '#FFF');
    sc.style.setProperty('--sec-color', '#FFF');
    clock.style.boxShadow = "0 -15px 15px rgba(255,255,255,0.05)," +
                "inset 0 -15px 15px rgba(255,255,255,0.05)," +
                "0 15px 15px rgba(0,0,0,0.3)," +
                "inset 0 15px 15px rgba(0,0,0,0.3)";
    clock.style.border = "4px solid var(--background-color)";

    // digital
    digital.style.color = "var(--light-background)";
    dHr.style.textShadow = "0 0 50px var(--dropdown-color)," + "0 0 50px var(--dropdown-color)";
    dMn.style.textShadow = "0 0 50px var(--dropdown-color),"  + "0 0 50px var(--dropdown-color)";
    dSc.style.textShadow = "0 0 50px var(--dropdown-color),"  + "0 0 50px var(--dropdown-color)";
    ampm.style.textShadow = "0 0 10px var(--dropdown-color)," + "0 0 10px var(--dropdown-color)" ;
  }
  changeLang();
}

const changeClock = () => {
  if(clockChange.value == "analog"){
    clock.style.display = "flex";
    digital.style.display = "none";

    langDiv.style.display = "flex";
    shapeDiv.style.display = "flex";
    formatDiv.style.display = "none";
  } else if(clockChange.value == "digital"){
    clock.style.display = "none";
    digital.style.display = "flex";

    langDiv.style.display = "none";
    shapeDiv.style.display = "none";
    formatDiv.style.display = "flex";
  }
}

const changeShape = () => {
  if(shape.value == "square"){
    clock.style.borderRadius = "0";
  } else {
    clock.style.borderRadius = "50%";
  }
}

const changeFormat = () => {
  if(format.value == "12"){
    isTF = false;
  } else {
    isTF = true;
    ampm.innerHTML = "";
  }
}
