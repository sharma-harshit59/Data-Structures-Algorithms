var maximumTripletValue = function(nums) {
    let maxTripletScore = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            for (let k = j+1; k < nums.length; k++) {
                let tripletScore = (nums[i] - nums[j]) * nums[k];
                maxTripletScore = Math.max(maxTripletScore, tripletScore);
            }
        }
    }
    return maxTripletScore;
};