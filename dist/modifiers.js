"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visited = visited;
exports.hover = hover;
exports.active = active;
exports.focus = focus;
exports.focusVisible = focusVisible;
exports.before = before;
exports.after = after;

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

function visited() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return modifier('visited')(styles);
}

function hover() {
  for (var _len2 = arguments.length, styles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    styles[_key2] = arguments[_key2];
  }

  return modifier('hover')(styles);
}

function active() {
  for (var _len3 = arguments.length, styles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    styles[_key3] = arguments[_key3];
  }

  return modifier('active')(styles);
}

function focus() {
  for (var _len4 = arguments.length, styles = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    styles[_key4] = arguments[_key4];
  }

  return modifier('focus')(styles);
}

function focusVisible() {
  for (var _len5 = arguments.length, styles = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    styles[_key5] = arguments[_key5];
  }

  return modifier('focus-visible')(styles);
}

function before() {
  for (var _len6 = arguments.length, styles = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    styles[_key6] = arguments[_key6];
  }

  return modifier('before')(styles);
}

function after() {
  for (var _len7 = arguments.length, styles = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    styles[_key7] = arguments[_key7];
  }

  return modifier('after')(styles);
}