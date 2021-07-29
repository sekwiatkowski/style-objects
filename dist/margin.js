"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.margin = margin;
exports.marginTop = marginTop;
exports.marginRight = marginRight;
exports.marginBottom = marginBottom;
exports.marginLeft = marginLeft;
exports.verticalMargin = verticalMargin;
exports.horizontalMargin = horizontalMargin;
exports.verticalMargin20 = exports.verticalMargin16 = exports.verticalMargin12 = exports.verticalMargin10 = exports.verticalMargin8 = exports.verticalMargin6 = exports.verticalMargin5 = exports.verticalMargin4 = exports.verticalMargin3 = exports.verticalMargin2 = exports.verticalMargin1 = exports.horizontalMargin20 = exports.horizontalMargin16 = exports.horizontalMargin12 = exports.horizontalMargin10 = exports.horizontalMargin8 = exports.horizontalMargin6 = exports.horizontalMargin5 = exports.horizontalMargin4 = exports.horizontalMargin3 = exports.horizontalMargin2 = exports.horizontalMargin1 = exports.marginLeft20 = exports.marginLeft16 = exports.marginLeft12 = exports.marginLeft10 = exports.marginLeft8 = exports.marginLeft6 = exports.marginLeft5 = exports.marginLeft4 = exports.marginLeft3 = exports.marginLeft2 = exports.marginLeft1 = exports.marginBottom20 = exports.marginBottom16 = exports.marginBottom12 = exports.marginBottom10 = exports.marginBottom8 = exports.marginBottom6 = exports.marginBottom5 = exports.marginBottom4 = exports.marginBottom3 = exports.marginBottom2 = exports.marginBottom1 = exports.marginRight20 = exports.marginRight16 = exports.marginRight12 = exports.marginRight10 = exports.marginRight8 = exports.marginRight6 = exports.marginRight5 = exports.marginRight4 = exports.marginRight3 = exports.marginRight2 = exports.marginRight1 = exports.marginTop20 = exports.marginTop16 = exports.marginTop12 = exports.marginTop10 = exports.marginTop8 = exports.marginTop6 = exports.marginTop5 = exports.marginTop4 = exports.marginTop3 = exports.marginTop2 = exports.marginTop1 = exports.margin20 = exports.margin16 = exports.margin12 = exports.margin10 = exports.margin8 = exports.margin6 = exports.margin5 = exports.margin4 = exports.margin3 = exports.margin2 = exports.margin1 = exports.quarterRemVerticalMargin = exports.quarterRemHorizontalMargin = exports.quarterRemMarginLeft = exports.quarterRemMarginBottom = exports.quarterRemMarginRight = exports.quarterRemMarginTop = exports.quarterRemMargin = exports.autoMargin = void 0;

var _baseUnit = require("./base-unit");

var _standardFunctions = require("standard-functions");

function margin(margin) {
  return {
    margin: margin
  };
}

function marginTop(marginTop) {
  return {
    marginTop: marginTop
  };
}

function marginRight(marginRight) {
  return {
    marginRight: marginRight
  };
}

function marginBottom(marginBottom) {
  return {
    marginBottom: marginBottom
  };
}

function marginLeft(marginLeft) {
  return {
    marginLeft: marginLeft
  };
}

function verticalMargin(value) {
  return (0, _standardFunctions.merge)(marginTop(value), marginBottom(value));
}

function horizontalMargin(value) {
  return (0, _standardFunctions.merge)(marginRight(value), marginLeft(value));
}

