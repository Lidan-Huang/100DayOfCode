"use strict";

/**accepts: two strings, one is for magazine[m], the other is for note[n]
 * returns Yes, if all the words in note are from magazine, 
 *      case-sensitive and words frequency matters, otherwise returns No
 * 
 * test case:
 * "give me one grand today night", "give one grand today" => Yes
 * "two times three is not four", "two times two is four" => No
 * 
 * pseudo code:
 * get frequency of two strings and store them separately in Map
 * loop through note frequency, if the word's count is bigger than that in magazine or 
 *  the word is not contained in magazine, return "No"
 * return Yes
 */

function checkMagazine(magazine, note) {
  const freqOfMagazine = getFrequency(magazine);
  const freqOfNote = getFrequency(note);

  for (let key of freqOfNote.keys()) {
    if ((!freqOfMagazine.has(key))
      || (freqOfNote.get(key) > freqOfMagazine.get(key))) {
        return "No";
      }
  }
  return "Yes";
}

function getFrequency(str) {
  let freq = new Map();
  const words = str.split(" ");

  for (let word of words) {
    let count = freq.get(word) || 0;
    freq.set(word, count + 1);
  }
  return freq;
}