/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let reverseWord = words.map(word => word.split("").reverse().join(""))
    // console.log(strSplit)
    for (let i = 0; i < reverseWord.length; i++) {
        let reversed = reverseWord[i]
        if (reversed === words[i]) {
            return words[i]
        }
    }
    return ""
};
