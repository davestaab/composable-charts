/**
 * given an x and y, return a svg translate string used with the svg transform attribute,
 * @param x
 * @param y
 * @return {string}
 */
export function translate(x, y) {
  return `translate(${x}, ${y})`;
}

/**
 * partially applied function to get a value from data
 * @param key
 * @return {function(*): *}
 */
export function prop(key) {
  return data => data[key];
}
