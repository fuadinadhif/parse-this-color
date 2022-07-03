function parseRGBDecPercent(color) {
  color = color
    .replace(/(rgba?|\(|\)|,|\/)/gi, " ")
    .split(" ")
    .filter((value) => value !== "")
    .map((value, index) => {
      if (value.endsWith("%")) {
        value = value.replace("%", "");
        if (index === 3) {
          return Number(value);
        } else {
          return Math.min((Number(value) * 255) / 100, 255);
        }
      } else {
        return Math.min(Number(value), 255);
      }
    });

  color = color.map((item) => Math.abs(item));
  return color;
}

module.exports = parseRGBDecPercent;
