import FindSmallestDeepestTree from "../Helpers/BinTreeSmallestDeepest";
import BinTreeNode from "../Models/BinTreeNode";

test("FindSmallestDeepestTree should find tree root as smallest deepest", () => {
  // Arrange
  let tree = new BinTreeNode("a", new BinTreeNode("b"), new BinTreeNode("c"));

  // Act
  let actual = FindSmallestDeepestTree(tree);

  // Assert
  expect(actual.isSmallestDeepest).toEqual(true);
  expect(actual.left.isSmallestDeepest).toEqual(false);
  expect(actual.right.isSmallestDeepest).toEqual(false);
});

test("FindSmallestDeepestTree should find correct smallest deepest tree", () => {
  // Arrange
  let tree = new BinTreeNode(
    "a",
    new BinTreeNode("b"),
    new BinTreeNode("c", new BinTreeNode("d"), new BinTreeNode("e"))
  );

  // Act
  let actual = FindSmallestDeepestTree(tree);

  // Assert
  expect(actual.isSmallestDeepest).toEqual(false);
  expect(actual.left.isSmallestDeepest).toEqual(false);
  expect(actual.right.isSmallestDeepest).toEqual(true);
});
