const test = require("tape");
const parseColor = require("..");

test("RGB Hex - Valid Values", function (t) {
  t.deepEqual(parseColor("#FFF"), {
    type: "rgb",
    values: [255, 255, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("#FAFA"), {
    type: "rgb",
    values: [255, 170, 255],
    alpha: 0.67,
  });
  t.deepEqual(parseColor("#FAFAFA"), {
    type: "rgb",
    values: [250, 250, 250],
    alpha: 1,
  });
  t.deepEqual(parseColor("#FAFAFAFA"), {
    type: "rgb",
    values: [250, 250, 250],
    alpha: 0.98,
  });
  t.end();
});

test("RGB Hex - Invalid Values", function (t) {
  t.deepEqual(parseColor("#FAFAF"), null);
  t.deepEqual(parseColor("#FAFAFAF"), null);
  t.end();
});

test("RGB Dec Percent - Valid - Normal Values", function (t) {
  t.deepEqual(parseColor("rgb(0,0,0)"), {
    type: "rgb",
    values: [0, 0, 0],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(0%,0%,0%)"), {
    type: "rgb",
    values: [0, 0, 0],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10%,10%,10%)"), {
    type: "rgb",
    values: [26, 26, 26],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(255,255,255)"), {
    type: "rgb",
    values: [255, 255, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(100%,100%,100%)"), {
    type: "rgb",
    values: [255, 255, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10,1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10 10 10 / 0.5)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 0.5,
  });
  t.deepEqual(parseColor("rgb(10 10 10 / 1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10 10 10 / 100%)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});

test("RGB Dec Percent - Valid - Below and Over Limit Values", function (t) {
  t.deepEqual(parseColor("rgb(-1, -1, -1)"), {
    type: "rgb",
    values: [1, 1, 1],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(-1%, -1%, -1%)"), {
    type: "rgb",
    values: [3, 3, 3],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(500,500,500)"), {
    type: "rgb",
    values: [255, 255, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(200%, 200%, 200%)"), {
    type: "rgb",
    values: [255, 255, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10, -1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10, -1%)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 0.01,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10, 2)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10, 200%)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});

test("RGB Dec Percent - Valid - Mixed Values", function (t) {
  t.deepEqual(parseColor("rgb(0.5,10,100%)"), {
    type: "rgb",
    values: [1, 10, 255],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(0.5,10,100%, 100%)"), {
    type: "rgb",
    values: [1, 10, 255],
    alpha: 1,
  });
  t.end();
});

test("RGB Dec Percent - Valid - Normal Format", function (t) {
  t.deepEqual(parseColor("rgb(10,10,10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10 10 10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10,1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10/1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10 10 10 / 1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});

test("RGB Dec Percent - Valid - Mixed Format", function (t) {
  t.deepEqual(parseColor("rgb(10, 10 10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10 , 10 , 10)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10 1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10,10,10 / 1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10 /1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("rgb(10, 10, 10/ 1)"), {
    type: "rgb",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});

test("HSL HWB HSV - Valid - Normal Values", function (t) {
  t.deepEqual(parseColor("hsl(0,0%,0%)"), {
    type: "hsl",
    values: [0, 0, 0],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(360,100%,100%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(360deg,100%,100%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(400grad,100%,100%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(6.28rad,100%,100%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(1turn,100%,100%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%,1)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10 10% 10% / 0.5)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 0.5,
  });
  t.deepEqual(parseColor("hsl(10 10% 10% / 1)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10 10% 10% 100%)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});

test("HSL HWB HSV - Valid - Below and Over Limit Values", function (t) {
  t.deepEqual(parseColor("hsl(-1,-1%,-1%)"), {
    type: "hsl",
    values: [1, 1, 1],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(720,200%,200%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(720deg,200%,200%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(-1grad,200%,200%)"), {
    type: "hsl",
    values: [57, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(800grad,200%,200%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(-1rad,-1%,-1%)"), {
    type: "hsl",
    values: [360, 1, 1],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(12.56rad,200%,200%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(-1turn,-1%,-1%)"), {
    type: "hsl",
    values: [360, 1, 1],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(2turn,200%,200%)"), {
    type: "hsl",
    values: [360, 100, 100],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%,-1)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%,-1%)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 0.01,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%,2)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.deepEqual(parseColor("hsl(10,10%,10%,200%)"), {
    type: "hsl",
    values: [10, 10, 10],
    alpha: 1,
  });
  t.end();
});
