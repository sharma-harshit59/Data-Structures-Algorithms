var isValid = function(s) {
    if (s.length % 2) {
        return false;
    } else {
        let stack = [];
        let poppedChar;
        let flag = true;
        for (let i = 0; i < s.length; i++) {
            switch (s[i]) {
                case '(': stack.push('('); break;
                case '{': stack.push('{'); break;
                case '[': stack.push('['); break;
                case ')': poppedChar = stack.pop(); flag = (poppedChar == '('); break;
                case '}': poppedChar = stack.pop(); flag = (poppedChar == '{'); break;
                case ']': poppedChar = stack.pop(); flag = (poppedChar == '['); break;
            }
            if (!flag) break;
        }
        return flag && !(stack.length);
    }
};