def flowerGame(n: int, m: int) -> int:
    n_even: int = n // 2
    m_even: int = m // 2
    n_odd: int = (n + 1) // 2
    m_odd: int = (m + 1) // 2
    return (n_even * m_odd) + (n_odd * m_even)