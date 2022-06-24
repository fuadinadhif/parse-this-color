// parse any colors to hexadecimal values
function parseColor(color) {
  if (["rgb", "hsl"].some((format) => color.startsWith(format))) {
    const separator = color.indexOf(",") > -1 ? "," : " ";
    const values = color
      .substring(color.indexOf("(") + 1)
      .replace(")", "")
      .split(separator)
      .map((value) => Number(value));
    return values;
  }
  if (color.startsWith("#")) {
  }
}

function isLight(color) {
  const values = parseColor(color);
  const maxRGB = Math.max(...values);
  const minRGB = Math.min(...values);
  const result = (maxRGB + minRGB) / 255;
  console.log(maxRGB, minRGB, result);
}

function nameToRGB(name) {
  const tempDiv = document.createElement("div");
  tempDiv.style.color = name;

  document.body.appendChild(tempDiv);

  const compStyle = window.getComputedStyle(tempDiv);
  const propValue = compStyle.getPropertyValue("color");

  document.body.removeChild(tempDiv);

  return propValue;
}

isLight("rgb(0, 0, 0");
