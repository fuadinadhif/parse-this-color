function parseCMYK(color) {
  color = color
    .replace(/(cmyk|\(|\)|,|\/|%)/gi, " ")
    .split(" ")
    .filter((value) => value !== "")
    .map((value) => Math.min(Number(value), 100));

  color = color.map((item) => Math.abs(item));
  return color;
}

module.exports = parseCMYK;
