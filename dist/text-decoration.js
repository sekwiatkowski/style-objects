"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.underline = exports.noTextDecoration = void 0;

function textDecoration(textDecoration) {
  return {
    textDecoration: textDecoration
  };
}

var noTextDecoration = textDecoration('none');
exports.noTextDecoration = noTextDecoration;
var underline = textDecoration('underline');
exports.underline = underline;