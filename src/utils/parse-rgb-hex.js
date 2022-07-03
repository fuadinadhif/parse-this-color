function parseRGBHex(color) {
  color = color.trim().replace("#", "");

  if (color.length === 3 || color.length === 4) {
    color = color.match(/.{1}/g).map((value) => {
      value += value;
      return parseInt(value, 16);
    });
  } else {
    color = color.match(/.{2}/g).map((value) => parseInt(value, 16));
  }

  return color;
}

module.exports = parseRGBHex;
