var gBoardSize = 16;
var gNums = getRandomArray(gBoardSize);
var gCurrNum = 0;
var gStopwatchInterval;
var gTimerRunning = false;

renderBoard();

function clicked(elCell) {
    startStopwatch();
    var elcellValue = elCell.innerText;
    if (+elcellValue === gCurrNum + 1) {
        elCell.classList.add('clicked');
        gCurrNum++;
    } else {
        return;
    }
    if (gCurrNum === gBoardSize) victory();
}

function startStopwatch() {
    if (gTimerRunning) return;
    gTimerRunning = true;
    startTime = Date.now();
    gStopwatchInterval = setInterval(renderTime, 30);
}

function renderTime() {

    var diff = Date.now() - startTime;

    var secs = Math.floor(diff / 1000);
    if (secs < 10) {
        secs = '0' + secs
    }
    var milis = Math.floor(diff % 1000);
    if (milis < 100) {
       milis = '00' + milis;
    } else if (milis < 10) {
        milis = '0' + milis;
    }

    var startStopwatch = document.querySelector('.stopwatch')
    startStopwatch.innerText = `${secs}:${milis}`;
}

function changeDiff(elBtn) {
    gBoardSize = +elBtn.value;
    gCurrNum = 0;
    renderBoard();
}

function resetGame() {
    gTimerRunning = false;
    gCurrNum = 0;
    clearInterval(gStopwatchInterval);
    var elVictory = document.querySelector('.victory-div');
    elVictory.innerText = ``;
    var startStopwatch = document.querySelector('.stopwatch')
    startStopwatch.innerText = `00.000`;
    var elCells = document.querySelectorAll('td');
    for (var i = 0; i < elCells.length; i++) {
        elCells[i].classList.remove('clicked');
    }
}

function victory() {
    clearInterval(gStopwatchInterval);
    var elVictory = document.querySelector('.victory-div');
    elVictory.innerText = `Victory!`;
};

function renderBoard() {
    gNums = getRandomArray(gBoardSize);
    strHTML = '';
    var originalLength = gNums.length
    for (var i = 0; i < Math.sqrt(originalLength); i++) {
        strHTML += `<tr>`;
        for (var j = 0; j < Math.sqrt(originalLength); j++) {
            strHTML += `<td onClick="clicked(this)">${gNums.pop()}</td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board');
    console.log(elBoard);
    elBoard.innerHTML = strHTML;
}

function getRandomArray(length) {
    var nums = [];
    for (var i = 0; i < length; i++) {
        nums[i] = i + 1;
    }

    for (j = 0; j < nums.length; j++) {
        randomIdx = getRandomInteger(0, nums.length);
        var currNum = nums[j];
        nums[j] = nums[randomIdx];
        nums[randomIdx] = currNum;
    }
    return nums;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}