var autoMargin = margin('auto');
exports.autoMargin = autoMargin;
var quarterRemMargin = (0, _baseUnit.quarterRemStyle)(margin);
exports.quarterRemMargin = quarterRemMargin;
var quarterRemMarginTop = (0, _baseUnit.quarterRemStyle)(marginTop);
exports.quarterRemMarginTop = quarterRemMarginTop;
var quarterRemMarginRight = (0, _baseUnit.quarterRemStyle)(marginRight);
exports.quarterRemMarginRight = quarterRemMarginRight;
var quarterRemMarginBottom = (0, _baseUnit.quarterRemStyle)(marginBottom);
exports.quarterRemMarginBottom = quarterRemMarginBottom;
var quarterRemMarginLeft = (0, _baseUnit.quarterRemStyle)(marginLeft);
exports.quarterRemMarginLeft = quarterRemMarginLeft;
var quarterRemHorizontalMargin = (0, _baseUnit.quarterRemStyle)(horizontalMargin);
exports.quarterRemHorizontalMargin = quarterRemHorizontalMargin;
var quarterRemVerticalMargin = (0, _baseUnit.quarterRemStyle)(verticalMargin);
exports.quarterRemVerticalMargin = quarterRemVerticalMargin;
var margin1 = quarterRemMargin(1);
exports.margin1 = margin1;
var margin2 = quarterRemMargin(2);
exports.margin2 = margin2;
var margin3 = quarterRemMargin(3);
exports.margin3 = margin3;
var margin4 = quarterRemMargin(4);
exports.margin4 = margin4;
var margin5 = quarterRemMargin(5);
exports.margin5 = margin5;
var margin6 = quarterRemMargin(6);
exports.margin6 = margin6;
var margin8 = quarterRemMargin(8);
exports.margin8 = margin8;
var margin10 = quarterRemMargin(10);
exports.margin10 = margin10;
var margin12 = quarterRemMargin(12);
exports.margin12 = margin12;
var margin16 = quarterRemMargin(16);
exports.margin16 = margin16;
var margin20 = quarterRemMargin(20);
exports.margin20 = margin20;
var marginTop1 = quarterRemMarginTop(1);
exports.marginTop1 = marginTop1;
var marginTop2 = quarterRemMarginTop(2);
exports.marginTop2 = marginTop2;
var marginTop3 = quarterRemMarginTop(3);
exports.marginTop3 = marginTop3;
var marginTop4 = quarterRemMarginTop(4);
exports.marginTop4 = marginTop4;
var marginTop5 = quarterRemMarginTop(5);
exports.marginTop5 = marginTop5;
var marginTop6 = quarterRemMarginTop(6);
exports.marginTop6 = marginTop6;
var marginTop8 = quarterRemMarginTop(8);
exports.marginTop8 = marginTop8;
var marginTop10 = quarterRemMarginTop(10);
exports.marginTop10 = marginTop10;
var marginTop12 = quarterRemMarginTop(12);
exports.marginTop12 = marginTop12;
var marginTop16 = quarterRemMarginTop(16);
exports.marginTop16 = marginTop16;
var marginTop20 = quarterRemMarginTop(20);
exports.marginTop20 = marginTop20;
var marginRight1 = quarterRemMarginRight(1);
exports.marginRight1 = marginRight1;
var marginRight2 = quarterRemMarginRight(2);
exports.marginRight2 = marginRight2;
var marginRight3 = quarterRemMarginRight(3);
exports.marginRight3 = marginRight3;
var marginRight4 = quarterRemMarginRight(4);
exports.marginRight4 = marginRight4;
var marginRight5 = quarterRemMarginRight(5);
exports.marginRight5 = marginRight5;
var marginRight6 = quarterRemMarginRight(6);
exports.marginRight6 = marginRight6;
var marginRight8 = quarterRemMarginRight(8);
exports.marginRight8 = marginRight8;
var marginRight10 = quarterRemMarginRight(10);
exports.marginRight10 = marginRight10;
var marginRight12 = quarterRemMarginRight(12);
exports.marginRight12 = marginRight12;
var marginRight16 = quarterRemMarginRight(16);
exports.marginRight16 = marginRight16;
var marginRight20 = quarterRemMarginRight(20);
exports.marginRight20 = marginRight20;
var marginBottom1 = quarterRemMarginBottom(1);
exports.marginBottom1 = marginBottom1;
var marginBottom2 = quarterRemMarginBottom(2);
exports.marginBottom2 = marginBottom2;
var marginBottom3 = quarterRemMarginBottom(3);
exports.marginBottom3 = marginBottom3;
var marginBottom4 = quarterRemMarginBottom(4);
exports.marginBottom4 = marginBottom4;
var marginBottom5 = quarterRemMarginBottom(5);
exports.marginBottom5 = marginBottom5;
var marginBottom6 = quarterRemMarginBottom(6);
exports.marginBottom6 = marginBottom6;
var marginBottom8 = quarterRemMarginBottom(8);
exports.marginBottom8 = marginBottom8;
var marginBottom10 = quarterRemMarginBottom(10);
exports.marginBottom10 = marginBottom10;
var marginBottom12 = quarterRemMarginBottom(12);
exports.marginBottom12 = marginBottom12;
var marginBottom16 = quarterRemMarginBottom(16);
exports.marginBottom16 = marginBottom16;
var marginBottom20 = quarterRemMarginBottom(20);
exports.marginBottom20 = marginBottom20;
var marginLeft1 = quarterRemMarginLeft(1);
exports.marginLeft1 = marginLeft1;
var marginLeft2 = quarterRemMarginLeft(2);
exports.marginLeft2 = marginLeft2;
var marginLeft3 = quarterRemMarginLeft(3);
exports.marginLeft3 = marginLeft3;
var marginLeft4 = quarterRemMarginLeft(4);
exports.marginLeft4 = marginLeft4;
var marginLeft5 = quarterRemMarginLeft(5);
exports.marginLeft5 = marginLeft5;
var marginLeft6 = quarterRemMarginLeft(6);
exports.marginLeft6 = marginLeft6;
var marginLeft8 = quarterRemMarginLeft(8);
exports.marginLeft8 = marginLeft8;
var marginLeft10 = quarterRemMarginLeft(10);
exports.marginLeft10 = marginLeft10;
var marginLeft12 = quarterRemMarginLeft(12);
exports.marginLeft12 = marginLeft12;
var marginLeft16 = quarterRemMarginLeft(16);
exports.marginLeft16 = marginLeft16;
var marginLeft20 = quarterRemMarginLeft(20);
exports.marginLeft20 = marginLeft20;
var horizontalMargin1 = quarterRemHorizontalMargin(1);
exports.horizontalMargin1 = horizontalMargin1;
var horizontalMargin2 = quarterRemHorizontalMargin(2);
exports.horizontalMargin2 = horizontalMargin2;
var horizontalMargin3 = quarterRemHorizontalMargin(3);
exports.horizontalMargin3 = horizontalMargin3;
var horizontalMargin4 = quarterRemHorizontalMargin(4);
exports.horizontalMargin4 = horizontalMargin4;
var horizontalMargin5 = quarterRemHorizontalMargin(5);
exports.horizontalMargin5 = horizontalMargin5;
var horizontalMargin6 = quarterRemHorizontalMargin(6);
exports.horizontalMargin6 = horizontalMargin6;
var horizontalMargin8 = quarterRemHorizontalMargin(8);
exports.horizontalMargin8 = horizontalMargin8;
var horizontalMargin10 = quarterRemHorizontalMargin(10);
exports.horizontalMargin10 = horizontalMargin10;
var horizontalMargin12 = quarterRemHorizontalMargin(12);
exports.horizontalMargin12 = horizontalMargin12;
var horizontalMargin16 = quarterRemHorizontalMargin(16);
exports.horizontalMargin16 = horizontalMargin16;
var horizontalMargin20 = quarterRemHorizontalMargin(20);
exports.horizontalMargin20 = horizontalMargin20;
var verticalMargin1 = quarterRemVerticalMargin(1);
exports.verticalMargin1 = verticalMargin1;
var verticalMargin2 = quarterRemVerticalMargin(2);
exports.verticalMargin2 = verticalMargin2;
var verticalMargin3 = quarterRemVerticalMargin(3);
exports.verticalMargin3 = verticalMargin3;
var verticalMargin4 = quarterRemVerticalMargin(4);
exports.verticalMargin4 = verticalMargin4;
var verticalMargin5 = quarterRemVerticalMargin(5);
exports.verticalMargin5 = verticalMargin5;
var verticalMargin6 = quarterRemVerticalMargin(6);
exports.verticalMargin6 = verticalMargin6;
var verticalMargin8 = quarterRemVerticalMargin(8);
exports.verticalMargin8 = verticalMargin8;
var verticalMargin10 = quarterRemVerticalMargin(10);
exports.verticalMargin10 = verticalMargin10;
var verticalMargin12 = quarterRemVerticalMargin(12);
exports.verticalMargin12 = verticalMargin12;
var verticalMargin16 = quarterRemVerticalMargin(16);
exports.verticalMargin16 = verticalMargin16;
var verticalMargin20 = quarterRemVerticalMargin(20);
exports.verticalMargin20 = verticalMargin20;