def fib_generator() -> Generator[int, None, None]:
    prev2: int = 0
    prev1: int = 1

    while True:
        yield prev2
        prev2, prev1 = prev1, prev1 + prev2