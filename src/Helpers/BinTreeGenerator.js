import BinTreeNode from "../Models/BinTreeNode";

// Method in charge of generating a Binary Tree from an array
// Receives an array to generate a binary tree from
const GenerateTree = (array = []) => {
  // First base case, array is null, undefined or empty should return an empty BinTreeNode
  if (array === null || array === undefined || array.length === 0) {
    return new BinTreeNode();
  }

  // Second base case, tree has no children, returns a BinTreeNode with just the id assigned
  if (array.length === 1) {
    return new BinTreeNode(array[0]);
  }

  // Recursive call to build tree
  // Create a new BinTreeNode with the first element of the array
  // Generate a new BinTreeNode for each children (left and right)
  return new BinTreeNode(
    array[0],
    GenerateTree(array[1]),
    GenerateTree(array[2])
  );
};

export default GenerateTree;
