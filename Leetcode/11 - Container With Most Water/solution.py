def maxArea(self, height: List[int]) -> int:
    start: int = 0
    end: int = len(height) - 1
    max_container: int = 0

    while start < end:
        h: int = min(height[start], height[end])
        width: int = end - start
        max_container = max(max_container, h * width)

        if height[start] < height[end]:
            start += 1
        else:
            end -= 1

    return max_container