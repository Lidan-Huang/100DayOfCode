// const _ = require('lodash');

// function sayHello() {
//   console.log('Hello, World');
// }

// _.times(5, sayHello);

// justify("This is a good sentence to try.", 13); // ->
// This   is   a
// good sentence
// to try.

/**
 * "Hi!", 13 =>  "Hi!"
 * split the string to array
 * loop through the array
 *    count each word length, consider the following space between two words
 * if the words length is bigger than 13, couldn't the last word,
 * and I need to put space between each words of the line, make sure no space in beginning and ending
 * repeat until no word left in the array
*/

// function justify(str, n) {
//   if (str.length <= n) return str;
//   // let newStr = "";

//   const words = str.split(" ");
//   let subWords = [];

//   let count = 0;
//   for (let i = 0; i < words.length; i++) {
//     const lenOfWord = words[i].length;
//     count += lenOfWord;
//     subWords.push(words[i]);
//     if ((count + subWords.length - 1) <= n) {     
//       continue;
//     } else {
//       subWords.pop();
//       count -= words[i];
//       const spaces = n - count;
//       const eachSpace = Math.floor(spaces / (subWords.length - 1));
//       for (let j = 0; j < subWords.length - 1; j++) {
//          for (let k = 0; k < eachSpace; k++) {
//            subWords.splice(j + 1, 0, " ");
//          }
//       }
//       const spaceLeft = spaces - (eachSpace * (subWords.length - 1));
//       if (spaceLeft === 0) continue;
//       if (spaceLeft > 0) {
//         for (let k = 0; k < subWords.length; k++) {
//           if (spaceLeft > 0) {
//             if (subWords[k] !== " ") {
//               subWords.splice(k + 1, 0, " ");
//               spaceLeft--;
//             } else {
//               continue;
//             }
//           }
//         }
//       }

//       i--;
//     }
//   }

//   return subWords.join("");
// }

function textJustify(str, maxWidth) {
  let result = [];

  const words = str.split(" ");

  let i = 0;
  let currLine = [];
  let currLen = 0;
  while (i < words.length) {
    let wordLen = words[i].length;
    if ((currLen + wordLen) <= maxWidth) {
      currLine.push(words[i]);
      currLen = currLen + wordLen + 1;
      i++;
    } else {
      let spaces = maxWidth - currLen + currLine.length;
      if (currLine.length === 1) {
        for (let i = 0; i < spaces; i++) {
          currLine[0] += " ";
        }
      } else {
        let j = 0;
        while (spaces > 0) {
          if (j < currLine.length - 1) {
            currLine[j] += " ";
            j++;
            spaces--;
          } else {
            j = 0;
          }
        }
      }

      result.push(currLine.join(""));
      currLine = [];
      currLen = 0;
    }
  }

  //for the last line, all the words should align with the left side,
  //and put all the left spaces on the right side.
  for (let i = 0; i < currLine.length - 1; i++) {
    currLine[i] += " ";
  }
  let spacesLeft = maxWidth - currLen + 1;
  for (let i = 0; i < spacesLeft; i++) {
    currLine[currLine.length - 1] += " ";
  }
  result.push(currLine.join(""));
  return result;
}
