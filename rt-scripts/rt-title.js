// ==UserScript==
// @name RT - Title
// @description Script RT
// @version 1.1
// @grant none
// @author Endri
// @match https://rt.labs.it/rt/Ticket/*
// ==/UserScript==

var t = document.getElementById('header');
var text = t.getElementsByTagName('h1');

for (var i = 0; i < text.length; i++){
  const txtarray = text[i].innerHTML.split(":");
  var testo = "[LABS " + txtarray[0] + "]";
  var rest = "";
  for (var j = 1; j < txtarray.length; j++){
    rest += txtarray[j];
  }
  text[i].innerHTML = testo.concat(rest);
}
