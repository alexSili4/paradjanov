const cardsValidator = {
  type: Array,
  required: true,
  validator: (value) =>
    value.every((item) => {
      const keys = Object.keys(item);

      return (
        typeof item === 'object' &&
        keys.includes('id') &&
        typeof item.id === 'string' &&
        keys.includes('title') &&
        typeof item.title === 'string'
      );
    }),
};

export default cardsValidator;
