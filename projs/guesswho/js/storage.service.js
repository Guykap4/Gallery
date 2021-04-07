function saveTreeToStorage(questTree, questTreeKey) {
    localStorage.setItem(questTreeKey, JSON.stringify(questTree));
}

function getTreeFromStorage(questTreeKey) {
    return JSON.parse(localStorage.getItem(questTreeKey))
}