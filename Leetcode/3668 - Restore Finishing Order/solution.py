def recoverOrder(self, order: List[int], friends: List[int]) -> List[int]:
    friendIds = set(friends)
    res = []
    for id in order:
        if id in friendIds:
            res.append(id)
    return res