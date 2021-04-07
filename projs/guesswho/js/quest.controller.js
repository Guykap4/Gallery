'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);
$('.btn-start').click(onStartGuessing);
$('.btn-yes').click({ ans: 'yes' }, onUserResponse);
$('.btn-no').click({ ans: 'no' }, onUserResponse);
$('.btn-add-guess').click(onAddGuess);
$('.btn-end').click(onEndGame);

function init() {
  console.log('Started...');
  createQuestsTree();
}

function onStartGuessing() {
  $('.game-start').hide();
  renderQuest();
  $('.quest').show();
}

function renderQuest() {
  $('.quest h2').text(getCurrQuest().txt);
}

function onUserResponse(ev) {
  var res = ev.data.ans;
  if (isChildless(getCurrQuest())) {
    if (res === 'yes') {
      $('.quest').hide(1);
      $('.game-end').show(1);
    } else {
      $('.quest').hide(1);
      $('.new-quest').show(1);
    }
  } else {
    gLastRes = res;
    moveToNextQuest(`${res}`);
    renderQuest();
  }
}

function onAddGuess(ev) {
  ev.preventDefault();
  var newGuess = $('#newGuess').val();
  var newQuest = $('#newQuest').val();
  console.log(gLastRes);
  console.log(getCurrQuest());
  console.log(newGuess, newQuest);
  addGuess(newQuest, newGuess, gLastRes)
  onRestartGame();
}

function onRestartGame() {
  $('.new-quest').hide();
  $('.game-end').hide();
  $('.game-start').show();
  gLastRes = null;
  resetCurrQuest();
}

function onEndGame() {
  $('.game-end').hide();
  gLastRes = null;
  resetCurrQuest();
  $('.game-start').show();
}