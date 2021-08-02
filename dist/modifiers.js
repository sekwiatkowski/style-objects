"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.disabled = exports.after = exports.before = exports.focusVisible = exports.focus = exports.active = exports.hover = exports.visited = void 0;

var _standardFunctions = require("standard-functions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function modifier(modifier) {
  return function (styles) {
    return _defineProperty({}, ':' + modifier, (0, _standardFunctions.isOfLengthOne)(styles) ? styles[0] : _standardFunctions.merge.apply(void 0, _toConsumableArray(styles)));
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
var focusVisible = modifier('focusVisible');
exports.focusVisible = focusVisible;
var before = modifier('before');
exports.before = before;
var after = modifier('after');
exports.after = after;
var disabled = modifier('disabled');
exports.disabled = disabled;