int maximumLength(vector<int> &nums)
{
    int oddCount = 0, evenCount = 0, altCount = 1, prev = nums[0];
    for (int i = 0; i < nums.size(); i++)
    {
        (nums[i] % 2) ? oddCount++ : evenCount++;
        if (i > 0 && (nums[i] % 2 != prev % 2))
        {
            altCount++;
            prev = nums[i];
        }
    }
    return max({evenCount, oddCount, altCount});
}