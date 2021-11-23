const Replacer = (key, value) => {
  if (key === "isSmallestDeepest") return undefined;
  if (value === null) return undefined;
  else return value;
};

export default Replacer;
