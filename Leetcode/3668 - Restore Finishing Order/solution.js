var recoverOrder = function(order, friends) {
    const friendIds = new Set(friends);
    const res = [];

    for (const id of order) {
        if (friendIds.has(id)) {
            res.push(id);
        }
    }
    
    return res;
};