//  2nd
let date = new Date(); 
let op = {day:'numeric', month: 'short', year: 'numeric' }; 
let format = date.toLocaleDateString('en-US', op);

document.getElementById("dateLine-btn1").innerText = format;
document.getElementById("dateLine-btn2").innerText = format;
document.getElementById("dateLine-btn3").innerText = format;
document.getElementById("dateLine-btn4").innerText = format;
document.getElementById("dateLine-btn5").innerText = format;
document.getElementById("dateLine-btn6").innerText = format;
