function recoverOrder(order: number[], friends: number[]): number[] {
    const friendIds = new Set(friends);
    const res: number[] = [];

    for (const id of order) {
        if (friendIds.has(id)) {
            res.push(id);
        }
    }
    
    return res;
};