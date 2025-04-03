def maximumTripletValue(nums):
    nums_length = len(nums)
    max_triplet_score = 0
    prefix_max = [0] * nums_length
    prefix_max[0] = nums[0]
    suffix_max = [0] * nums_length
    suffix_max[nums_length - 1] = nums[nums_length - 1]

    for x in range(1, nums_length):
        prefix_max[x] = max(nums[x], prefix_max[x - 1])
    for y in range(nums_length - 2, -1, -1):
        suffix_max[y] = max(nums[y], suffix_max[y + 1])
    for j in range(1, nums_length - 1):
        triplet_score = (prefix_max[j - 1] - nums[j]) * suffix_max[j + 1]
        max_triplet_score = max(max_triplet_score, triplet_score)

    return max_triplet_score