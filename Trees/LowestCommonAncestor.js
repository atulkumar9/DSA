/**
 * The intution is to find the path from the root to both nodes p and q, and then compare the paths to find the last common node.
 * We can use a depth-first search (DFS) approach to find the path from the root to each target node. 
 * We can store the path in an array and return it once we find the target node.
 * After we have the paths for both nodes, we can compare them to find the last common node, which will be the lowest common ancestor (LCA).
 * Time Complexity: O(n) where n is the number of nodes in the tree, as we need to visit each node once to find the paths.
 * Space Complexity: O(h) where h is the height of the tree, due to the recursive call stack and the space used to store the paths. In the worst case (skewed tree), this can be O(n).
 * Resource: https://takeuforward.org/data-structure/lowest-common-ancestor-in-binary-tree/
 * Better explainer video :- https://www.youtube.com/watch?v=13m9ZCB8gjw
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node, target, out) => {
        if (node === null) {
            return false;
        }
        out.push(node);
        if (node === target) {
            return true;
        }
        if (dfs(node.left, target, out) || dfs(node.right, target, out)) {
            return true;
        }
        out.pop();
        return false;
    }
    const ansestorsP = []
    dfs(root, p, ansestorsP);
    const ansestorsQ = [] 
    dfs(root, q, ansestorsQ);
    let len = Math.min(ansestorsP.length, ansestorsQ.length);
    let lca = root;
    for (let i = 0; i < len; i++) {
        if (ansestorsP[i] !== ansestorsQ[i]) {
            break;
        }
        lca = ansestorsP[i];
    }
    return lca;
};