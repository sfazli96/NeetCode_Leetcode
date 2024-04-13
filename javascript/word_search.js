let exist = function(board, word) {
    // using depth first search algorithm
    const dfs = (row, col, index) => {
        if (index === word.length) {
            return true // found all characters of the word
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].legnth || board[row][col] !== word[index]) {
            return false // no characters match
        }

        const originalCharacter = board[row][col]
        board[row][col] = '' // this shows it was visited

        // basically recurisvely calling it back to the function dfs
        const foundIt = dfs(row + 1, col, index + 1) ||
                     dfs(row - 1, col, index + 1) ||
                     dfs(row, col + 1, index + 1) ||
                     dfs(row, col - 1, index + 1);

        board[row][col] = originalCharacter

        return foundIt
    }
    for (let i = 0; i < board.length; i++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[i][col] === word[0] && dfs(i, col, 0)) {
                return true // found the word
            }
        }
    }
    return false
};
