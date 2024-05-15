const getViewportParams = () => {
  const { innerHeight, innerWidth } = window;
  const viewportHeightCenter = innerHeight / 2;
  const viewportWidthCenter = innerWidth / 2;

  return { viewportHeightCenter, viewportWidthCenter };
};

export default getViewportParams;
