"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSize = fontSize;
exports.largestFontSize = exports.veryLargeFontSize = exports.largeFontSize = exports.largerFontSize = exports.slightlyLargerFontSize = exports.normalFontSize = exports.smallerFontSize = exports.smallFontSize = exports.verySmallFontSize = exports.extremelySmallFontSize = void 0;

var _baseUnit = require("./base-unit.js");

function fontSize(fontSize) {
  return {
    fontSize: fontSize
  };
}

var sixteenthRemFontSize = (0, _baseUnit.sixteenthRemStyle)(fontSize);
var extremelySmallFontSize = sixteenthRemFontSize(12);
exports.extremelySmallFontSize = extremelySmallFontSize;
var verySmallFontSize = sixteenthRemFontSize(13);
exports.verySmallFontSize = verySmallFontSize;
var smallFontSize = sixteenthRemFontSize(14);
exports.smallFontSize = smallFontSize;
var smallerFontSize = sixteenthRemFontSize(15);
exports.smallerFontSize = smallerFontSize;
var eighthRemFontSize = (0, _baseUnit.eighthRemStyle)(fontSize);
var normalFontSize = eighthRemFontSize(8);
exports.normalFontSize = normalFontSize;
var slightlyLargerFontSize = eighthRemFontSize(9);
exports.slightlyLargerFontSize = slightlyLargerFontSize;
var largerFontSize = eighthRemFontSize(10);
exports.largerFontSize = largerFontSize;
var largeFontSize = eighthRemFontSize(12);
exports.largeFontSize = largeFontSize;
var veryLargeFontSize = eighthRemFontSize(14);
exports.veryLargeFontSize = veryLargeFontSize;
var largestFontSize = eighthRemFontSize(16);
exports.largestFontSize = largestFontSize;