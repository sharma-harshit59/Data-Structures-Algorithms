int searchInsert(vector<int>& nums, int target) {
    int firstIdx = 0, lastIdx = nums.size() - 1;
    int midIdx;

    while (firstIdx <= lastIdx) {
        midIdx = firstIdx + ((lastIdx - firstIdx) / 2);
        if (nums[midIdx] == target) return midIdx;
        if (nums[midIdx] < target) firstIdx = midIdx + 1;
        else lastIdx = midIdx - 1;
    }

    return (nums[midIdx] < target) ? (midIdx + 1) : midIdx;
}