"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.topRightRadius = topRightRadius;
exports.rightRadius = rightRadius;
exports.bottomRightRadius = bottomRightRadius;
exports.bottomLeftRadius = bottomLeftRadius;
exports.leftRadius = leftRadius;
exports.topLeftRadius = topLeftRadius;
exports.radius = radius;
exports.fullyRounded = exports.radius6 = exports.radius5 = exports.radius4 = exports.radius3 = exports.radius2 = exports.radius1 = exports.bottomRightRadius6 = exports.bottomRightRadius5 = exports.bottomRightRadius4 = exports.bottomRightRadius3 = exports.bottomRightRadius2 = exports.bottomRightRadius1 = exports.topRightRadius6 = exports.topRightRadius5 = exports.topRightRadius4 = exports.topRightRadius3 = exports.topRightRadius2 = exports.topRightRadius1 = exports.rightRadius6 = exports.rightRadius5 = exports.rightRadius4 = exports.rightRadius3 = exports.rightRadius2 = exports.rightRadius1 = exports.bottomLeftRadius6 = exports.bottomLeftRadius5 = exports.bottomLeftRadius4 = exports.bottomLeftRadius3 = exports.bottomLeftRadius2 = exports.bottomLeftRadius1 = exports.topLeftRadius6 = exports.topLeftRadius5 = exports.topLeftRadius4 = exports.topLeftRadius3 = exports.topLeftRadius2 = exports.topLeftRadius1 = exports.leftRadius6 = exports.leftRadius5 = exports.leftRadius4 = exports.leftRadius3 = exports.leftRadius2 = exports.leftRadius1 = void 0;

var _baseUnit = require("./base-unit");

var _standardFunctions = require("standard-functions");

function topRightRadius(borderTopRightRadius) {
  return {
    borderTopRightRadius: borderTopRightRadius
  };
}

function rightRadius(radius) {
  return (0, _standardFunctions.merge)(topRightRadius(radius), bottomRightRadius(radius));
}

function bottomRightRadius(borderBottomRightRadius) {
  return {
    borderBottomRightRadius: borderBottomRightRadius
  };
}

function bottomLeftRadius(borderBottomLeftRadius) {
  return {
    borderBottomLeftRadius: borderBottomLeftRadius
  };
}

function leftRadius(radius) {
  return (0, _standardFunctions.merge)(topLeftRadius(radius), bottomLeftRadius(radius));
}

function topLeftRadius(borderTopLeftRadius) {
  return {
    borderTopLeftRadius: borderTopLeftRadius
  };
}

function radius(borderRadius) {
  return {
    borderRadius: borderRadius
  };
}

