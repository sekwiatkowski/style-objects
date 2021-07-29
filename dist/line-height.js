"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relaxedLineHeight = exports.normalLineHeight = exports.snugLineHeight = exports.tightLineHeight = exports.lineHeight = void 0;

var _baseUnit = require("./base-unit");

var lineHeight = (0, _baseUnit.absoluteStyle)(function (lineHeight) {
  return {
    lineHeight: lineHeight
  };
});
exports.lineHeight = lineHeight;
var tightLineHeight = lineHeight(1.0);
exports.tightLineHeight = tightLineHeight;
var snugLineHeight = lineHeight(1.25);
exports.snugLineHeight = snugLineHeight;
var normalLineHeight = lineHeight(1.5);
exports.normalLineHeight = normalLineHeight;
var relaxedLineHeight = lineHeight(1.75);
exports.relaxedLineHeight = relaxedLineHeight;