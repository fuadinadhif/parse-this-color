const {
  RGBHexPattern,
  RGBDecPercentPattern,
  HSWLBVPattern,
  CMYKPattern,
} = require("./patterns");
const {
  parseRGBHex,
  parseRGBDecPercent,
  parseHSWLBV,
  parseCMYK,
} = require("./utils");
const CSSColors = require("css-color-name");

function parseColor(color) {
  let result = {};
  let parseValues, colorValues, alphaValues;

  if (typeof color != "string") return null;

  // parse color
  if (RGBHexPattern.test(color)) {
    parseValues = parseRGBHex(color);
    result.type = "rgb";
  } else if (RGBDecPercentPattern.test(color)) {
    parseValues = parseRGBDecPercent(color);
    result.type = "rgb";
  } else if (HSWLBVPattern.test(color)) {
    parseValues = parseHSWLBV(color);
    if (color.startsWith("hsl")) result.type = "hsl";
    if (color.startsWith("hwb")) result.type = "hwb";
    if (color.startsWith("hsv")) result.type = "hsv";
  } else if (CMYKPattern.test(color)) {
    parseValues = parseCMYK(color);
    result.type = "cmyk";
  } else if (CSSColors.hasOwnProperty(color)) {
    parseValues = CSSColors[color].dec;
    result.type = "named";
  } else {
    return null;
  }

  // color values
  if (result.type === "cmyk") {
    colorValues = parseValues.slice(0, 4).map((value) => Math.round(value));
  } else {
    colorValues = parseValues.slice(0, 3).map((value) => Math.round(value));
  }

  // alpha values
  if (
    (result.type !== "cmyk" && parseValues.length === 4) ||
    (result.type === "cmyk" && parseValues.length === 5)
  ) {
    if (color.startsWith("#")) {
      alphaValues = Math.round((parseValues.slice(-1) / 255) * 100) / 100;
    } else if (color.endsWith("%)")) {
      alphaValues = Math.round((parseValues.slice(-1) / 100) * 100) / 100;
    } else {
      alphaValues = Math.round(parseValues.slice(-1) * 100) / 100;
    }
  }

  if (alphaValues > 1 || alphaValues === undefined) alphaValues = 1;

  // result
  result.values = colorValues;
  result.alpha = alphaValues;
  return result;
}

module.exports = parseColor;
