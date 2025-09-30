// Naive Solution
int triangularSum(vector<int>& nums) {
    while (nums.size() > 1) {
        vector<int> temp;
        for (int i = 1; i < nums.size(); i++) {
            temp.push_back((nums[i] + nums[i-1]) % 10);
        }
        nums = temp;
    }
    return nums[0];
}

// Better Solution
int triangularSum(vector<int>& nums) {
    int n = nums.size();
    while (n > 1) {
        for (int i = 1; i < nums.size(); i++) {
            nums[i-1] = (nums[i-1] + nums[i]) % 10; 
        }
        n--;
    }
    return nums[0];
}

// Best Solution
// Complex to code due to Signed Integer Overflow issue for the given constraints
// Explained in solutions