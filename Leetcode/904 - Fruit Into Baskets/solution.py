def totalFruit(self, fruits: List[int]) -> int:
    low: int = 0
    max_fruits: int = 0
    fruit_count: dict[int, int] = defaultdict(int)

    for high in range(len(fruits)):
        fruit_count[fruits[high]] += 1

        while len(fruit_count) > 2:
            fruit_count[fruits[low]] -= 1
            if fruit_count[fruits[low]] == 0:
                del fruit_count[fruits[low]]
            low += 1

        max_fruits = max(max_fruits, high - low + 1)

    return max_fruits