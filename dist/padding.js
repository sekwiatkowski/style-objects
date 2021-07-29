"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.padding = padding;
exports.paddingTop = paddingTop;
exports.paddingRight = paddingRight;
exports.paddingBottom = paddingBottom;
exports.paddingLeft = paddingLeft;
exports.verticalPadding = verticalPadding;
exports.horizontalPadding = horizontalPadding;
exports.verticalPadding20 = exports.verticalPadding16 = exports.verticalPadding12 = exports.verticalPadding10 = exports.verticalPadding8 = exports.verticalPadding6 = exports.verticalPadding5 = exports.verticalPadding4 = exports.verticalPadding3 = exports.verticalPadding2 = exports.verticalPadding1 = exports.horizontalPadding20 = exports.horizontalPadding16 = exports.horizontalPadding12 = exports.horizontalPadding10 = exports.horizontalPadding8 = exports.horizontalPadding6 = exports.horizontalPadding5 = exports.horizontalPadding4 = exports.horizontalPadding3 = exports.horizontalPadding2 = exports.horizontalPadding1 = exports.paddingLeft20 = exports.paddingLeft16 = exports.paddingLeft12 = exports.paddingLeft10 = exports.paddingLeft8 = exports.paddingLeft6 = exports.paddingLeft5 = exports.paddingLeft4 = exports.paddingLeft3 = exports.paddingLeft2 = exports.paddingLeft1 = exports.paddingBottom20 = exports.paddingBottom16 = exports.paddingBottom12 = exports.paddingBottom10 = exports.paddingBottom8 = exports.paddingBottom6 = exports.paddingBottom5 = exports.paddingBottom4 = exports.paddingBottom3 = exports.paddingBottom2 = exports.paddingBottom1 = exports.paddingRight20 = exports.paddingRight16 = exports.paddingRight12 = exports.paddingRight10 = exports.paddingRight8 = exports.paddingRight6 = exports.paddingRight5 = exports.paddingRight4 = exports.paddingRight3 = exports.paddingRight2 = exports.paddingRight1 = exports.paddingTop20 = exports.paddingTop16 = exports.paddingTop12 = exports.paddingTop10 = exports.paddingTop8 = exports.paddingTop6 = exports.paddingTop5 = exports.paddingTop4 = exports.paddingTop3 = exports.paddingTop2 = exports.paddingTop1 = exports.padding20 = exports.padding16 = exports.padding12 = exports.padding10 = exports.padding8 = exports.padding6 = exports.padding5 = exports.padding4 = exports.padding3 = exports.padding2 = exports.padding1 = exports.quarterRemVerticalPadding = exports.quarterRemHorizontalPadding = exports.quarterRemPaddingLeft = exports.quarterRemPaddingBottom = exports.quarterRemPaddingRight = exports.quarterRemPaddingTop = exports.quarterRemPadding = void 0;

var _baseUnit = require("./base-unit");

var _standardFunctions = require("standard-functions");

function padding(padding) {
  return {
    padding: padding
  };
}

function paddingTop(paddingTop) {
  return {
    paddingTop: paddingTop
  };
}

function paddingRight(paddingRight) {
  return {
    paddingRight: paddingRight
  };
}

function paddingBottom(paddingBottom) {
  return {
    paddingBottom: paddingBottom
  };
}

function paddingLeft(paddingLeft) {
  return {
    paddingLeft: paddingLeft
  };
}

function verticalPadding(value) {
  return (0, _standardFunctions.merge)(paddingTop(value), paddingBottom(value));
}

function horizontalPadding(value) {
  return (0, _standardFunctions.merge)(paddingRight(value), paddingLeft(value));
}

