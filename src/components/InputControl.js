<<<<<<< HEAD
import { createRef } from "react";
import { Form } from 'react-bootstrap';

export default function InputControl(props) {
  const { setValue, placeholder, name, type} = props;
  
  return <Form.Control type={type ? type : 'text' } name={name} placeholder={placeholder} onChange={e => setValue(e.target.name, e.target.value)}/>;
=======
import { createRef } from "react";
import { Form } from 'react-bootstrap';

export default function InputControl(props) {
  const { setValue, placeholder, name, type} = props;
  
  return <Form.Control type={type ? type : 'text' } name={name} placeholder={placeholder} onChange={e => setValue(e.target.name, e.target.value)}/>;
>>>>>>> b125e2ff8034ac3f938d8c19f5088629ad357fc0
}