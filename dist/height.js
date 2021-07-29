"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.height = height;
exports.minHeight = minHeight;
exports.maxHeight = maxHeight;
exports.fullMinHeight = exports.fullHeight = exports.halfHeight = exports.thirdHeight = exports.height96 = exports.height88 = exports.height80 = exports.height72 = exports.height64 = exports.height56 = exports.height48 = exports.height40 = exports.height32 = exports.height24 = exports.height20 = exports.height16 = exports.height12 = exports.height10 = exports.height8 = exports.height6 = exports.height5 = exports.height4 = exports.height3 = exports.height2 = exports.height1 = exports.quarterRemHeight = void 0;

var _baseUnit = require("./base-unit");

function height(height) {
  return {
    height: height
  };
}

var quarterRemHeight = (0, _baseUnit.quarterRemStyle)(height);
exports.quarterRemHeight = quarterRemHeight;
var height1 = quarterRemHeight(1);
exports.height1 = height1;
var height2 = quarterRemHeight(2);
exports.height2 = height2;
var height3 = quarterRemHeight(3);
exports.height3 = height3;
var height4 = quarterRemHeight(4);
exports.height4 = height4;
var height5 = quarterRemHeight(5);
exports.height5 = height5;
var height6 = quarterRemHeight(6);
exports.height6 = height6;
var height8 = quarterRemHeight(8);
exports.height8 = height8;
var height10 = quarterRemHeight(10);
exports.height10 = height10;
var height12 = quarterRemHeight(12);
exports.height12 = height12;
var height16 = quarterRemHeight(16);
exports.height16 = height16;
var height20 = quarterRemHeight(20);
exports.height20 = height20;
var height24 = quarterRemHeight(24);
exports.height24 = height24;
var height32 = quarterRemHeight(32);
exports.height32 = height32;
var height40 = quarterRemHeight(40);
exports.height40 = height40;
var height48 = quarterRemHeight(48);
exports.height48 = height48;
var height56 = quarterRemHeight(56);
exports.height56 = height56;
var height64 = quarterRemHeight(64);
exports.height64 = height64;
var height72 = quarterRemHeight(72);
exports.height72 = height72;
var height80 = quarterRemHeight(80);
exports.height80 = height80;
var height88 = quarterRemHeight(88);
exports.height88 = height88;
var height96 = quarterRemHeight(96);
exports.height96 = height96;
var thirdHeight = height('33.33333%');
exports.thirdHeight = thirdHeight;
var halfHeight = height('50%');
exports.halfHeight = halfHeight;
var fullHeight = height('100%');
exports.fullHeight = fullHeight;

function minHeight(minHeight) {
  return {
    minHeight: minHeight
  };
}

function maxHeight(maxHeight) {
  return {
    maxHeight: maxHeight
  };
}

var fullMinHeight = minHeight('100%');
exports.fullMinHeight = fullMinHeight;