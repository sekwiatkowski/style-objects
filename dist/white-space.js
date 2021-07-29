"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noWrap = void 0;

function whiteSpace(whiteSpace) {
  return {
    whiteSpace: whiteSpace
  };
}

var noWrap = whiteSpace('nowrap');
exports.noWrap = noWrap;