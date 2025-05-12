class Solution:
    def findEvenNumbers(self, digits: List[int]) -> List[int]:
        # Count occurrences of each digit (0–9)
        count = [0] * 10
        for digit in digits:
            count[digit] += 1
        result = []

        # Try all 3-digit even numbers from 100 to 998
        for num in range(100, 1000, 2):  # step 2 ensures the number is even
            d1 = num // 100
            d2 = (num // 10) % 10
            d3 = num % 10

            # Make a copy of the original digit count
            temp_count = count[:]
            if temp_count[d1] > 0:
                temp_count[d1] -= 1
                if temp_count[d2] > 0:
                    temp_count[d2] -= 1
                    if temp_count[d3] > 0:
                        result.append(num)

        return result