/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(string) {
  if (string.length > 20) {
    return "That's a long string!"
  }
}

// function isItMedium(string) {
//   if(string.length > 10  && string.length <= 20){
// }

function isItShort(string) {
  if (string.length < 10) {
    return "That's a small string.";
  }
  else (string.length >= 10); {
    return "That's not a small string!";
  }
}

function  howLongIsMyString(string) {
  if(string.length > 20) {
    return "That's a long string!";
  }
  if(string.length >=10 && string.length <= 20) {
    return "That's a regular sized string!";
  }
  if(string.length < 10) {
    return "That's a small string!";
  }
}

function personsHeight(instructorsHeight) {
instructorsHeight = {
  "Shaq": 85,
  "Zooey": 65,
}
}
/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}