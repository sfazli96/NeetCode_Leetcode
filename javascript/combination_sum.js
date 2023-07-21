var combinationSum = function(candidates, target) {
    let newArr = [] // empty array

    if (candidates.length < 1) { // if the length of the array is less than 0, just return empty array
        return newArr
    }

    for (let i = 0; i < candidates.length; i++) { // iterate through the array
        let can = candidates[i] // get the index of the array
        let updatedTarget = target - can // find the updatedTarget

        if (updatedTarget === 0) { // if it equals 0
            newArr.push([can]) // push the index to the newArr
        } else if (updatedTarget > 0) { // if its more than 0
            let subArr = combinationSum(candidates.slice(i), updatedTarget) // recursively call it here, .slice return new arr
            for (let j = 0; j < subArr.length; j++) { // iterate thru the new array to get the unique combination
                newArr.push([can].concat(subArr[j])) // then push it onto newArr array and merge the two arrays
            }
        }
    }
    return newArr // return the new merged arrays

};
