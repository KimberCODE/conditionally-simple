/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(string) {
  if (string.length > 20) {
    return "That's a long string!"
  }
}

function isItMedium(string) {
  if (string.length >= 10 && string.length <= 20) {
    return "That's a regular sized string!";
  }
}

function isItShort(string) {
  if (string.length < 10) {
    return "That's a small string!";
  }
  else {
    return "That's not a small string!";
  }
}

function howLongIsMyString(string) {
  if (string.length > 20) {
    return "That's a long string!";
  }
  if (string.length >= 10 && string.length <= 20) {
    return "That's a regular sized string!";
  }
  if (string.length < 10) {
    return "That's a small string!";
  }
}

function personsHeight(instructor) {
  if (instructor == "Shaq"){
    return 85;
  }
  if (instructor == "Zooey"){
    return 65;
  }
return "I don't know everyone's height!";
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