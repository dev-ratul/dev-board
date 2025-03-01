function getIdByInnerText(id) {
    let element = document.getElementById(id);
    let value = element.innerText;
    let innerValue = parseInt(value);
    return innerValue;
}


function addedValue(id, inner) {
    let titleElement = document.getElementById(id);

    let finalTitle = titleElement.innerText;

    let currentTime = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true 
    });

    let text = `You have completed the task ${finalTitle} at ${currentTime}`;

    let innerElement = document.getElementById(inner);

    let newMessage = document.createElement("h1");
    newMessage.className = "bg-[#F4F7FF] p-3 mb-3 font-medium rounded-xl";
    newMessage.innerText = text;

    innerElement.appendChild(newMessage);
}


