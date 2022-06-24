## Accepted Input

### RGB HEXADECIMAL

Notations:
3 digits: #RGB
4 digits: #RGBA
6 digits: #RRGGBB
8 digits: #RRGGBBAA

Values: #<hexadecimal-digits> {3} | {4} | {6} | {8}

Ranges and Units:
<hexadecimal-digist> = [0...F]

### RGB / RGBA

Notations:
rgb[a](R, G, B, [A])
rgb[a](R G B [ / A])

Values:
rgb[a]([<percentage>]{3} [ / <alpha-value>] )
rgb[a]([<number>]{3} [ / <alpha-value>])

Ranges and Units:
<percentage> = [0..100]%
<number> = [0...255]
<alpha-value> = <number> [0...1] | <percentage> [0...100]%

Any values with correct units but outside the defined ranges will be clamped to the max ranges defined above.

### HSL / HSLA

Notations:
hsl[a](H, S, L, [A])
hsl[a](H S L [ / A])

Values:
hsl[a]([<hue>], [<percentage>], [<percentage>], [<alpha-value>])
hsl[a]([<hue>] [<percentage>] [<percentage>] [ / <alpha-value>])

Ranges and Units:
<hue> = <number> [0...360] | <angle> [[0...360]deg | [0...400]grad | [0...6.28]rad | [0...1]turn]
<percentage> = [0...100]%
<alpha-value> = <number> [0...1] | <percentage> [0...100]%

### HWB

Notations:
hwb(H W B)

Values:
hwb([<hue>] [percentage] [percentage])

Ranges and Units:
<hue> = <number> [0...360] | <angle> [[0...360]deg | [0...400]grad | [0...6.28]rad | [0...1]turn]
<percentage> = [0...100]%

## HSV

Notations:
hsv(H, S, V)

Values:
hsv([<hue>], [<percentage], [<percentage])

Ranges and Units:
<hue> = <number> [0...360] | <angle> [[0...360]deg | [0...400]grad | [0...6.28]rad | [0...1]turn]
<percentage> = [0...100]%

### CMYK

Notations:
cmyk(C, M, Y, K)

Values:
cmyk([<percentage>], [<percentage>], [<percentage>], [<percentage>])

Range and Units:
<percentage> = [0...100]%

### NAMED COLORS

Notations:
named_color

Values, Range, and Units:
[list of named colors](https://www.w3.org/TR/2022/WD-css-color-4-20220428/#named-colors)

## RETURN VALUES

```{
type: "RGB/HSV/else",

}
```

### REFERENCE

[css angle units](https://www.w3.org/TR/css-values-4/#angles)
