# parse-this-color

Parse the properties (type, color values, alpha, brightness) of various color models.

## Usage

```js
npm install parse-this-color
```

```js
const parse = require("parse-this-color");
parse("red"); //{type: 'named', values: [255, 0, 0], alpha: 1, brightness: 4.39}
parse("rgba(0, 255, 0, 0.5)"); //{type: 'rgb', values: [0, 255, 0], alpha: 0.5, brightness: 4.39}
```

## Supported Color Models

- [x] RGB / RGBA
- [x] HSL / HSLA
- [x] HWB / HWBA
- [x] HSV / HSVA
- [x] CMYK
- [x] CSS Named Colors

## Accepted Input

Input value has to be `String`, else `null` will be returned.

Although some lack of or excess of inputted value characters (e.g spaces, numbers) will be adjusted or ignored automatically, please adhere to these notations for more definite results.

Both upper and lowercase are considered valid input.

### RGB HEX

```js
//Notation: #RGB
//Values: #<hex-digits>{3}
parse("#FFF");

//Notation: #RGBA
//Values: #<hex-digits>{3}<alpha-value>
parse("#FFF9");

//Notation: #RRGGBB
//Values: #<hex-digits>{6}
parse("#FAFAFA");

//Notation: #RRGGBBAA
//Values: #<hex-digits>{6}<alpha-value>{2}
parse("#FAFAFA00");
```

### RGB / RGBA

```js
//Notation: rgb[a]?( R, G, B [ , A ]? )
//Values: rgb[a]?( <percentage>#{3} [ , <alpha-value> ]? )
parse("rgb(50%, 25%, 5%");
parse("rgba(50%, 25%, 5%, 50%)");

//Notation: rgb[a]?( R G B [ / A ]? )
//Values: rgb[a]?( <number>{3} [ / <alpha-value> ]? )
parse("rgb(255 150 150)");
parse("rgba(255 150 150 / 0.5)");
```

### HSL / HSLA

```js
//Notation: hsl[a]?( H, S, L [ , A ]? )
//Values: hsl[a]?( <hue>, <percentage>#{2} [ , <alpha-value> ]? )
parse("hsl(20deg, 50%, 100%)");
parse("hsla(0.5turn, 50%, 50%, 1");

//Notation: hsl[a]?( H S L [ / A ]? )
//Values: hsl[a]?( <hue> <percentage>{2} [ / <alpha-value> ]? )
parse("hsl(20deg 50% 100%)");
parse("hsla(0.5turn 50% 50% / 1");
```

### HWB

```js
//Notation: hwb( H W B [ / A ]? )
//Values: hwb( <hue> <percentage>{2} [ / <alpha-value> ]?)
parse("hwb(90 100% 100%");
parse("hwb(90 100% 100% / 50%");
```

### HSV

```js
//Notation: hsv( H, S, V [ , A ]? )
//Values: hsv( <hue>, <percentage>#{2} [ , <alpha-value> ]? )
parse("hsv(200grad, 25%, 25%)");
parse("hsv(200grad, 25%, 25%, 100%)");

//Notation: hsv( H S V [ / A ]? )
//Values: hsv( <hue> <percentage>{2} [ / <alpha-value> ]? )
parse("hsv(200grad 25% 25%)");
parse("hsv(200grad 25% 25% / 100%)");
```

### CMYK

```js
//Notation: cmyk(C, M, Y, K)
//Values: cmyk( <percentage>#{4} )
parse("cmyk(100%, 25%, 75%, 60%)");
```

### CSS Named Colors

Color name as described in [CSS Color Module.](https://www.w3.org/TR/2022/WD-css-color-4-20220428/#named-colors)

## Values Ranges and Units

- [x] `<hex-digits> = [0-9A-F]`
- [x] `<number> = [0-255]`
- [x] `<hue> = [0-360] | [0-360]deg | [0-400]grad | [0-6.28]rad | [0-1]turn`
- [x] `<percentage> = [0-100]%`
- [x] `<alpha-value> = [0-1] | [0-100]%`

## Returned Values

A valid input will be parsed and returned an object with these properties:

```js
{
  type: 'rgb', //Type of the inputted color model
  values: [255, 255, 255], //The corresponding color values. Hue with grad|rad|turn units will be converted to degrees
  alpha: 1, //The alpha of the color, range from 0-1
  brightness: 0.5 //The relative brightness of the color, normalized to 0 for darkest black and 1 for lightest white
}
```

Invalid input will always returned `null`.

## License

Licensed under the [MIT License](LICENSE.md).
