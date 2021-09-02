import { createRef, useEffect, useState } from "react";
import enterIcon from "../assets/enter-icon.png";
import InputControl from "./InputControl";

export default function EditItem({ addItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const sendItem = (e) => {
    e.preventDefault();
    addItem({ name, quantity, price });
    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <tr className="d-flex">
      <td className="col-6">
        <InputControl
          className="form-control"
          placeholder="Please enter Item Names."
          value={name}
          setValue={setName}
        />
      </td>
      <td className="col-6 d-flex">
        <div className="col-md-5 mx-1">
          <InputControl
            className="text-start"
            placeholder="0.00"
            value={quantity}
            setValue={setQuantity}
          />
        </div>
        <div className="col-md-5 mx-1">
          <InputControl
            type="text"
            className="text-start"
            placeholder="0.00"
            value={price}
            setValue={setPrice}
          />
        </div>
        <div className="col-md-2 div-close cursor-pointer" onClick={sendItem}>
          <img className="img-close" src={enterIcon} alt="enter" />
        </div>
      </td>
    </tr>
  );
}
