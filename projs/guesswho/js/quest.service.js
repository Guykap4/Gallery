var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
var STORAGE_KEY = 'dbQuestsTree'

function createQuestsTree() {
    gQuestsTree = getTreeFromStorage(STORAGE_KEY);
    if (!gQuestsTree) {
        gQuestsTree = createQuest('Male?');
        gQuestsTree.yes = createQuest('Gandhi');
        gQuestsTree.no = createQuest('Rita');
    }
    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt, yes = null, no = null) {
    return {
        txt: txt,
        yes,
        no,
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {
    gPrevQuest[lastRes] = (createQuest(newQuestTxt))
    gPrevQuest[lastRes].yes = createQuest(newGuessTxt);
    gPrevQuest[lastRes].no = gCurrQuest;
    
    saveTreeToStorage(gQuestsTree, STORAGE_KEY);
}

function getCurrQuest() {
    return gCurrQuest
}

function resetCurrQuest() {
    gCurrQuest = gQuestsTree;
}


