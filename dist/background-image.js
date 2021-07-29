"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundImage = backgroundImage;
exports.noBackgroundImage = void 0;

function backgroundImage(backgroundImage) {
  return {
    backgroundImage: backgroundImage
  };
}

var noBackgroundImage = {
  backgroundImage: 'none'
};
exports.noBackgroundImage = noBackgroundImage;