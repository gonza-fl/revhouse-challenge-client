import BForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import constants from '../../config/constants';

const { Group: BGroup, Control: BControl } = BForm;

const Form = ({ refetch }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    lastName: '',
    percent: '',
    color: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch(constants.createUser, 'post', inputValues);
  };
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <BForm className="w-100 mt-3" onSubmit={handleSubmit}>
      <BGroup className="d-sm-flex jsutify-content-between w-100">
        <BControl
          type="text"
          placeholder="First Name"
          name="name"
          value={inputValues.name}
          onChange={handleChange}
          required
        />
        <BControl
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={inputValues.lastName}
          onChange={handleChange}
          required
        />
        <BControl
          type="number"
          placeholder="Participation"
          name="percent"
          value={inputValues.percent}
          onChange={handleChange}
          min="1"
          required
        />
        <BControl
          type="text"
          placeholder="Color"
          name="color"
          value={inputValues.color}
          onChange={handleChange}
          min="3"
          max="10"
          required
        />
        <Button variant="outline-light" type="submit">
          Send
        </Button>
      </BGroup>
    </BForm>
  );
};

export default Form;
