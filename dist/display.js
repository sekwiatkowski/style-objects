"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidden = exports.flex = exports.inlineBlock = exports.inline = exports.block = void 0;

function display(display) {
  return {
    display: display
  };
}

var block = display('block');
exports.block = block;
var inline = display('inline');
exports.inline = inline;
var inlineBlock = display('inline-block');
exports.inlineBlock = inlineBlock;
var flex = display('flex');
exports.flex = flex;
var hidden = display('none');
exports.hidden = hidden;