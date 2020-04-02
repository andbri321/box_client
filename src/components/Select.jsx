import React from "react";
import { Doughnut } from "react-chartjs-2";
import Form from 'react-bootstrap/Form';

const Select = ({}) => {
  return (
    <Form.Control as="select">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    	<option>5</option>
    </Form.Control>
  );
};

export default Select;