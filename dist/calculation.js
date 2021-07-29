"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calc = calc;
exports.add = add;
exports.subtract = subtract;

function calc(calculation) {
  return "calc(".concat(calculation, ")");
}

function add(a) {
  return function (b) {
    return "".concat(a, " + ").concat(b);
  };
}

function subtract(a) {
  return function (b) {
    return "".concat(a, " - ").concat(b);
  };
}