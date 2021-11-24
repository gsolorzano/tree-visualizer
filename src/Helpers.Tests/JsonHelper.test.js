import { Replacer, HasJsonStructure, IsJsonArray } from "../Helpers/JsonHelper";

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

test("HasJsonStructure should return true for valid json", () => {
  // Arrange
  let json = `{"name":"Test"}`;

  // Act
  let actual = HasJsonStructure(json);

  // Assert
  expect(actual).toEqual(true);
});

test("HasJsonStructure should return false for invalid json", () => {
  // Arrange
  let json = "Test";

  // Act
  let actual = HasJsonStructure(json);

  // Assert
  expect(actual).toEqual(false);
});

test("IsJsonArray should return true for valid json with array", () => {
  // Arrange
  let json = "[1,2,3]";

  // Act
  let actual = IsJsonArray(json);

  // Assert
  expect(actual).toEqual(true);
});

test("IsJsonArray should return false for invalid json with array", () => {
  // Arrange
  let json = `{"name":"Test"}`;

  // Act
  let actual = IsJsonArray(json);

  // Assert
  expect(actual).toEqual(false);
});
