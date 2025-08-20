long long zeroFilledSubarray(vector<int>& nums) {
    long long totCount = 0, count = 0;

    for (int i = 0; i < nums.size(); i++) {
        if (nums[i] == 0) {
            count++;
        } else {
            totCount += ((count * (count + 1)) / 2);
            count = 0;
        }
    }
    totCount += ((count * (count + 1)) / 2);
    
    return totCount;
}