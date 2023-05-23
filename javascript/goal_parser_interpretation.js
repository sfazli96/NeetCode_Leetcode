/*
1678. Goal Parser Interpretation
Easy
1.3K
82
Companies
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

Example 1:

Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".
Example 2:

Input: command = "G()()()()(al)"
Output: "Gooooal"
Example 3:

Input: command = "(al)G(al)()()G"
Output: "alGalooG"

*/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str = ''
    for (let i = 0; i < command.length; i++) {
        let c = command[i]
        if (c === "G") {
            str += c
        }
        if (c === "(" && command[i + 1] === ")") {
            str += 'o'
            i++
        }
        if (c === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
            str += 'al'
            i += 3
        }
    }

    return str
};
