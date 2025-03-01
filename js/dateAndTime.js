
 let currentDate = new Date();

 let options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
 let formattedDate = currentDate.toLocaleDateString('en-US', options);



 document.getElementById("fullDate").innerText = formattedDate.replace(',', '');