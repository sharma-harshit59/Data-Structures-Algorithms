var maxSubsequence = function (nums, k) {
    return nums
        .map((num, index) => [num, index]) // Add Index with each number
        .sort((a, b) => b[0] - a[0])       // Sort by value in descending order
        .slice(0, k)                       // Retain Top-K indices
        .sort((a, b) => a[1] - b[1])       // Sort by index in increasing order
        .map((el) => el[0])                // Return the number array
};