
var sonnet = document.getElementById("sonnet");
// 2. Take the contents of the sonnet div and place it in a variable
var sonnetText = sonnet.innerHTML;


// 3. Find and output the starting position of the word "orphans"
console.log('"orphans" are found at: ', sonnetText.indexOf("orphans"));

// 4. Output the number of characters in the sonnet
console.log('Character Count: ', (sonnetText.length + 1));

// 5. Replace the first occurance of the string "winter" with "yuletide"
var newSonnet = sonnetText.replace('winter', 'yuletide');

// 6. Replace all occurances of the string "the" with "a large"
var newerSonnet = newSonnet.replace(/ the /gi, ' a large ');

// 7. Set the content of the sonnet div with the new string
sonnet.innerHTML = newerSonnet;