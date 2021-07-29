"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.top = top;
exports.right = right;
exports.bottom = bottom;
exports.left = left;
exports.left0 = exports.bottom0 = exports.right0 = exports.top0 = exports.fixed = exports.absolute = exports.relative = void 0;

function position(position) {
  return {
    position: position
  };
}

var relative = position('relative');
exports.relative = relative;
var absolute = position('absolute');
exports.absolute = absolute;
var fixed = position('fixed');
exports.fixed = fixed;

function top(top) {
  return {
    top: top
  };
}

var top0 = top('0');
exports.top0 = top0;

function right(right) {
  return {
    right: right
  };
}

var right0 = right('0');
exports.right0 = right0;

function bottom(bottom) {
  return {
    bottom: bottom
  };
}

var bottom0 = bottom('0');
exports.bottom0 = bottom0;

function left(left) {
  return {
    left: left
  };
}

var left0 = left('0');
exports.left0 = left0;