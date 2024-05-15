function getContentGeometry(element) {
  const { height, width, left, right, top, bottom } = element.getBoundingClientRect();
  const widthCenter = left + width / 2;
  const heightCenter = top + height / 2;

  return { height, width, left, right, top, bottom, widthCenter, heightCenter };
}

export default getContentGeometry;
