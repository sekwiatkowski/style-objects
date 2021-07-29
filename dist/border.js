"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderProperty = borderProperty;
exports.sideBorderProperty = sideBorderProperty;
exports.noLeftBorder = exports.noBottomBorder = exports.noRightBorder = exports.noTopBorder = exports.borderLeftColor = exports.borderLeftStyle = exports.borderLeftWidth = exports.borderBottomColor = exports.borderBottomStyle = exports.borderBottomWidth = exports.borderRightColor = exports.borderRightStyle = exports.borderRightWidth = exports.borderTopColor = exports.borderTopStyle = exports.borderTopWidth = exports.borderColor = exports.borderStyle = exports.borderWidth = exports.borderLeft = exports.borderBottom = exports.borderRight = exports.borderTop = exports.border = void 0;

var _standardFunctions = require("standard-functions");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createBorder(property) {
  return function (width, style, color) {
    return _defineProperty({}, property, (0, _standardFunctions.joinWithSpace)(width, style, color));
  };
}

var border = createBorder('border');
exports.border = border;
var borderTop = createBorder('borderTop');
exports.borderTop = borderTop;
var borderRight = createBorder('borderRight');
exports.borderRight = borderRight;
var borderBottom = createBorder('borderBottom');
exports.borderBottom = borderBottom;
var borderLeft = createBorder('borderLeft');
exports.borderLeft = borderLeft;

function borderProperty(property) {
  return function (value) {
    var key = 'border' + (0, _standardFunctions.capitalize)(property);
    return _defineProperty({}, key, value);
  };
}

var borderWidth = borderProperty('width');
exports.borderWidth = borderWidth;
var borderStyle = borderProperty('style');
exports.borderStyle = borderStyle;
var borderColor = borderProperty('color');
exports.borderColor = borderColor;

function sideBorderProperty(side) {
  return function (property) {
    return function (value) {
      var key = 'border' + (0, _standardFunctions.capitalize)(side) + (0, _standardFunctions.capitalize)(property);
      return _defineProperty({}, key, value);
    };
  };
}

var borderTopProperty = sideBorderProperty('top');
var borderTopWidth = borderTopProperty('width');
exports.borderTopWidth = borderTopWidth;
var borderTopStyle = borderTopProperty('style');
exports.borderTopStyle = borderTopStyle;
var borderTopColor = borderTopProperty('color');
exports.borderTopColor = borderTopColor;
var borderRightProperty = sideBorderProperty('right');
var borderRightWidth = borderRightProperty('width');
exports.borderRightWidth = borderRightWidth;
var borderRightStyle = borderRightProperty('style');
exports.borderRightStyle = borderRightStyle;
var borderRightColor = borderRightProperty('color');
exports.borderRightColor = borderRightColor;
var borderBottomProperty = sideBorderProperty('bottom');
var borderBottomWidth = borderBottomProperty('width');
exports.borderBottomWidth = borderBottomWidth;
var borderBottomStyle = borderBottomProperty('style');
exports.borderBottomStyle = borderBottomStyle;
var borderBottomColor = borderBottomProperty('color');
exports.borderBottomColor = borderBottomColor;
var borderLeftProperty = sideBorderProperty('left');
var borderLeftWidth = borderLeftProperty('width');
exports.borderLeftWidth = borderLeftWidth;
var borderLeftStyle = borderLeftProperty('style');
exports.borderLeftStyle = borderLeftStyle;
var borderLeftColor = borderLeftProperty('color');
exports.borderLeftColor = borderLeftColor;

function noBorder(side) {
  // The use of "border-[side]: none" caused issues on page changes.
  return sideBorderProperty(side)('width')('0');
}

var noTopBorder = noBorder('top');
exports.noTopBorder = noTopBorder;
var noRightBorder = noBorder('right');
exports.noRightBorder = noRightBorder;
var noBottomBorder = noBorder('bottom');
exports.noBottomBorder = noBottomBorder;
var noLeftBorder = noBorder('left');
exports.noLeftBorder = noLeftBorder;