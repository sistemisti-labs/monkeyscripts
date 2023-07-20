// ==UserScript==
// @name RT - Title
// @description Script RT
// @version 1.2
// @grant none
// @author Endri
// @match https://rt.labs.it/rt/Ticket/*
// ==/UserScript==

var t = document.getElementById('header');
var queue = document.getElementsByClassName('queue')[0].getElementsByClassName('value');
var text = t.getElementsByTagName('h1');

for (var i = 0; i < text.length; i++){
  const txtarray = text[i].innerHTML.split(":");
  var testo = "[LABS " + txtarray[0] + "]";
  var rest = "";
  for (var j = 1; j < txtarray.length; j++){
    rest += txtarray[j];
  }
  if ( queue[0].innerText == 'CESIA' ) {
    rest += " ";
    text[i].innerHTML = rest.concat(testo);
  } else {
    text[i].innerHTML = testo.concat(rest);
  }
}

