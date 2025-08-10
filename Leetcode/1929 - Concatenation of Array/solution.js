var getConcatenation = function(nums) {
    const ans = [...nums];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    return ans;
};