
var sonnet = document.getElementById("sonnet");
var preNode = document.createElement("pre");

// 2. Take the contents of the sonnet div and place it in a variable
var sonnetText = sonnet.innerHTML;

sonnetText = sonnetText.replace(/\<pre\>|\<\/pre\>/g, "");

// 3. Find and output the starting position of the word "orphans"
console.log('"orphans" are found at position: ', sonnetText.indexOf("orphans"));

// 4. Output the number of characters in the sonnet
console.log('Character Count: ', (sonnetText.length + 1));

// 5. Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnetText.replace('winter', 'yuletide');

// 6. Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.replace(/ the |The /gi, ' a large ');

var sonnetNode = document.createTextNode(newerSonnet);

preNode.appendChild(sonnetNode);

// 7. Set the content of the sonnet div with the new string
sonnet.replaceChild(preNode, sonnet.childNodes[1]);