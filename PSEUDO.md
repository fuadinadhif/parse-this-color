1. Check if input is String. If not return null
1. Trim the input
1. Check if input matched one of the regex patterns
1. Parse the type/color values/alpha/brightness
1. If alpha is missing then defaulted to 100%
1. Get brightness value
1. Returned the parsed color as an object

1. check with normal values (1/2/3 digits)
1. check with negative values
1. check with past limit values
1. check comma no space format
1. check only space format
1. check comma plus space format
1. check random mix format

// function nameToRGB(name) {
// const tempDiv = document.createElement("div");
// tempDiv.style.color = name;

// document.body.appendChild(tempDiv);

// const compStyle = window.getComputedStyle(tempDiv);
// const propValue = compStyle.getPropertyValue("color");

// document.body.removeChild(tempDiv);

// return propValue;
// }

README ADD ON

1. all hue units will be converted to degress on hsl hwb and hsv
2. all percentage, float and other values will be converted to 8 bit integer decimal for rgb
3. all values will be converted to percentage in cmyk and hsl hwb and hsv (except hue)
