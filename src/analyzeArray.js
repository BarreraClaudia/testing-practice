export function analyzeArray(array) {
  let object = {
    average: array.reduce((acc, cv) => acc + cv, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}
