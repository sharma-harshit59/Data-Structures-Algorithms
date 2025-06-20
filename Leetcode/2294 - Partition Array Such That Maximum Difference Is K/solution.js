var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b);
    let totalSubSeq = 1;
    let currMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - currMin) > k) {
            totalSubSeq++;
            currMin = nums[i];
        }
    }
    return totalSubSeq;
};