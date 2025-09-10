function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, minNode: TreeNode | null, maxNode: TreeNode | null): boolean {
        if (!node) return true;

        if ((minNode && (node.val <= minNode.val)) || (maxNode && (node.val >= maxNode.val))) {
            return false;
        }

        return validate(node.left, minNode, node) && validate(node.right, node, maxNode);
    }

    return validate(root, null, null);
};