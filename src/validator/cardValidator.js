const cardValidator = {
  type: Object,
  required: true,
  validator: (value) => {
    const keys = Object.keys(value);

    return (
      keys.includes('id') &&
      typeof value.id === 'string' &&
      keys.includes('title') &&
      typeof value.title === 'string'
    );
  },
};

export default cardValidator;
