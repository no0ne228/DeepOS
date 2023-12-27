/*
 * Copyright 2023 KolibriKing
 */

// /sys/init.js

// This is actual DeepOS kernel, it creates and loades necessary functions

// System functions
console.log('Initializing system... [/sys/init.js]');

function importScript(scriptName, execOnLoad) {
  console.log("Importing " + scriptName + "...");
  // Function to load scripts
  var script = document.createElement('script'); // Create script
  script.type = 'module';
  if (!(scriptName[0] == '/')) { // Check if script direction is NOT absolute
    script.src = "/sys/lib/" + scriptName + ".js"; // Get script direction
  } else {
    script.src = scriptName;
  }
  var scriptNameArray = []; // Initialize scriptName Array
  var scriptId = ''; // Define script id
  for (char of scriptName) { // Convert scriptName to Array
    scriptNameArray.push(char);
  }
  if (scriptNameArray.includes('/')) { // Check if script is nested into other direcrory
    var scriptId = ""; // Define script id to include into html tag
    for (char of scriptName) { // Loop through scriptName
      if (!(char == '/')) { // Check if current character is NOT '/'
        scriptId += char; // Add character to scriptId
      } else { // If character is '/'
        scriptId += '__'; // Add '__' instead of char
      }
    }
    script.id = 'importScript_' + scriptId; // Set script id
    document.querySelector('body').appendChild(script); // Append script
  } else {
    script.id = 'importScript_' + scriptName; // Set script id
    document.querySelector('body').appendChild(script); // Append script
  }
}
