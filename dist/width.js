"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.width = width;
exports.minWidth = minWidth;
exports.maxWidth = maxWidth;
exports.fullWidth = exports.halfWidth = exports.thirdWidth = exports.width96 = exports.width88 = exports.width80 = exports.width72 = exports.width64 = exports.width56 = exports.width48 = exports.width40 = exports.width32 = exports.width24 = exports.width20 = exports.width16 = exports.width12 = exports.width10 = exports.width8 = exports.width6 = exports.width5 = exports.width4 = exports.width3 = exports.width2 = exports.width1 = exports.quarterRemWidth = void 0;

var _baseUnit = require("./base-unit");

function width(width) {
  return {
    width: width
  };
}

var quarterRemWidth = (0, _baseUnit.quarterRemStyle)(width);
exports.quarterRemWidth = quarterRemWidth;
var width1 = quarterRemWidth(1);
exports.width1 = width1;
var width2 = quarterRemWidth(2);
exports.width2 = width2;
var width3 = quarterRemWidth(3);
exports.width3 = width3;
var width4 = quarterRemWidth(4);
exports.width4 = width4;
var width5 = quarterRemWidth(5);
exports.width5 = width5;
var width6 = quarterRemWidth(6);
exports.width6 = width6;
var width8 = quarterRemWidth(8);
exports.width8 = width8;
var width10 = quarterRemWidth(10);
exports.width10 = width10;
var width12 = quarterRemWidth(12);
exports.width12 = width12;
var width16 = quarterRemWidth(16);
exports.width16 = width16;
var width20 = quarterRemWidth(20);
exports.width20 = width20;
var width24 = quarterRemWidth(24);
exports.width24 = width24;
var width32 = quarterRemWidth(32);
exports.width32 = width32;
var width40 = quarterRemWidth(40);
exports.width40 = width40;
var width48 = quarterRemWidth(48);
exports.width48 = width48;
var width56 = quarterRemWidth(56);
exports.width56 = width56;
var width64 = quarterRemWidth(64);
exports.width64 = width64;
var width72 = quarterRemWidth(72);
exports.width72 = width72;
var width80 = quarterRemWidth(80);
exports.width80 = width80;
var width88 = quarterRemWidth(88);
exports.width88 = width88;
var width96 = quarterRemWidth(96);
exports.width96 = width96;
var thirdWidth = width('33.33333%');
exports.thirdWidth = thirdWidth;
var halfWidth = width('50%');
exports.halfWidth = halfWidth;
var fullWidth = width('100%');
exports.fullWidth = fullWidth;

function minWidth(minWidth) {
  return {
    minWidth: minWidth
  };
}

function maxWidth(maxWidth) {
  return {
    maxWidth: maxWidth
  };
}