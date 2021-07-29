"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderSizing = exports.contentSizing = void 0;

function boxSizing(boxSizing) {
  return {
    boxSizing: boxSizing
  };
}

var contentSizing = boxSizing('content-box');
exports.contentSizing = contentSizing;
var borderSizing = boxSizing('border-box');
exports.borderSizing = borderSizing;