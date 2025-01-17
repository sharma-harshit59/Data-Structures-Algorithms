var doesValidArrayExist = function(derived) {
    let lastBit = 0, initialBit = 0;
    for (let i = 0; i < derived.length; i++) {
        lastBit ^= derived[i];
    }
    return (lastBit == initialBit);
};