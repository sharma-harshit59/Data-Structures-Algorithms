function subsetXORSum(nums: number[]): number {

    function getSubsetXORSum(currentIndex: number, XORSum: number) {
        if (currentIndex == nums.length) {
            subsetXorSum += XORSum;
        } else {
            getSubsetXORSum((currentIndex + 1), XORSum ^ nums[currentIndex]);
            getSubsetXORSum((currentIndex + 1), XORSum);
        }
    }

    let subsetXorSum: number = 0;
    getSubsetXORSum(0, 0);
    return subsetXorSum;
};