import { createRef } from "react";
import { Form } from 'react-bootstrap';

export default function InputControl(props) {
  const { setValue, placeholder, name, type} = props;
  
  return <Form.Control type={type ? type : 'text' } name={name} placeholder={placeholder} onChange={e => setValue(e.target.name, e.target.value)}/>;
}