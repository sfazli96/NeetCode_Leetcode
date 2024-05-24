let merge = function(intervals) {
    // checks if the input intervals has 1 or more zero elements and if it does, we dont need to merge.
    if (intervals.length <= 1) {
        return intervals;
    }

    // Different comparison functions sorting: by intervals from a[0], one by b[0], one by a[0] then b[0] and one by b[0] then a[1]
    // This shows that the intervals array is being sorted by a custom function, that takes in two elements: a and b

    intervals.sort(function(a, b) {
        if (a[0] <= b[0]) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        }

        return a[0] > b[0] ? 1 : -1;
    })

    const mergedIntervals = [intervals[0]]; // basically created an array on top of the sorted interval array.

    for (let i = 1; i < intervals.length; i++) { // interate thru the interval array
        let interval = intervals[i]; // get the index of it
        let prevInterval = mergedIntervals[mergedIntervals.length - 1]; // find the previous interval by


        if (interval[0] <= prevInterval[1]) {
            prevInterval[1] = Math.max(prevInterval[1], interval[1]);
        } else { // if it overlaps then we can update the end point of it to the max current end poin.
            mergedIntervals.push(interval);
        }
    }

    return mergedIntervals;
};
