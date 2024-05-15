const getGap = ({ containerWidth, containerHeight, leftOffset, topOffset }) => {
  const containerRightSide = containerWidth + leftOffset;
  const containerBottomSide = containerHeight + topOffset;
  const rightGap = innerWidth - containerRightSide;
  const leftGap = leftOffset;
  const topGap = topOffset;
  const bottomGap = innerHeight - containerBottomSide;

  return { rightGap, leftGap, topGap, bottomGap };
};

export default getGap;
