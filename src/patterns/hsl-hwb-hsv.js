const pattern =
  /^h(sl|wb|sv)\(((-?[0-9](\.[0-9]+)?)+(%|deg|grad|rad|turn)?)((,|\s)+((-?[0-9](\.[0-9]+)?)+%?)){2}((,|\s|\/)+((-?[0-9](\.[0-9]+)?)+%?))?\)$/i;
module.exports = pattern;
