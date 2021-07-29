"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.content = content;
exports.noContent = void 0;

function content(content) {
  return {
    content: content
  };
}

var noContent = content("''");
exports.noContent = noContent;