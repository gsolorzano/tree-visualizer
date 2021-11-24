// Finds the maximum height of the tree
const FindMaxHeight = (tree) => {
  // First base case, tree is null
  if (tree == null) {
    return 0;
  }

  // Second base case, tree has no children, height is 1
  if (tree.left == null && tree.right == null) {
    return 1;
  }

  // Recursive call
  // Returns the max +1 (current node) between the height of the left and right
  return Math.max(FindMaxHeight(tree.left), FindMaxHeight(tree.right)) + 1;
};

// Finds the Smallest sub tree with deepest nodes
// Receives the tree from which to find the smallest sub tree with deepest nodes
const FindSamalletDeepestTree = (tree) => {
  // Base case, root is null, return the current
  if (tree == null) return null;

  // Find the height of both the left and right child
  let left_ht = FindMaxHeight(tree.left);
  let right_ht = FindMaxHeight(tree.right);

  // If left height is larger than right height, then the deepest node is on the left
  // We calculate recursively with the left child
  if (left_ht > right_ht) {
    FindSamalletDeepestTree(tree.left);
  }

  // If right height is larger than left height, then the deepest node is on the right
  // We calculate recursively with the right child
  else if (right_ht > left_ht) {
    FindSamalletDeepestTree(tree.right);
  }

  // Both childs of this node have same height which means we cannot find another
  // subtree, we set the boolean flag to indicate this is the Smallest Deepest Tree
  else {
    tree.isSmallestDeepest = true;
    return tree;
  }
  return tree;
};

export default FindSamalletDeepestTree;
