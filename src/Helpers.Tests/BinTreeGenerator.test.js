import GenerateTree from "../Helpers/BinTreeGenerator";
import Replacer from "../Helpers/JsonHelper";

test("GenerateTree returns valid json", () => {
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