var sixteenthRemRadius = (0, _baseUnit.sixteenthRemStyle)(radius);
var sixteenthRemLeftRadius = (0, _baseUnit.sixteenthRemStyle)(leftRadius);
var sixteenthRemTopLeftRadius = (0, _baseUnit.sixteenthRemStyle)(topLeftRadius);
var sixteenthRemBottomLeftRadius = (0, _baseUnit.sixteenthRemStyle)(bottomLeftRadius);
var sixteenthRemRightRadius = (0, _baseUnit.sixteenthRemStyle)(rightRadius);
var sixteenthRemTopRightRadius = (0, _baseUnit.sixteenthRemStyle)(topRightRadius);
var sixteenthRemBottomRightRadius = (0, _baseUnit.sixteenthRemStyle)(bottomRightRadius);
var leftRadius1 = sixteenthRemLeftRadius(1);
exports.leftRadius1 = leftRadius1;
var leftRadius2 = sixteenthRemLeftRadius(2);
exports.leftRadius2 = leftRadius2;
var leftRadius3 = sixteenthRemLeftRadius(3);
exports.leftRadius3 = leftRadius3;
var leftRadius4 = sixteenthRemLeftRadius(4);
exports.leftRadius4 = leftRadius4;
var leftRadius5 = sixteenthRemLeftRadius(5);
exports.leftRadius5 = leftRadius5;
var leftRadius6 = sixteenthRemLeftRadius(6);
exports.leftRadius6 = leftRadius6;
var topLeftRadius1 = sixteenthRemTopLeftRadius(1);
exports.topLeftRadius1 = topLeftRadius1;
var topLeftRadius2 = sixteenthRemTopLeftRadius(2);
exports.topLeftRadius2 = topLeftRadius2;
var topLeftRadius3 = sixteenthRemTopLeftRadius(3);
exports.topLeftRadius3 = topLeftRadius3;
var topLeftRadius4 = sixteenthRemTopLeftRadius(4);
exports.topLeftRadius4 = topLeftRadius4;
var topLeftRadius5 = sixteenthRemTopLeftRadius(5);
exports.topLeftRadius5 = topLeftRadius5;
var topLeftRadius6 = sixteenthRemTopLeftRadius(6);
exports.topLeftRadius6 = topLeftRadius6;
var bottomLeftRadius1 = sixteenthRemBottomLeftRadius(1);
exports.bottomLeftRadius1 = bottomLeftRadius1;
var bottomLeftRadius2 = sixteenthRemBottomLeftRadius(2);
exports.bottomLeftRadius2 = bottomLeftRadius2;
var bottomLeftRadius3 = sixteenthRemBottomLeftRadius(3);
exports.bottomLeftRadius3 = bottomLeftRadius3;
var bottomLeftRadius4 = sixteenthRemBottomLeftRadius(4);
exports.bottomLeftRadius4 = bottomLeftRadius4;
var bottomLeftRadius5 = sixteenthRemBottomLeftRadius(5);
exports.bottomLeftRadius5 = bottomLeftRadius5;
var bottomLeftRadius6 = sixteenthRemBottomLeftRadius(6);
exports.bottomLeftRadius6 = bottomLeftRadius6;
var rightRadius1 = sixteenthRemRightRadius(1);
exports.rightRadius1 = rightRadius1;
var rightRadius2 = sixteenthRemRightRadius(2);
exports.rightRadius2 = rightRadius2;
var rightRadius3 = sixteenthRemRightRadius(3);
exports.rightRadius3 = rightRadius3;
var rightRadius4 = sixteenthRemRightRadius(4);
exports.rightRadius4 = rightRadius4;
var rightRadius5 = sixteenthRemRightRadius(5);
exports.rightRadius5 = rightRadius5;
var rightRadius6 = sixteenthRemRightRadius(6);
exports.rightRadius6 = rightRadius6;
var topRightRadius1 = sixteenthRemTopRightRadius(1);
exports.topRightRadius1 = topRightRadius1;
var topRightRadius2 = sixteenthRemTopRightRadius(2);
exports.topRightRadius2 = topRightRadius2;
var topRightRadius3 = sixteenthRemTopRightRadius(3);
exports.topRightRadius3 = topRightRadius3;
var topRightRadius4 = sixteenthRemTopRightRadius(4);
exports.topRightRadius4 = topRightRadius4;
var topRightRadius5 = sixteenthRemTopRightRadius(5);
exports.topRightRadius5 = topRightRadius5;
var topRightRadius6 = sixteenthRemTopRightRadius(6);
exports.topRightRadius6 = topRightRadius6;
var bottomRightRadius1 = sixteenthRemBottomRightRadius(1);
exports.bottomRightRadius1 = bottomRightRadius1;
var bottomRightRadius2 = sixteenthRemBottomRightRadius(2);
exports.bottomRightRadius2 = bottomRightRadius2;
var bottomRightRadius3 = sixteenthRemBottomRightRadius(3);
exports.bottomRightRadius3 = bottomRightRadius3;
var bottomRightRadius4 = sixteenthRemBottomRightRadius(4);
exports.bottomRightRadius4 = bottomRightRadius4;
var bottomRightRadius5 = sixteenthRemBottomRightRadius(5);
exports.bottomRightRadius5 = bottomRightRadius5;
var bottomRightRadius6 = sixteenthRemBottomRightRadius(6);
exports.bottomRightRadius6 = bottomRightRadius6;
var radius1 = sixteenthRemRadius(1);
exports.radius1 = radius1;
var radius2 = sixteenthRemRadius(2);
exports.radius2 = radius2;
var radius3 = sixteenthRemRadius(3);
exports.radius3 = radius3;
var radius4 = sixteenthRemRadius(4);
exports.radius4 = radius4;
var radius5 = sixteenthRemRadius(5);
exports.radius5 = radius5;
var radius6 = sixteenthRemRadius(6);
exports.radius6 = radius6;
var fullyRounded = radius('9999px');
exports.fullyRounded = fullyRounded;