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

/ \_ TEST CASE -------------------------------------------
// ! Valid RGB Hex
// #FFF
// #FAFA
// #FAFAFA
// #FAFAFAFA
// ! Invalid RGB Hex
// #FAFAF
// #FAFAFAF

// ! Valid RGB Number and Percentage
Normal Values ======================
// rgb(0,0,0)
// rgb(0%,0%,0%)
// rgb(10,10,10)
// rgb(10%,10%,10%)
// rgb(255,255,255)
// rgb(100%,100%,100%)
// rgb(10,10,10,1)
// rgb(10,10,10/0.5)
// rgb(10,10,10/1)
// rgb(10,10,10/100%)
Below and Over Limit Values ========
// rgb(-1,-1,-1)
// rgb(-1%,-1%,-1%)
// rgb(500,500,500)
// rgb(200%,200%,200%)
// rgb(10,10,10,-1)
// rgb(10,10,10,2)
// rgb(10,10,10,-1%)
// rgb(10,10,10,200%)
Mixed Values =======================
// rgb(0.5,10,100%)
// rgb(0.5,10,100%,100%)
Normal Format ======================
// rgb(10,10,10)
// rgb(10 10 10)
// rgb(10, 10, 10)
// rgb(10,10,10,1)
// rgb(10,10,10/1)
// rgb(10 10 10 / 1)
Mixed Format ======================
// rgb(10, 10 10)
// rgb(10 , 10 , 10)
// rgb(10 10 10)
// rgb(10,10,10 1)
// rgb(10,10,10 / 1)
// rgb(10,10,10 /1)
// rgb(10,10,10/ 1)

// ! Valid HSL / HWB / HSV
Normal Values =====================
// hsl(0,0%,0%)
// hsl(10,10%,10%)
// hsl(100,100%,100%)
// hsl(360,100%,100%)
// hsl(360deg,100%,100%)
// hsl(400grad,100%,100%)
// hsl(6.28rad,100%,100%)
// hsl(1turn,100%,100%)
// hsl(10,10%,10%,1)
// hsl(10,10%,10%/0.5)
// hsl(10,10%,10%/1)
// hsl(10,10%,10%/100%)
Below and Over Limit Values =======
// hsl(-1,-1%,-1%)
// hsl(720,200%,200%)
// hsl(720deg,200%,200%)
// hsl(-1grad,-1%,-1%)
// hsl(800grad,200%,200%)
// hsl(-1rad,-1%,-1%)
// hsl(12.56rad,200%,200%)
// hsl(-1turn,-1%,-1%)
// hsl(2turn,200%,200%)
// hsl(10,10%,10%,-1)
// hsl(10,10%,10%,-1%)
// hsl(10,10%,10%,2)
// hsl(10,10%,10%,200%)
Mixed Values ======================
// hsl(0.5%,10,100%)
// hsl(0.5,10,100%)
// hsl(0.5,10,100%,100%)
Normal Format =====================
// hsl(10,10%,10%)
// hsl(10 10% 10%)
// hsl(10, 10%, 10%)
// hsl(10,10%,10%,1)
// hsl(10,10%,10%/1)
// hsl(10 10% 10% / 1)
// hsl(10, 10%, 10%, 1)
Mixed Format ======================
// hsl(360, 10% 10%)
// hsl(360 , 10% , 10%)
// hsl(360 10% 10%)
// hsl(360,10%,10% 1)
// hsl(360,10%,10% / 1)
// hsl(360,10%,10% /1)
// hsl(360,10%,10%/ 1)

// ! Valid CMYK
// _ Normal Values
// cmyk(0%,0%,0%,0%)
// cmyk(10%,10%,10%,10%)
// cmyk(100%,100%,100%,100%)
// cmyk(50%,50%,50%,1)
// cmyk(50%,50%,50%,50%/0.5)
// cmyk(50%,50%,50%,50%/1)
// cmyk(50%,50%,50%,50%/100%)
// _ Below and Over Limit Values
// cmyk(-100%,-100%,-100%,-100%)
// cmyk(200%,200%,200%,200%)
// _ Mixed Values
// cmyk(0,0.5,10,100%)
// cmyk(0,-0.5,-10,-100%)
// _ Normal Format
// cmyk(10%,10%,10%,10%)
// cmyk(10% 10% 10% 10%)
// cmyk(10%, 10%, 10%, 10%)
// \_ Mixed Format
// cmyk(10%, 10% 10%, 10%)
// cmyk(10% , 10%, 10% , 10%)
// cmyk(10% 10% 10% 10%)
// cmyk(10%,10%,10%,10% 1)
// cmyk(10%,10%,10%,10% / 1)
// cmyk(10%,10%,10%,10% /1)
// cmyk(10%,10%,10%,10%/ 1)
