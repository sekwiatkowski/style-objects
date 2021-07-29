"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.justifySelfFlexEnd = exports.justifySelfFlexStart = exports.justifySelfCenter = exports.justifyContentFlexEnd = exports.justifyContentFlexStart = exports.justifyContentSpaceEvenly = exports.justifyContentSpaceAround = exports.justifyContentSpaceBetween = exports.justifyContentCenter = exports.alignSelfFlexEnd = exports.alignSelfFlexStart = exports.alignSelfCenter = exports.alignItemsFlexEnd = exports.alignItemsFlexStart = exports.alignItemsCenter = void 0;

function alignItems(alignItems) {
  return {
    alignItems: alignItems
  };
}

var alignItemsCenter = alignItems('center');
exports.alignItemsCenter = alignItemsCenter;
var alignItemsFlexStart = alignItems('flex-start');
exports.alignItemsFlexStart = alignItemsFlexStart;
var alignItemsFlexEnd = alignItems('flex-end');
exports.alignItemsFlexEnd = alignItemsFlexEnd;

function alignSelf(alignSelf) {
  return {
    alignSelf: alignSelf
  };
}

var alignSelfCenter = alignSelf('center');
exports.alignSelfCenter = alignSelfCenter;
var alignSelfFlexStart = alignSelf('flex-start');
exports.alignSelfFlexStart = alignSelfFlexStart;
var alignSelfFlexEnd = alignSelf('flex-end');
exports.alignSelfFlexEnd = alignSelfFlexEnd;

function justifyContent(justifyContent) {
  return {
    justifyContent: justifyContent
  };
}

var justifyContentCenter = justifyContent('center');
exports.justifyContentCenter = justifyContentCenter;
var justifyContentSpaceBetween = justifyContent('space-between');
exports.justifyContentSpaceBetween = justifyContentSpaceBetween;
var justifyContentSpaceAround = justifyContent('space-around');
exports.justifyContentSpaceAround = justifyContentSpaceAround;
var justifyContentSpaceEvenly = justifyContent('space-evenly');
exports.justifyContentSpaceEvenly = justifyContentSpaceEvenly;
var justifyContentFlexStart = justifyContent('flex-start');
exports.justifyContentFlexStart = justifyContentFlexStart;
var justifyContentFlexEnd = justifyContent('flex-end');
exports.justifyContentFlexEnd = justifyContentFlexEnd;

function justifySelf(justifySelf) {
  return {
    justifySelf: justifySelf
  };
}

var justifySelfCenter = justifySelf('center');
exports.justifySelfCenter = justifySelfCenter;
var justifySelfFlexStart = justifySelf('flex-start');
exports.justifySelfFlexStart = justifySelfFlexStart;
var justifySelfFlexEnd = justifySelf('flex-end');
exports.justifySelfFlexEnd = justifySelfFlexEnd;