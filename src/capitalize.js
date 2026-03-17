export function capitalizeFirstChar(string) {
  let firstChar = string.charAt(0).toUpperCase();
  let restOfString = string.slice(1);
  return firstChar + restOfString;
}
