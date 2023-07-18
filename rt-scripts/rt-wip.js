// ==UserScript==
// @name RT - WIP
// @description Script RT
// @version 1.2
// @grant none
// @author Endri
// @match https://rt.labs.it/rt/Dashboards/41326/*
// ==/UserScript==

var trs = document.getElementsByTagName('tr');
var user = document.getElementsByClassName('current-user');

for (var i = 1; i <= trs.length; i++) {
  var tds = trs[i].getElementsByTagName('td');

  for (var l = 0; l < tds.length; l++) {
    switch(String(tds[7].getElementsByTagName('span')[0].innerHTML)){
      case "high":
        tds[l].style.backgroundColor = "rgb(255, 115, 115)";
        break;
      case "medium":
        tds[l].style.backgroundColor = "rgb(255, 197, 97)";
        break;
      case "low":
        tds[l].style.backgroundColor = "rgb(255, 246, 120)";
        break;
      case "none":
        tds[l].style.backgroundColor = "rgb(222, 222, 222)";
        break;
      default:
        tds[l].style.backgroundColor = "rgb(222, 222, 222)";
        break;
    }
  }
}
