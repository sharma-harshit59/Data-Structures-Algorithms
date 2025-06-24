function maxArea(height: number[]): number {
    let start: number = 0;
    let end: number = height.length - 1;
    let maxContainer: number = 0;

    while (start < end) {
        const h: number = Math.min(height[start], height[end]);
        const width: number = end - start;
        maxContainer = Math.max(maxContainer, h * width);

        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return maxContainer;
};