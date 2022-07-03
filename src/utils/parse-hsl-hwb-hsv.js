function parseHSWLBV(color) {
  color = color
    .replace(/((hsl|hwb|hsv)a?|\(|\)|,|\/)/gi, " ")
    .split(" ")
    .filter((value) => value !== "")
    .map((value, index) => {
      if (index === 0) {
        if (value.endsWith("grad")) {
          value = Math.min(value.replace("grad", "") * 0.9, 360);
          return value;
        } else if (value.endsWith("rad")) {
          value = Math.min((value.replace("rad", "") * 180) / Math.PI, 360);
          return value;
        } else if (value.endsWith("turn")) {
          value = Math.min(value.replace("turn", "") * 360, 360);
          return value;
        } else if (value.endsWith("%")) {
          value = Math.min((value.replace("%", "") / 100) * 360, 360);
          return value;
        } else {
          value = value.replace("deg", "");
          return Math.min(Number(value), 360);
        }
      } else if (index === 3) {
        value = value.replace("%", "");
        return Number(value);
      } else {
        value = value.replace("%", "");
        return Math.min(Number(value), 100);
      }
    });

  color = color.map((item) => Math.abs(item));
  return color;
}

module.exports = parseHSWLBV;
