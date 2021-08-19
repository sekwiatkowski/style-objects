"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bottom = exports.middle = exports.top = void 0;

function verticalAlign(verticalAlign) {
  return {
    verticalAlign: verticalAlign
  };
}

var top = verticalAlign('top');
exports.top = top;
var middle = verticalAlign('middle');
exports.middle = middle;
var bottom = verticalAlign('bottom');
exports.bottom = bottom;