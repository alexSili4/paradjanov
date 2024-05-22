const glassesValidator = {
  type: Array,
  required: true,
  validator: (value) =>
    value.every((item) => {
      const keys = Object.keys(item);

      return typeof item === 'object' && keys.includes('desc') && typeof item.desc === 'string' && keys.includes('volume') && typeof item.volume === 'number';
    }),
};

export default glassesValidator;
