const getPrevAndNextCardId = ({ cardId, cards }) => {
  const firstIndex = 0;
  const lastIndex = cards.length - 1;

  let prevCardId = cards[firstIndex].id;
  let nextCardId = cards[lastIndex].id;

  const currentCardIndex = cards.findIndex(({ id }) => id === cardId);
  const nextCardIndex = currentCardIndex + 1;
  const prevCardIndex = currentCardIndex - 1;

  if (prevCardIndex > firstIndex) {
    prevCardId = cards[prevCardIndex].id;
  }

  if (nextCardIndex < lastIndex) {
    nextCardId = cards[nextCardIndex].id;
  }

  return { prevCardId, nextCardId };
};

export default getPrevAndNextCardId;