var quarterRemPadding = (0, _baseUnit.quarterRemStyle)(padding);
exports.quarterRemPadding = quarterRemPadding;
var quarterRemPaddingTop = (0, _baseUnit.quarterRemStyle)(paddingTop);
exports.quarterRemPaddingTop = quarterRemPaddingTop;
var quarterRemPaddingRight = (0, _baseUnit.quarterRemStyle)(paddingRight);
exports.quarterRemPaddingRight = quarterRemPaddingRight;
var quarterRemPaddingBottom = (0, _baseUnit.quarterRemStyle)(paddingBottom);
exports.quarterRemPaddingBottom = quarterRemPaddingBottom;
var quarterRemPaddingLeft = (0, _baseUnit.quarterRemStyle)(paddingLeft);
exports.quarterRemPaddingLeft = quarterRemPaddingLeft;
var quarterRemHorizontalPadding = (0, _baseUnit.quarterRemStyle)(horizontalPadding);
exports.quarterRemHorizontalPadding = quarterRemHorizontalPadding;
var quarterRemVerticalPadding = (0, _baseUnit.quarterRemStyle)(verticalPadding);
exports.quarterRemVerticalPadding = quarterRemVerticalPadding;
var padding1 = quarterRemPadding(1);
exports.padding1 = padding1;
var padding2 = quarterRemPadding(2);
exports.padding2 = padding2;
var padding3 = quarterRemPadding(3);
exports.padding3 = padding3;
var padding4 = quarterRemPadding(4);
exports.padding4 = padding4;
var padding5 = quarterRemPadding(5);
exports.padding5 = padding5;
var padding6 = quarterRemPadding(6);
exports.padding6 = padding6;
var padding8 = quarterRemPadding(8);
exports.padding8 = padding8;
var padding10 = quarterRemPadding(10);
exports.padding10 = padding10;
var padding12 = quarterRemPadding(12);
exports.padding12 = padding12;
var padding16 = quarterRemPadding(16);
exports.padding16 = padding16;
var padding20 = quarterRemPadding(20);
exports.padding20 = padding20;
var paddingTop1 = quarterRemPaddingTop(1);
exports.paddingTop1 = paddingTop1;
var paddingTop2 = quarterRemPaddingTop(2);
exports.paddingTop2 = paddingTop2;
var paddingTop3 = quarterRemPaddingTop(3);
exports.paddingTop3 = paddingTop3;
var paddingTop4 = quarterRemPaddingTop(4);
exports.paddingTop4 = paddingTop4;
var paddingTop5 = quarterRemPaddingTop(5);
exports.paddingTop5 = paddingTop5;
var paddingTop6 = quarterRemPaddingTop(6);
exports.paddingTop6 = paddingTop6;
var paddingTop8 = quarterRemPaddingTop(8);
exports.paddingTop8 = paddingTop8;
var paddingTop10 = quarterRemPaddingTop(10);
exports.paddingTop10 = paddingTop10;
var paddingTop12 = quarterRemPaddingTop(12);
exports.paddingTop12 = paddingTop12;
var paddingTop16 = quarterRemPaddingTop(16);
exports.paddingTop16 = paddingTop16;
var paddingTop20 = quarterRemPaddingTop(20);
exports.paddingTop20 = paddingTop20;
var paddingRight1 = quarterRemPaddingRight(1);
exports.paddingRight1 = paddingRight1;
var paddingRight2 = quarterRemPaddingRight(2);
exports.paddingRight2 = paddingRight2;
var paddingRight3 = quarterRemPaddingRight(3);
exports.paddingRight3 = paddingRight3;
var paddingRight4 = quarterRemPaddingRight(4);
exports.paddingRight4 = paddingRight4;
var paddingRight5 = quarterRemPaddingRight(5);
exports.paddingRight5 = paddingRight5;
var paddingRight6 = quarterRemPaddingRight(6);
exports.paddingRight6 = paddingRight6;
var paddingRight8 = quarterRemPaddingRight(8);
exports.paddingRight8 = paddingRight8;
var paddingRight10 = quarterRemPaddingRight(10);
exports.paddingRight10 = paddingRight10;
var paddingRight12 = quarterRemPaddingRight(12);
exports.paddingRight12 = paddingRight12;
var paddingRight16 = quarterRemPaddingRight(16);
exports.paddingRight16 = paddingRight16;
var paddingRight20 = quarterRemPaddingRight(20);
exports.paddingRight20 = paddingRight20;
var paddingBottom1 = quarterRemPaddingBottom(1);
exports.paddingBottom1 = paddingBottom1;
var paddingBottom2 = quarterRemPaddingBottom(2);
exports.paddingBottom2 = paddingBottom2;
var paddingBottom3 = quarterRemPaddingBottom(3);
exports.paddingBottom3 = paddingBottom3;
var paddingBottom4 = quarterRemPaddingBottom(4);
exports.paddingBottom4 = paddingBottom4;
var paddingBottom5 = quarterRemPaddingBottom(5);
exports.paddingBottom5 = paddingBottom5;
var paddingBottom6 = quarterRemPaddingBottom(6);
exports.paddingBottom6 = paddingBottom6;
var paddingBottom8 = quarterRemPaddingBottom(8);
exports.paddingBottom8 = paddingBottom8;
var paddingBottom10 = quarterRemPaddingBottom(10);
exports.paddingBottom10 = paddingBottom10;
var paddingBottom12 = quarterRemPaddingBottom(12);
exports.paddingBottom12 = paddingBottom12;
var paddingBottom16 = quarterRemPaddingBottom(16);
exports.paddingBottom16 = paddingBottom16;
var paddingBottom20 = quarterRemPaddingBottom(20);
exports.paddingBottom20 = paddingBottom20;
var paddingLeft1 = quarterRemPaddingLeft(1);
exports.paddingLeft1 = paddingLeft1;
var paddingLeft2 = quarterRemPaddingLeft(2);
exports.paddingLeft2 = paddingLeft2;
var paddingLeft3 = quarterRemPaddingLeft(3);
exports.paddingLeft3 = paddingLeft3;
var paddingLeft4 = quarterRemPaddingLeft(4);
exports.paddingLeft4 = paddingLeft4;
var paddingLeft5 = quarterRemPaddingLeft(5);
exports.paddingLeft5 = paddingLeft5;
var paddingLeft6 = quarterRemPaddingLeft(6);
exports.paddingLeft6 = paddingLeft6;
var paddingLeft8 = quarterRemPaddingLeft(8);
exports.paddingLeft8 = paddingLeft8;
var paddingLeft10 = quarterRemPaddingLeft(10);
exports.paddingLeft10 = paddingLeft10;
var paddingLeft12 = quarterRemPaddingLeft(12);
exports.paddingLeft12 = paddingLeft12;
var paddingLeft16 = quarterRemPaddingLeft(16);
exports.paddingLeft16 = paddingLeft16;
var paddingLeft20 = quarterRemPaddingLeft(20);
exports.paddingLeft20 = paddingLeft20;
var horizontalPadding1 = quarterRemHorizontalPadding(1);
exports.horizontalPadding1 = horizontalPadding1;
var horizontalPadding2 = quarterRemHorizontalPadding(2);
exports.horizontalPadding2 = horizontalPadding2;
var horizontalPadding3 = quarterRemHorizontalPadding(3);
exports.horizontalPadding3 = horizontalPadding3;
var horizontalPadding4 = quarterRemHorizontalPadding(4);
exports.horizontalPadding4 = horizontalPadding4;
var horizontalPadding5 = quarterRemHorizontalPadding(5);
exports.horizontalPadding5 = horizontalPadding5;
var horizontalPadding6 = quarterRemHorizontalPadding(6);
exports.horizontalPadding6 = horizontalPadding6;
var horizontalPadding8 = quarterRemHorizontalPadding(8);
exports.horizontalPadding8 = horizontalPadding8;
var horizontalPadding10 = quarterRemHorizontalPadding(10);
exports.horizontalPadding10 = horizontalPadding10;
var horizontalPadding12 = quarterRemHorizontalPadding(12);
exports.horizontalPadding12 = horizontalPadding12;
var horizontalPadding16 = quarterRemHorizontalPadding(16);
exports.horizontalPadding16 = horizontalPadding16;
var horizontalPadding20 = quarterRemHorizontalPadding(20);
exports.horizontalPadding20 = horizontalPadding20;
var verticalPadding1 = quarterRemVerticalPadding(1);
exports.verticalPadding1 = verticalPadding1;
var verticalPadding2 = quarterRemVerticalPadding(2);
exports.verticalPadding2 = verticalPadding2;
var verticalPadding3 = quarterRemVerticalPadding(3);
exports.verticalPadding3 = verticalPadding3;
var verticalPadding4 = quarterRemVerticalPadding(4);
exports.verticalPadding4 = verticalPadding4;
var verticalPadding5 = quarterRemVerticalPadding(5);
exports.verticalPadding5 = verticalPadding5;
var verticalPadding6 = quarterRemVerticalPadding(6);
exports.verticalPadding6 = verticalPadding6;
var verticalPadding8 = quarterRemVerticalPadding(8);
exports.verticalPadding8 = verticalPadding8;
var verticalPadding10 = quarterRemVerticalPadding(10);
exports.verticalPadding10 = verticalPadding10;
var verticalPadding12 = quarterRemVerticalPadding(12);
exports.verticalPadding12 = verticalPadding12;
var verticalPadding16 = quarterRemVerticalPadding(16);
exports.verticalPadding16 = verticalPadding16;
var verticalPadding20 = quarterRemVerticalPadding(20);
exports.verticalPadding20 = verticalPadding20;