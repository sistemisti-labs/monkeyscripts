// ==UserScript==
// @name RT - Color
// @description Script RT
// @version 1.1
// @grant none
// @author Endri
// @match https://rt.labs.it/rt/*
// ==/UserScript==

var trs = document.getElementsByTagName('tr');

var user = document.getElementsByClassName('current-user');

for (var i = 1; i <= trs.length; i++) {
  var tds = trs[i].getElementsByTagName('td');

  if (tds[3].innerHTML == ('open') && tds[4].innerHTML == ('Nobody')){
    for (var j = 0; j < tds.length; j++) {
      tds[j].style.backgroundColor = "rgb(105, 255, 112)";
    }
  }

  /*if (tds[2].innerHTML.match(/WIP/)){
    for (var k = 0; k < tds.length; k++) {
      tds[k].style.backgroundColor = "rgb(122, 122, 122)";
    }
  }*/

  if (tds[2].innerHTML.match(/REP/)){
    for (var k = 0; k < tds.length; k++) {
      tds[k].style.backgroundColor = "rgb(164, 107, 255)";
    }
  }

  if (!tds[2].innerHTML.match(/WIP/) && (!tds[2].innerHTML.match(/REP/)) && tds[4].innerHTML != ('Nobody')){
    for (var l = 0; l < tds.length; l++) {

      switch(String(tds[4].innerHTML)){
        case "egjura":
          tds[l].style.backgroundColor = "rgb(0, 109, 163)";
          break;
        case "mdallomo":
          tds[l].style.backgroundColor = "rgb(61, 245, 255)";
          break;
        case "galvero":
          tds[l].style.backgroundColor = "rgb(255, 0, 0)";
          break;
        case "czuntini":
          tds[l].style.backgroundColor = "rgb(255, 181, 228)";
          break;
        case "barbara.stecchetti":
          tds[l].style.backgroundColor = "rgb(255, 106, 20)";
          break;
        default:
          tds[l].style.backgroundColor = "rgb(255, 223, 41)";
          break;
      }

      //tds[l].style.backgroundColor = "rgb(255, 223, 41)";


      //tds[l].style.color = "white";
      //if(tds[l].getElementsByTagName('a').)
      // tds[l].getElementsByTagName('a').style.color = 'white';
    }
//    switch(String(tds[4].innerHTML)){
//        case "egjura":
//          tds[8].innerHTML = "<img src=\"https://new.labs.it/wp-content/uploads/2022/06/Endri_Giura.png\" width=\"50px\" height=\"50px\" style=\"margin-top:-5px; margin-botton: -30px;\">";
//          //tds[l].style.backgroundColor = "rgb(0, 109, 163)";
//          break;
//        case "mdallomo":
//          tds[8].innerHTML = "<img src=\"https://static.wikia.nocookie.net/shingekinokyojin/images/5/56/Bertholdt_Hoover_%28Anime%29_character_image.png\" width=\"50px\" height=\"50px\">";
//          //tds[l].style.backgroundColor = "rgb(61, 245, 255)";
//          break;
//        case "galvero":
//          //tds[l].style.backgroundColor = "rgb(255, 0, 0)";
//          tds[8].innerHTML = "<img src=\"https://new.labs.it/wp-content/uploads/2022/06/Gian-Alvero-1.jpeg\" width=\"50px\" height=\"50px\">";
//          break;
//        case "czuntini":
//          tds[8].innerHTML = "<img src=\"https://new.labs.it/wp-content/uploads/2022/06/Zuntini-Claudio.png\" width=\"50px\" height=\"50px\">";
//          //tds[l].style.backgroundColor = "rgb(255, 181, 228)";
//          break;
//        case "barbara.stecchetti":
//          tds[8].innerHTML = "<img src=\"https://new.labs.it/wp-content/uploads/2022/06/Barbara_Stecchetti.png\" width=\"50px\" height=\"50px\">";
//          break;
//        default:
//          //tds[l].style.backgroundColor = "rgb(255, 223, 41)";
//          break;
//      }

  }

  //if (!tds[2].innerHTML.match(/WIP/) && (!tds[2].innerHTML.match(/REP/)) && tds[4].innerHTML == user[0].innerHTML){
    ////tds[l].style.backgroundColor = "rgb(50, 209, 191)";
      //tds[l].style.color = "white";
      //if(tds[l].getElementsByTagName('a').)
      // tds[l].getElementsByTagName('a').style.color = 'white';
  //  }
  //}
}
