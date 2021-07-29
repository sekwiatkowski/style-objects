function resize(resize) {
  return {
    resize
  };
}

export const verticalResize = resize('vertical');
export const horizontalResize = resize('horizontal');
export const noResize = resize('none');
export const resizeBoth = resize('both');