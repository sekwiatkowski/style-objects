"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.quarters = quarters;
exports.eighths = eighths;
exports.sixteenths = sixteenths;

function quarters(units) {
  return units * 0.25;
}

function eighths(units) {
  return units * 0.125;
}

function sixteenths(units) {
  return units * 0.0625;
}