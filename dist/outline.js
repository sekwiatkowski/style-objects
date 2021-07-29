import { joinWithSpace } from 'standard-functions';
export function outline(width, style, color) {
  return {
    outline: joinWithSpace(width, style, color)
  };
}
export function outlineOffset(outlineOffset) {
  return {
    outlineOffset
  };
}