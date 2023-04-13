const REQUIRED_FIELD = 'This field is required';

export const dayValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9]{2}$/)) {
      return true;
    }
    return 'Must be a valid day';
  },
};

export const monthValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9]{2}$/)) {
      return true;
    }
    return 'Must be a valid mouth';
  },
};

export const yearValidation = {
  required: REQUIRED_FIELD,
  validate: (value) => {
    if (value.match(/^[0-9]{4}$/)) {
      return true;
    }
    return 'Must be in the past';
  },
};
