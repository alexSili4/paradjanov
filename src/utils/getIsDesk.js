const getIsDesk = (isDeskRef) => {
  const isDesk = window.innerWidth >= 1280;
  const isNewWindowSize = isDesk !== isDeskRef.value;

  if (isNewWindowSize) {
    isDeskRef.value = isDesk;
  }
};

export default getIsDesk;
