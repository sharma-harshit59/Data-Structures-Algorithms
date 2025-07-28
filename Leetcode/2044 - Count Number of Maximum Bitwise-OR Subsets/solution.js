var countMaxOrSubsets = function(nums) {
    const getMaxORSubsetCount = (index, currOR) => {
        if (index === nums.length) {
            return (maxOR === currOR) ? 1 : 0;
        } else {
            const include = getMaxORSubsetCount(index + 1, currOR | nums[index]);
            const exclude = getMaxORSubsetCount(index + 1, currOR);
            return include + exclude;
        }
    };

    let maxOR = 0;
    for (const num of nums) maxOR |= num;
    return getMaxORSubsetCount(0, 0);
};