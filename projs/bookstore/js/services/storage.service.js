function saveToStorage(key, value) {
    saveValue = JSON.stringify(value)
    localStorage.setItem(key, saveValue);
}

function getFromStorage(key) {
    var item = localStorage.getItem(key);
    return JSON.parse(item);
}