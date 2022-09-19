import constants from '../../config/constants';

export const handleSubmit = (e, inputValues, refetch) => {
  e.preventDefault();
  refetch(constants.createUser, 'post', inputValues);
};
export const handleChange = (e, inputValues, setInputValues) => {
  setInputValues({
    ...inputValues,
    [e.target.name]: e.target.value,
  });
};
