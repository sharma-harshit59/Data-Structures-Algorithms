def kthCharacter(self, k: int) -> str:
    def find_char(k: int) -> str:
        if k == 1:
            return 'a'

        length = 1
        while length < k:
            length *= 2

        half = length // 2

        if k <= half:
            return find_char(k)
        else:
            char = find_char(k - half)
            shifted = (ord(char) - ord('a') + 1) % 26
            return chr(ord('a') + shifted)

    return find_char(k)