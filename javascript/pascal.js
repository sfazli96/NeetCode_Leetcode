/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [];
    res[0] = [1];
    if(numRows != 1) {
        for(let i = 1; i < numRows; i++) {
            let tmp = [];
            for(let j = 0; j <= i; j++) {
                var num;
                if(j == 0 || j == i) {
                    num = 1;
                } else {
                    num = res[i-1][j-1] + res[i-1][j];
                }
                tmp[j] = num;
            }
            res[i] = tmp;
        }
    }
    return res;
};
