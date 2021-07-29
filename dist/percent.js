"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.percent = percent;

var _standardFunctions = require("standard-functions");

function percent(units) {
  return (0, _standardFunctions.toString)(units) + '%';
}