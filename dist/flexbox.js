"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexWrap = exports.flexColumn = exports.flexRow = exports.flex1 = void 0;
var flex1 = {
  flex: '1'
};
exports.flex1 = flex1;

function flexDirection(flexDirection) {
  return {
    flexDirection: flexDirection
  };
}

var flexRow = flexDirection('row');
exports.flexRow = flexRow;
var flexColumn = flexDirection('column');
exports.flexColumn = flexColumn;
var flexWrap = {
  flexWrap: 'wrap'
};
exports.flexWrap = flexWrap;