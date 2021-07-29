"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bold = exports.semiBold = exports.medium = exports.regular = void 0;

function fontWeight(fontWeight) {
  return {
    fontWeight: fontWeight
  };
}

var regular = fontWeight(400);
exports.regular = regular;
var medium = fontWeight(500);
exports.medium = medium;
var semiBold = fontWeight(600);
exports.semiBold = semiBold;
var bold = fontWeight(700);
exports.bold = bold;