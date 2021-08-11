"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.after = exports.before = exports.focusVisible = exports.focus = exports.active = exports.hover = exports.visited = void 0;

var _standardFunctions = require("standard-functions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function modifier(modifier) {
  return function () {
    for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
      styles[_key] = arguments[_key];
    }

    return _defineProperty({}, ':' + modifier, (0, _standardFunctions.isOfLengthOne)(styles) ? styles[0] : _standardFunctions.merge.apply(void 0, styles));
  };
}

var visited = modifier('visited');
exports.visited = visited;
var hover = modifier('hover');
exports.hover = hover;
var active = modifier('active');
exports.active = active;
var focus = modifier('focus');
exports.focus = focus;
var focusVisible = modifier('focus-visible');
exports.focusVisible = focusVisible;
var before = modifier('before');
exports.before = before;
var after = modifier('after');
exports.after = after;
var disabled = modifier('disabled');
exports.disabled = disabled;