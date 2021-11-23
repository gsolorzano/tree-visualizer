const FindMaxHeight = (tree) => {
  if (tree == null) {
    return 0;
  }

  if (tree.left == null && tree.right == null) {
    return 1;
  }
  return Math.max(FindMaxHeight(tree.left), FindMaxHeight(tree.right)) + 1;
};

const FindSamalletDeepestTree = (root, req_node = null) => {
  if (root == null) return req_node;

  let left_ht = FindMaxHeight(root.left);
  let right_ht = FindMaxHeight(root.right);

  if (left_ht > right_ht) {
    req_node = FindSamalletDeepestTree(root.left, req_node);
  } else if (right_ht > left_ht) {
    req_node = FindSamalletDeepestTree(root.right, req_node);
  } else {
    root.isSmallestDeepest = true;
    req_node = root;
    return root;
  }
  return root;
};

export default FindSamalletDeepestTree;
