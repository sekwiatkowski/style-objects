import { joinWithCommaSpace, toString } from 'standard-functions';
export function transition(...effects) {
  return {
    transition: joinWithCommaSpace(effects)
  };
}
export function easeOut(seconds) {
  return `${toString(seconds)}s ease-out`;
}
export function easeIn(seconds) {
  return `${toString(seconds)}s ease-in`;
}
export function leftTransition(effect) {
  return `left ${effect}`;
}
export function rightTransition(effect) {
  return `right ${effect}`;
}
export function widthTransition(effect) {
  return `width ${effect}`;
}