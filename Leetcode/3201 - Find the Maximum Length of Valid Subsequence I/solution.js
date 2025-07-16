var maximumLength = function (nums) {
    let oddCount = 0;
    let evenCount = 0;
    let altCount = 1;
    let prev = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

        if (i > 0 && nums[i] % 2 !== prev % 2) {
            altCount++;
            prev = nums[i];
        }
    }

    return Math.max(oddCount, evenCount, altCount);
};