var xorAllNums = function(nums1, nums2) {
    let res = 0;
    if (nums2.length % 2) {
        for (let i = 0; i < nums1.length; i++) {
            res ^= nums1[i];
        }
    }
    if (nums1.length % 2) {
        for (let j = 0; j < nums2.length; j++) {
            res ^= nums2[j];
        }
    }
    return res;
};