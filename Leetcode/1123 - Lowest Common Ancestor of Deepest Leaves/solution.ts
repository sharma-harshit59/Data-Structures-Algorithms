function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    return getLcaDeepestLeaves(root, 1)[0];
};

function getLcaDeepestLeaves(root: TreeNode | null, currentDepth: number): [TreeNode | null, number] {
    if (!(root.left || root.right)) { // !root.left && !root.right
        return [root, currentDepth];
    } else {
        let leftLCA: TreeNode | null;
        let rightLCA: TreeNode | null;
        let leftDepth: number;
        let rightDepth: number;
        if (root.left) {
            let res = getLcaDeepestLeaves(root.left, currentDepth + 1);
            leftLCA = res[0];
            leftDepth = res[1];
        }
        if (root.right) {
            let res = getLcaDeepestLeaves(root.right, currentDepth + 1);
            rightLCA = res[0];
            rightDepth = res[1];
        }
        if (leftLCA && rightLCA) {
            if (leftDepth > rightDepth) {
                return [leftLCA, leftDepth];
            } else if (rightDepth > leftDepth) {
                return [rightLCA, rightDepth];
            } else {
                return [root, leftDepth]; // You can also use rightDepth as both will be same in this case
            }
        } else if (leftLCA) {
            return [leftLCA, leftDepth];
        } else {
            return [rightLCA, rightDepth];
        }
    }
}