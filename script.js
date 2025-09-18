document.addEventListener("DOMContentLoaded", function () {
  let value = "";
  const display = document.getElementById("display");
  const clickSound = document.getElementById("click-sound");


  const btn7 = document.getElementById("btn-7");
  const btn8 = document.getElementById("btn-8");
  const btn9 = document.getElementById("btn-9");
  const btn4 = document.getElementById("btn-4");
  const btn5 = document.getElementById("btn-5");
  const btn6 = document.getElementById("btn-6");
  const btn1 = document.getElementById("btn-1");
  const btn2 = document.getElementById("btn-2");
  const btn3 = document.getElementById("btn-3");
  const btn0 = document.getElementById("btn-0");

  const multiplicationbtn = document.getElementById("multiplication-btn");
  const subtractionbtn = document.getElementById("subtraction-btn");
  const additionbtn = document.getElementById("addition-btn");
  const equalbtn = document.getElementById("equal-btn");
  const clearBtn = document.getElementById("clear-btn");
  const backbtn = document.getElementById("back-btn");
  const percentbtn = document.getElementById("percent-btn");
  const divisionbtn = document.getElementById("division-btn");
  btn0.addEventListener("click", () => {
    value += "0";
    display.textContent = value;
     playClick()
  });
  btn1.addEventListener("click", () => {
    value += "1";
    display.textContent = value;
     playClick()
  });
  btn2.addEventListener("click", () => {
    value += "2";
    display.textContent = value;
     playClick()
  });
  btn3.addEventListener("click", () => {
    value += "3";
    display.textContent = value;
     playClick()
  });
  btn4.addEventListener("click", () => {
    value += "4";
    display.textContent = value;
     playClick()
  });
  btn5.addEventListener("click", () => {
    value += "5";
    display.textContent = value;
     playClick()
  });
  btn6.addEventListener("click", () => {
    value += "6";
    display.textContent = value;
     playClick()
  });
  btn7.addEventListener("click", () => {
    value += "7";
    display.textContent = value;
     playClick()
  });
  btn8.addEventListener("click", () => {
    value += "8";
    display.textContent = value;
     playClick()
  });
  btn9.addEventListener("click", () => {
    value += "9";
    display.textContent = value;
     playClick()
  });
multiplicationbtn.addEventListener('click',()=>{
  value+='*';
  display.textContent=value;
   playClick()
})
divisionbtn.addEventListener('click',()=>{
  value+='/';
  display.textContent=value;
   playClick()
})
subtractionbtn.addEventListener('click',()=>{
  value+='-';
  display.textContent=value;
   playClick()
})
additionbtn.addEventListener('click',()=>{
  value+='+';
  display.textContent=value;
   playClick()
})
percentbtn.addEventListener('click',()=>{
  value+='%';
  display.textContent=value;
   playClick()
})
clearBtn.addEventListener('click',()=>{
  value='0';
  display.textContent=value;
   playClick()
})
equalbtn.addEventListener('click',()=>{
  //eval(value)

// value ek string hai jisme tumhara pura expression hota hai, jaise "12+3*2".

// eval() us string ko evaluate karke result nikalta hai.
// Example: eval("12+3*2") → 18.

// .toString()

// Result number hota hai, usko string banaya jaata hai taaki fir se value me store karke screen me dikhaya ja sake.
  try{
    value=eval(value).toString();
    display.textContent=value;

  }
  catch{
  display.textContent='Error';

  }
   playClick()
})
backbtn.addEventListener('click',()=>{
  value=value.slice(0,-1);
  display.textContent=value;
})
function playClick() {
  clickSound.currentTime = 0; // har click pe sound start se bajega
  clickSound.play().catch(err => console.log(err)); // error handle
}
document.querySelectorAll(".buttons div").forEach(btn => {
  btn.addEventListener("click", () => {
    playClick(); // sound bajega
  });
});

});
