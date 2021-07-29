"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibility = visibility;
exports.invisible = exports.visible = void 0;

function visibility(visibility) {
  return {
    visibility: visibility
  };
}

var visible = visibility('visible');
exports.visible = visible;
var invisible = visibility('hidden');
exports.invisible = invisible;