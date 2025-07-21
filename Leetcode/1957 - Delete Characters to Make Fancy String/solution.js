var makeFancyString = function(s) {
    const res = [s[0], s[1]];
    for (let i = 2; i < s.length; i++) {
        if (!(s[i] === res[res.length - 1] && s[i] === res[res.length - 2])) {
            res.push(s[i]);
        }
    }
    return res.join('');
};