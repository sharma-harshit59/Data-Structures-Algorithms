var subsetXORSum = function (nums) {

    var getSubsetXORSum = function (currentIndex, XORSum) {
        if (currentIndex == nums.length) {
            subsetXorSum += XORSum;
        } else {
            getSubsetXORSum((currentIndex + 1), (XORSum ^ nums[currentIndex]));
            getSubsetXORSum((currentIndex + 1), XORSum);
        }
    }

    let subsetXorSum = 0;
    getSubsetXORSum(0, 0);
    return subsetXorSum;
};