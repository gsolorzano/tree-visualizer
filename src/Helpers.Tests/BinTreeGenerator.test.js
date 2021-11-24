import GenerateTree from "../Helpers/BinTreeGenerator";
import Replacer from "../Helpers/JsonHelper";

test("GenerateTree should return valid json - sample 1", () => {
  // Arrange
  let expected = `{
    "id": "a",
    "left": {
        "id": "b"
    },
    "right": {
        "id": "c"
    }
}`;
  let listInput = ["a", ["b"], ["c"]];

  // Act
  let actual = GenerateTree(listInput);
  let strippedJson = JSON.stringify(actual, Replacer, 4);

  // Assert
  expect(strippedJson).toEqual(expected);
});

test("GenerateTree should return valid json - sample 2", () => {
  // Arrange
  let expected = `{
    "id": 1,
    "left": {
        "id": 2
    },
    "right": {
        "id": 3,
        "left": {},
        "right": {
            "id": 5
        }
    }
}`;
  let listInput = [1, [2], [3, null, [5]]];

  // Act
  let actual = GenerateTree(listInput);
  let strippedJson = JSON.stringify(actual, Replacer, 4);

  // Assert
  expect(strippedJson).toEqual(expected);
});

test("GenerateTree should generate empty tree on null input", () => {
  // Arrange

  // Act
  let actual = GenerateTree(null);
  let strippedJson = JSON.stringify(actual, Replacer, 4);

  // Assert
  expect(strippedJson).toEqual("{}");
});

test("GenerateTree should generate empty tree on empty list", () => {
  // Arrange

  // Act
  let actual = GenerateTree([]);
  let strippedJson = JSON.stringify(actual, Replacer, 4);

  // Assert
  expect(strippedJson).toEqual("{}");
});
