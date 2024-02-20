export const hasDuplicateValues = (array, target) => {
  const uniqueItems = new Set();
  for (const item of array) {
    if (uniqueItems.has(item[target])) {
      return true;
    }
    uniqueItems.add(item[target]);
  }
  return false;
};
