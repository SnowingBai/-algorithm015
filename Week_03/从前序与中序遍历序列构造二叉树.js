/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preIndex = 0;
    const inorderMap = new Map();
    
    for (let i = 0; i < inorder.length; ++i) {
        inorderMap.set(inorder[i], i);
    }
    
    const helper = (left, right) => {
        if (left === right) {
            return null;
        }
        
        const root = preorder[preIndex];
        let node = new TreeNode(root);
        
        preIndex++;
        
        const index = inorderMap.get(root);
        
        node.left = helper(left, index);
        node.right = helper(index + 1, right);
        
        return node;
    }
    
    return helper(0, inorder.length);
};
