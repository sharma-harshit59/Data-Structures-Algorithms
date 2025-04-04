class Solution:
    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        return self.getLcaDeepestLeaves(root, 1)[0]
    
    def getLcaDeepestLeaves(self, root: Optional[TreeNode], currentDepth: int) -> Tuple[Optional[TreeNode], int]:
        if not root.left and not root.right:
            return root, currentDepth
        else:
            leftLCA = None
            rightLCA = None
            leftDepth = 0
            rightDepth = 0

            if root.left:
                leftLCA, leftDepth = self.getLcaDeepestLeaves(root.left, currentDepth + 1)

            if root.right:
                rightLCA, rightDepth = self.getLcaDeepestLeaves(root.right, currentDepth + 1)

            if leftLCA and rightLCA:
                if leftDepth > rightDepth:
                    return leftLCA, leftDepth
                elif rightDepth > leftDepth:
                    return rightLCA, rightDepth
                else:
                    return root, leftDepth
            elif leftLCA:
                return leftLCA, leftDepth
            else:
                return rightLCA, rightDepth