function getScaleOnResizeWindow({ width, height }) {
  const { innerWidth, innerHeight } = window;
  const scaleX = innerWidth / width;
  const scaleY = innerHeight / height;
  const scale = Math.max(scaleX, scaleY);

  return scale;
}

export default getScaleOnResizeWindow;
