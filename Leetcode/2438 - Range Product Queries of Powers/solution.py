def productQueries(self, n: int, queries: List[List[int]]) -> List[int]:
    MOD = 10**9 + 7
    powers = []
    p = 1

    while p <= n:
        if (n & p) != 0:
            powers.append(p)
        p <<= 1

    answers = []
    for left, right in queries:
        product = 1
        for i in range(left, right + 1):
            product = (product * powers[i]) % MOD
        answers.append(product)
        
    return answers