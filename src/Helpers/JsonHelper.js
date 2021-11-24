const Replacer = (key, value) => {
  if (key === "isSmallestDeepest") return undefined;
  if (value === null) return undefined;
  else return value;
};

const HasJsonStructure = (str) => {
  if (typeof str !== "string") return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === "[object Object]" || type === "[object Array]";
  } catch (err) {
    return false;
  }
};

const IsJsonArray = (str) => {
  var object = JSON.parse(str);

  return Array.isArray(object);
};

export { Replacer, HasJsonStructure, IsJsonArray };
