import BForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { handleChange, handleSubmit } from './handlersForm';

const { Group: BGroup, Control: BControl } = BForm;

const Form = ({ refetch }) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    lastName: '',
    percent: '',
    color: '',
  });

  return (
    <BForm onSubmit={(e) => handleSubmit(e, inputValues, setInputValues, refetch)}>
      <BGroup>
        <Row>
          <Col md={2}>
            <BControl
              type="text"
              placeholder="First Name"
              name="name"
              value={inputValues.name}
              onChange={(e) => handleChange(e, inputValues, setInputValues)}
              required
            />
          </Col>
          <Col md={2}>
            <BControl
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={inputValues.lastName}
              onChange={handleChange}
              required
            />
          </Col>
          <Col md={2}>
            <BControl
              type="number"
              placeholder="Participation"
              name="percent"
              value={inputValues.percent}
              onChange={handleChange}
              min="1"
              required
            />
          </Col>
          <Col md={2}>
            <BControl
              type="number"
              placeholder="Color"
              name="color"
              value={inputValues.color}
              onChange={handleChange}
              min="3"
              max="10"
              required
            />
          </Col>
          <Col md='auto'>
            <Button variant="outline-light" type="submit">
              Send
            </Button>
          </Col>
        </Row>
      </BGroup>
    </BForm>
  );
};

export default Form;
