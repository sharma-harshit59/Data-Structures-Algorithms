def maximumTripletValue(self, nums):
    max_triplet_score = 0
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            for k in range(j+1, len(nums)):
                triplet_score = (nums[i] - nums[j]) * nums[k]
                max_triplet_score = max(max_triplet_score, triplet_score)
    return max_triplet_score