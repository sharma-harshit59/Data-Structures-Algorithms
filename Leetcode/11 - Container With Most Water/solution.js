var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let maxContainer = 0;

    while (start < end) {
        const h = Math.min(height[start], height[end]);
        const width = end - start;
        maxContainer = Math.max(maxContainer, h * width);
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxContainer;
};