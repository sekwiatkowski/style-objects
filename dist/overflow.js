"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overflowYAuto = exports.overflowXAuto = void 0;

function overflowX(overflowX) {
  return {
    overflowX: overflowX
  };
}

function overflowY(overflowY) {
  return {
    overflowY: overflowY
  };
}

var overflowXAuto = overflowX('auto');
exports.overflowXAuto = overflowXAuto;
var overflowYAuto = overflowY('auto');
exports.overflowYAuto = overflowYAuto;