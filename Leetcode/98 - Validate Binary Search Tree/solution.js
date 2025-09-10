var isValidBST = function(root) {
    const validate = (node, minNode, maxNode) => {
        if (!node) return true;

        if ((minNode !== null && (node.val <= minNode.val)) || (maxNode !== null && (node.val >= maxNode.val))) {
            return false;
        }

        return validate(node.left, minNode, node) && validate(node.right, node, maxNode);
    };

    return validate(root, null, null);
};