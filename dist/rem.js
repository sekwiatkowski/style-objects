"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rems = rems;
exports.quarterRems = quarterRems;
exports.eighthRems = eighthRems;
exports.sixteenthRems = sixteenthRems;

var _standardFunctions = require("standard-functions");

var _fractions = require("./fractions");

function rems(units) {
  return (0, _standardFunctions.toString)(units) + 'rem';
}

function quarterRems(units) {
  return rems((0, _fractions.quarters)(units));
}

function eighthRems(units) {
  return rems((0, _fractions.eighths)(units));
}

function sixteenthRems(units) {
  return rems((0, _fractions.sixteenths)(units));
}