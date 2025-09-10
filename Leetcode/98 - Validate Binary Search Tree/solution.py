def isValidBST(root: Optional[TreeNode]) -> bool:
    def validate(node: Optional[TreeNode], min_node: Optional[TreeNode], max_node: Optional[TreeNode]) -> bool:
        if not node:
            return True

        if (min_node and node.val <= min_node.val) or (max_node and node.val >= max_node.val):
            return False

        return validate(node.left, min_node, node) and validate(node.right, node, max_node)

    return validate(root, None, None)