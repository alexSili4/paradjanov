import getViewportParams from './getViewportParams';

function getContentGeometry(element) {
  const { viewportHeightCenter, viewportWidthCenter } = getViewportParams();
  const { height, width, left, right, top, bottom } = element.getBoundingClientRect();
  const widthCenter = left + width / 2;
  const heightCenter = top + height / 2;
  const targetElementWidthCenter = viewportWidthCenter - widthCenter;
  const targetElementHeightCenter = viewportHeightCenter - heightCenter;

  return { height, width, left, right, top, bottom, widthCenter, heightCenter, targetElementWidthCenter, targetElementHeightCenter };
}

export default getContentGeometry;
