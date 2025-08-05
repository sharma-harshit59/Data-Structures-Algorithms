def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
    count: int = 0
    for fruit in fruits:
        placed: bool = False
        for i in range(len(baskets)):
            if baskets[i] >= fruit:
                baskets[i] = 0
                placed = True
                break
        if not placed:
            count += 1
    return count