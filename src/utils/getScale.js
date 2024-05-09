import getContentGeometry from './getContentGeometry';

function getScale(element) {
  const { innerWidth, innerHeight } = window;
  const { width, height } = getContentGeometry(element);
  const scaleX = innerWidth / width;
  const scaleY = innerHeight / height;

  return Math.max(scaleX, scaleY);
}

export default getScale;
