"use strict";

/**accepts a string of availble characters and a string representing a doucment
 * that you need to generate
 * return: true if you can generate the document using the characters, 
 * otherwise, return false
 * 
 * you can always generate the empty string
 * the document may contain any characters, including special characters, capital letters, numbers, and spaces
 * 
 * test case: 
 * "abcabc", "aabbccc" => false
 * "abcabc", "aabbc" => true
 * 
 * pseudo code:
 * help function: get the frequency of the characters and document, store them in the map
 * don't need to consider the space
 * loop though document map, check whether the key is contained in character map and 
 *   the value is <= in charancter key value
 *   if not return false
 * 
 * return true
 */

function generateDocument(characters, document) {

  const charFreq = generateFrequency(characters);
  const docFreq = generateFrequency(document);

  for (let [key, value] of docFreq.entries()) {
    if (!((charFreq.has(key)) && (charFreq.get(key) >= value))) return false;
  }
  return true;
}

function generateFrequency(characters) {
  let frequency = new Map();

  for (let char of characters) {
    let count = frequency.get(char) || 0;
    frequency.set(char, count + 1);
  }

  return frequency;
}