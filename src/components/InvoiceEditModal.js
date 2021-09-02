import closeIcon from "../assets/close-btn.png";
import editIcon from "../assets/edit.png";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useInvoices } from "../context/InvoicesProvider";

import Item from "./Item";
import EditItem from "./EditItem";

export default function InvoiceEditModal(props) {
  const { getCustomer } = useInvoices();
  const { open, setShowModal } = props;
  const customer = getCustomer();

  const [invoiceItems, setInvoiceItems] = useState([]);
  const [editable, setEditable] = useState(false);

  const handleClose = () => setShowModal(false);

  const addItem = (invoiceItem) => {
    setInvoiceItems([...invoiceItems, invoiceItem]);
  };

  const saveInvoices = (e) => {
    e.preventDefault();
    //TODO: save apis call
  };

  return (
    <>
      <Modal
        show={open}
        onHide={handleClose}
        dialogClassName="bg-white modal-size"
      >
        <Modal.Body className="m-4">
          <div className="row">
            <div className="col-md-11">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <h5>Create New Invoice</h5>
                    <h6 className="mx-5">ORDER NO: 1234</h6>
                  </div>
                  <h6 className="text-bold">PRODUCTS DEATILS</h6>
                </div>
                <div className="d-flex flex-column text-end">
                  <span>CUSTOMER DETAILS</span>
                  <h6 className="text-blod">{customer?.user ? customer.user : ''}</h6>
                  <span>{customer?.email ? customer.email : ''}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <div className="row">
                <div
                  className="offset-md-6 col-md-6 cursor-pointer"
                  onClick={handleClose}
                >
                  <img src={closeIcon} alt="close" />
                </div>
              </div>
              <div className="row" onClick={setEditable}>
                <div className="col-md-6 mt-3 cursor-pointer">
                  <img src={editIcon} alt="edit" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <table className="table">
              <tbody>
                <tr className="d-flex first-row">
                  <td className="col-6 p-3">ITEM</td>
                  <td className="col-3 p-3 text-end">QUANTITY</td>
                  <td className="col-3 p-3 text-end">PRICE-&#8377;</td>
                </tr>
                {invoiceItems.length > 0 &&
                  invoiceItems.map((item, key) => (
                    <Item
                      key={key}
                      index={key}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                    />
                  ))}
                {editable && <EditItem addItem={addItem} />}
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-start">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-start"
                  placeholder="Tax"
                />
              </div>
              <div className="col-md-3 mx-3">
                <input
                  type="text"
                  className="form-control text-start"
                  placeholder="Discount"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <span className="mx-3">Sub Total</span>
              <span className="mx-3">&#8377;-430.00</span>
            </div>
          </div>
        </Modal.Body>

        <div className="p-3 modal-footer-color">
          <div className="row">
            <div className="col-md-6 d-flex flex-row justify-content-start">
              <div className="mx-5">
                <label htmlFor="tax" className="form-label">
                  Tax
                </label>
                <div id="tax">0.00</div>
              </div>
              <div>
                <label htmlFor="tax1" className="form-label">
                  Discount
                </label>
                <div id="tax1">0.00</div>
              </div>
            </div>
            <div className="col-md-6 d-flex flex-row justify-content-center">
              <div className="mx-5">
                <label htmlFor="tax3" className="form-label">
                  Grand Total
                </label>
                <div id="tax3">0.00</div>
              </div>
              <button
                type="button"
                className="btn btn-primary px-5"
                onClick={saveInvoices}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
