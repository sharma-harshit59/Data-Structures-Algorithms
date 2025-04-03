var maximumTripletValue = function(nums) {
    let numsLength = nums.length;
    let maxTripletScore = 0;
    let prefixMax = new Array(numsLength).fill(0);
    prefixMax[0] = nums[0];
    let suffixMax = new Array(numsLength).fill(0);
    suffixMax[numsLength-1] = nums[numsLength-1];
    for (let x = 1; x < numsLength; x++) {
        prefixMax[x] = Math.max(nums[x], prefixMax[x-1]);
    }
    for (let y = numsLength-2; y >= 0; y--) {
        suffixMax[y] = Math.max(nums[y], suffixMax[y + 1]);
    }
    for (let j = 1; j < nums.length-1; j++) {
        let tripletScore = (prefixMax[j-1] - nums[j]) * suffixMax[j+1];
        maxTripletScore = Math.max(maxTripletScore, tripletScore);
    }
    return maxTripletScore;
};