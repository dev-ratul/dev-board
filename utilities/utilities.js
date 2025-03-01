function getIdByInnerText(id) {
    let element = document.getElementById(id);
    let value = element.innerText;
    let innerValue = parseInt(value);
    return innerValue;
}

