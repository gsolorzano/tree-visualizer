import Replacer from "../Helpers/JsonHelper";

test("Replacer should ignore null values", () => {
  // Arrange
  let expected = `{"name":"Test"}`;
  let json = {
    id: null,
    name: "Test",
  };

  // Act
  let actual = JSON.stringify(json, Replacer);

  // Assert
  expect(actual).toEqual(expected);
});

test("Replacer should ignore isSmallestDeepest element", () => {
  // Arrange
  let expected = `{"name":"Test"}`;
  let json = {
    isSmallestDeepest: true,
    name: "Test",
  };

  // Act
  let actual = JSON.stringify(json, Replacer);

  // Assert
  expect(actual).toEqual(expected);
});
