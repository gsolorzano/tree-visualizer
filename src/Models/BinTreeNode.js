class BinTreeNode {
  id;
  left;
  right;
  isSmallestDeepest;

  constructor(id, left = null, right = null) {
    this.id = id;
    this.left = left;
    this.right = right;
    this.isSmallestDeepest = false;
  }
}

export default BinTreeNode;
