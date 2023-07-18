// ==UserScript==
// @name     RT - Condition
// @version  1.2
// @grant    none
// @match    https://rt.labs.it/rt/Ticket/Display.html*
// @author   Tommy x Endri
// ==/UserScript==

//var str = document.getElementsByTagName("h1")[0].innerHTML;
//var res = str.replace(/#/, "[LABS #").replace(/:/, "]");
//document.getElementsByTagName("h1")[0].innerHTML = res;

// Wait for the page to fully load
window.addEventListener('load', function() {
   // Get the CONDITION element
   var condition = document.getElementById('CF-24-ShowRow');
   if (condition) {
     // Get the label element
     var label = condition.getElementsByClassName('label')[0];
     if (label) {
       // Get all the links in the value element
       var value = condition.getElementsByClassName('value')[0];
       var links = value.getElementsByTagName('a');


       if (links.length > 0) {
         // Add an event listener to open all the links when the label is clicked
         label.addEventListener('click', function() {

           runpls(links);
           // Open each link in a new tab
           console.log(links[2].href);

         });
         // Make the label a clickable link
         label.style.cursor = 'pointer';
       }

       function runpls(links) {
         for (let i = 0; i < links.length; i ++){
         //   setTimeout(() => window.open((links[i].href), (i + 1) * 1000))
         //   console.log((i + 1) * 1000);
         //
         const start = new Date().getTime()
         while (( new Date().getTime() - start) < (i + 1) * 100) {}
         window.open(links[i].href, '_blank');
         window.focus();
       }}
     }
   }
});
