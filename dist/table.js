"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderSpacing = borderSpacing;

var _standardFunctions = require("standard-functions");

function borderSpacing(horizontalLength, verticalLength) {
  return {
    borderSpacing: (0, _standardFunctions.joinWithSpace)(horizontalLength, verticalLength)
  };
}