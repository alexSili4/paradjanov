const cardValidator = {
  type: Object,
  required: true,
  validator: (value) => {
    const keys = Object.keys(value);

    return (
      keys.includes('id') &&
      typeof value.id === 'string' &&
      keys.includes('number') &&
      typeof value.number === 'number' &&
      keys.includes('title') &&
      typeof value.title === 'string' &&
      keys.includes('animation') &&
      typeof value.animation === 'object' &&
      value.animation.every((item) => {
        const isValidType = typeof item === 'object';
        const keys = Object.keys(item);
        const isWidthKey = keys.includes('width');
        const isHeightKey = keys.includes('height');
        const isValidWidthKeyValue = typeof item.width === 'number';
        const isValidHeightKeyValue = typeof item.height === 'number';

        return isValidType && isWidthKey && isHeightKey && isValidWidthKeyValue && isValidHeightKeyValue;
      })
    );
  },
};

export default cardValidator;
