var lcaDeepestLeaves = function (root) {
    return getLcaDeepestLeaves(root, 1)[0];
};

var getLcaDeepestLeaves = function (root, currentDepth) {
    if (!(root.left || root.right)) {
        return [root, currentDepth];
    } else {
        let leftLCA = null;
        let rightLCA = null;
        let leftDepth = 0;
        let rightDepth = 0;

        if (root.left) {
            const res = getLcaDeepestLeaves(root.left, currentDepth + 1);
            leftLCA = res[0];
            leftDepth = res[1];
        }
        if (root.right) {
            const res = getLcaDeepestLeaves(root.right, currentDepth + 1);
            rightLCA = res[0];
            rightDepth = res[1];
        }

        if (leftLCA && rightLCA) {
            if (leftDepth > rightDepth) {
                return [leftLCA, leftDepth];
            } else if (rightDepth > leftDepth) {
                return [rightLCA, rightDepth];
            } else {
                return [root, leftDepth];
            }
        } else if (leftLCA) {
            return [leftLCA, leftDepth];
        } else {
            return [rightLCA, rightDepth];
        }
    }
}