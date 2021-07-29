"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outline = outline;
exports.outlineOffset = outlineOffset;

var _standardFunctions = require("standard-functions");

function outline(width, style, color) {
  return {
    outline: (0, _standardFunctions.joinWithSpace)(width, style, color)
  };
}

function outlineOffset(outlineOffset) {
  return {
    outlineOffset: outlineOffset
  };
}