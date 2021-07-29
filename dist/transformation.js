"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;
exports.scale = scale;
exports.skewX = skewX;
exports.skewY = skewY;
exports.transform = transform;
exports.transformOrigin = transformOrigin;
exports.rotateByMinus180Degrees = exports.rotateByMinus90Degrees = exports.rotateByMinus45Degrees = exports.rotateBy180Degrees = exports.rotateBy90Degrees = exports.rotateBy45Degrees = void 0;

var _standardFunctions = require("standard-functions");

var _degrees = require("./degrees.js");

function rotate(degrees) {
  return "rotate(".concat(degrees, ")");
}

function scale(factor) {
  return "scale(".concat(factor, ")");
}

function skewX(skewX) {
  return "skewX(".concat(skewX, ")");
}

function skewY(skewY) {
  return "skewY(".concat(skewY, ")");
}

var rotateBy45Degrees = rotate((0, _degrees.degrees)(45));
exports.rotateBy45Degrees = rotateBy45Degrees;
var rotateBy90Degrees = rotate((0, _degrees.degrees)(90));
exports.rotateBy90Degrees = rotateBy90Degrees;
var rotateBy180Degrees = rotate((0, _degrees.degrees)(180));
exports.rotateBy180Degrees = rotateBy180Degrees;
var rotateByMinus45Degrees = rotate((0, _degrees.degrees)(-45));
exports.rotateByMinus45Degrees = rotateByMinus45Degrees;
var rotateByMinus90Degrees = rotate((0, _degrees.degrees)(-90));
exports.rotateByMinus90Degrees = rotateByMinus90Degrees;
var rotateByMinus180Degrees = rotate((0, _degrees.degrees)(-180));
exports.rotateByMinus180Degrees = rotateByMinus180Degrees;

function transform() {
  for (var _len = arguments.length, transformations = new Array(_len), _key = 0; _key < _len; _key++) {
    transformations[_key] = arguments[_key];
  }

  return {
    transform: (0, _standardFunctions.joinWithCommaSpace)(transformations)
  };
}

function transformOrigin(transformOrigin) {
  return {
    transformOrigin: transformOrigin
  };
}