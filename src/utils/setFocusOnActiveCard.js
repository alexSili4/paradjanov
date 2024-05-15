import getContentGeometry from './getContentGeometry';
import getGap from './getGap';

const setFocusOnActiveCard = ({ container, activeCardId, top, left }) => {
  const targetCard = container.querySelector(`[data-card-id=${activeCardId}]`);
  const { targetElementWidthCenter, targetElementHeightCenter } = getContentGeometry(targetCard);
  const { width: containerWidth, height: containerHeight } = getContentGeometry(container);
  let topOffset = top + targetElementHeightCenter;
  let leftOffset = left + targetElementWidthCenter;
  const { rightGap, leftGap, topGap, bottomGap } = getGap({ containerWidth, containerHeight, leftOffset, topOffset });

  if (rightGap > 0) {
    leftOffset = leftOffset + rightGap;
  }

  if (leftGap > 0) {
    leftOffset = leftOffset - leftGap;
  }

  if (topGap > 0) {
    topOffset = topOffset - topGap;
  }

  if (bottomGap > 0) {
    topOffset = topOffset + bottomGap;
  }

  return { topOffset, leftOffset };
};

export default setFocusOnActiveCard;
