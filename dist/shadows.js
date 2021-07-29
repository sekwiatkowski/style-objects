"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shadow = shadow;
exports.boxShadow = boxShadow;
exports.noBoxShadow = void 0;

var _standardFunctions = require("standard-functions");

function shadow(offsetX, offsetY, blur, spreadRadius, color) {
  return (0, _standardFunctions.joinWithSpace)(offsetX, offsetY, blur, spreadRadius, color);
}

function boxShadow() {
  for (var _len = arguments.length, shadows = new Array(_len), _key = 0; _key < _len; _key++) {
    shadows[_key] = arguments[_key];
  }

  return {
    boxShadow: (0, _standardFunctions.joinWithCommaSpace)(shadows)
  };
}

var noBoxShadow = boxShadow('none');
exports.noBoxShadow = noBoxShadow;