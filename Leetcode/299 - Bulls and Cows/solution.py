def getHint(self, secret: str, guess: str) -> str:
    bulls: int = 0
    secret_map: Dict[str, int] = {}
    guess_map: Dict[str, int] = {}

    for i in range(len(secret)):
        if secret[i] == guess[i]:
            bulls += 1
        else:
            secret_map[secret[i]] = secret_map.get(secret[i], 0) + 1
            guess_map[guess[i]] = guess_map.get(guess[i], 0) + 1

    cows: int = 0
    for ch in secret_map:
        if ch in guess_map:
            cows += min(secret_map[ch], guess_map[ch])

    return f"{bulls}A{cows}B"