"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textAlign = textAlign;
exports.justifyText = exports.rightText = exports.centerText = exports.leftText = void 0;

function textAlign(textAlign) {
  return {
    textAlign: textAlign
  };
}

var leftText = textAlign('left');
exports.leftText = leftText;
var centerText = textAlign('center');
exports.centerText = centerText;
var rightText = textAlign('right');
exports.rightText = rightText;
var justifyText = textAlign('justify');
exports.justifyText = justifyText;