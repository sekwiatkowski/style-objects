"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseUnitStyle = baseUnitStyle;
exports.absoluteStyle = exports.sixteenthRemStyle = exports.eighthRemStyle = exports.quarterRemStyle = void 0;

var _standardFunctions = require("standard-functions");

var _rem = require("./rem");

function baseUnitStyle(applyUnits) {
  return function (createTag) {
    return function (units) {
      return createTag(applyUnits(units));
    };
  };
}

var quarterRemStyle = baseUnitStyle(_rem.quarterRems);
exports.quarterRemStyle = quarterRemStyle;
var eighthRemStyle = baseUnitStyle(_rem.eighthRems);
exports.eighthRemStyle = eighthRemStyle;
var sixteenthRemStyle = baseUnitStyle(_rem.sixteenthRems);
exports.sixteenthRemStyle = sixteenthRemStyle;
var absoluteStyle = baseUnitStyle(_standardFunctions.toString);
exports.absoluteStyle = absoluteStyle;