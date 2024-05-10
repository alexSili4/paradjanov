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
      typeof value.title === 'string'
    );
  },
};

export default cardValidator;
