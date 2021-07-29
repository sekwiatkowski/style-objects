"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCursor = exports.wait = exports.pointer = void 0;

function cursor(cursor) {
  return {
    cursor: cursor
  };
}

var pointer = cursor('pointer');
exports.pointer = pointer;
var wait = cursor('wait');
exports.wait = wait;
var defaultCursor = cursor('cursor');
exports.defaultCursor = defaultCursor;