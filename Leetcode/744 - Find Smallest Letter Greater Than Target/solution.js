var nextGreatestLetter = function (letters, target) {
    let firstIdx = 0;
    let lastIdx = letters.length - 1;

    while (firstIdx <= lastIdx) {
        const midIdx = Math.floor((firstIdx + lastIdx) / 2);

        if (letters[midIdx] <= target) {
            firstIdx = midIdx + 1;
        } else {
            lastIdx = midIdx - 1;
        }
    }

    // If left goes past the array, wrap around
    return letters[firstIdx % letters.length];
};