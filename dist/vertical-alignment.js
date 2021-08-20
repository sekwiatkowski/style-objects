"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alignBottom = exports.alignMiddle = exports.alignTop = void 0;

function verticalAlign(verticalAlign) {
  return {
    verticalAlign: verticalAlign
  };
}

var alignTop = verticalAlign('top');
exports.alignTop = alignTop;
var alignMiddle = verticalAlign('middle');
exports.alignMiddle = alignMiddle;
var alignBottom = verticalAlign('bottom');
exports.alignBottom = alignBottom;