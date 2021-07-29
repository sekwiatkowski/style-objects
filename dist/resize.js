"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeBoth = exports.noResize = exports.horizontalResize = exports.verticalResize = void 0;

function resize(resize) {
  return {
    resize: resize
  };
}

var verticalResize = resize('vertical');
exports.verticalResize = verticalResize;
var horizontalResize = resize('horizontal');
exports.horizontalResize = horizontalResize;
var noResize = resize('none');
exports.noResize = noResize;
var resizeBoth = resize('both');
exports.resizeBoth = resizeBoth;