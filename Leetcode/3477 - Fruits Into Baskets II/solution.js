var numOfUnplacedFruits = function(fruits, baskets) {
    let count = 0;
    for (let i = 0; i < fruits.length; i++) {
        let placed = false;
        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] >= fruits[i]) {
                baskets[j] = 0;
                placed = true;
                break;
            }
        }
        if (!placed) count++;
    }
    return count;
};