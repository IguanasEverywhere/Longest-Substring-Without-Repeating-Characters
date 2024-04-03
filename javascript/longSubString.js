function lengthOfLongestSubstring(s) {
  // have arr uniqueChars = []
  // have two pointers, i and j
  // have variable longest = 0
  // iterate over s
    // if length of uniqueChars > longest, update longest to be the length of uniqueChars
    // i starts at 0, j starts at i + 1
    // push char[i] to uniqueChars
    // if char[j] is not in uniqueChars, push it to uniqueChars, increment j
    // if char[j] IS in uniqueChars, reset uniqueChars, increment i, reset j to i + 1
  // return longest

  if (s.length === 0) {
    return 0;
  }

  let uniqueChars = [];
  let longest = 1;

  for (let i = 0; i < s.length; i++) {

    uniqueChars.push(s[i]);

    for (let j = i + 1; j < s.length; j++) {
      if (!uniqueChars.includes(s[j])) {
        uniqueChars.push(s[j]);
        if (uniqueChars.length > longest) {
          longest = uniqueChars.length;
        }
      } else {
        uniqueChars = [];
        break;
      }
    }
  }
  return longest;
}

if (require.main === module) {

// add your own tests in here
console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("abcabcbb"));

console.log("")

console.log("Expecting: 3");
console.log("=>", lengthOfLongestSubstring("pwwkew"));

console.log("")

console.log("Expecting: 0");
console.log("=>", lengthOfLongestSubstring(""));

console.log("")

console.log("Expecting: 5");
console.log("=>", lengthOfLongestSubstring("abcde"));

console.log("")

console.log("Expecting: 4");
console.log("=>", lengthOfLongestSubstring("abcda"));

}

module.exports = lengthOfLongestSubstring

// Please add your pseudocode to this file
// And a written explanation of your solution