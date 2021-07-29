"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
exports.easeOut = easeOut;
exports.easeIn = easeIn;
exports.leftTransition = leftTransition;
exports.rightTransition = rightTransition;
exports.widthTransition = widthTransition;

var _standardFunctions = require("standard-functions");

function transition() {
  for (var _len = arguments.length, effects = new Array(_len), _key = 0; _key < _len; _key++) {
    effects[_key] = arguments[_key];
  }

  return {
    transition: (0, _standardFunctions.joinWithCommaSpace)(effects)
  };
}

function easeOut(seconds) {
  return "".concat((0, _standardFunctions.toString)(seconds), "s ease-out");
}

function easeIn(seconds) {
  return "".concat((0, _standardFunctions.toString)(seconds), "s ease-in");
}

function leftTransition(effect) {
  return "left ".concat(effect);
}

function rightTransition(effect) {
  return "right ".concat(effect);
}

function widthTransition(effect) {
  return "width ".concat(effect);
}