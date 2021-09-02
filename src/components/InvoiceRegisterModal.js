import React, { useEffect, useState } from "react";
import closeIcon from "../assets/close-btn.png";
import skipIcon from "../assets/skip-icon.png";
import { Modal } from "react-bootstrap";
import InputControl from "./InputControl";
import { useInvoices } from "../context/InvoicesProvider";
import { useForm } from "react-hook-form";

export default function InvoiceRegisterModal(props) {
  const { open, setShowModal, setShowEditModal } = props;
  const { addCustomer } = useInvoices();

  const [customer, setCustomer] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleChange = async (name, value) => {
    Object.assign(customer, { [name]: value });
    setCustomer(customer);
  };

  const handleClose = () => {
    setShowModal(false);
    clearModal();
  };

  const proceed = async (e) => {
    addCustomer(customer);
    handleClose();
    setShowEditModal(true);
    //clear modal
    clearModal();
  };

  const clearModal = () => {
    setCustomer({});
  };

  useEffect(() => {
    return () => {
      clearModal();
    };
  }, []);

  return (
    <>
      <Modal
        show={open}
        onHide={handleClose}
        dialogClassName="bg-white modal-size"
      >
        <form onSubmit={handleSubmit(proceed)}>
          <Modal.Body>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center justify-content-start">
                <h5 id="exampleModalLabel" className="">
                  Create New Invoice
                </h5>
                <h6 className="mx-5">ORDER NO: 1234</h6>
              </div>
              <div
                className="cursor-pointer"
                onClick={(event) => {
                  setShowModal(false);
                }}
              >
                <img src={closeIcon} alt="close" />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center modal-header-border">
              <span>CUSTOM DETAILS</span>
              <button className="btn float-end">
                SKIP <img src={skipIcon} alt="" />
              </button>
            </div>
            <div className="row my-3">
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Full name
                </label>
                <input
                  {...register("name", {
                    required: true,
                    min: 3,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  className="form-control"
                  placeholder="Customer Name"
                  name="name"
                  onChange={handleChange}
                />
                {errors?.name?.type === "required" && (
                  <small className="text-danger">Name is required</small>
                )}
                {errors?.name?.type === "maxLength" && (
                  <small className="text-danger">Name is required</small>
                )}
                {errors?.name?.type === "pattern" && (
                  <small className="text-danger">Name is required</small>
                )}
              </div>
              <div className="col-6">
                <label htmlFor="name" className="form-label">
                  Phone Number
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    +91
                  </span>
                  <input
                    {...register("phone", {
                      minLength: 7,
                      pattern: /^[1-9]{1}[0-9]{2}\s[0-9]{3}\s[0-9]{4}$/i,
                    })}
                    className="form-control"
                    placeholder=""
                    name="phone"
                    setValue={handleChange}
                  />
                  {errors?.phone?.type === "minLength" && (
                    <small className="text-danger">
                      "phone number should be at least 7 characters"
                    </small>
                  )}
                  {errors?.phone?.type === "pattern" && (
                    <small className="text-danger">
                      "phone number should be the type of xxx xxx xxxx"
                    </small>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <InputControl
                  className="form-control"
                  id="address"
                  type="textarea"
                  rows="5"
                  placeholder="Customer Address"
                  name="address"
                  setValue={handleChange}
                />
                {errors.address && (
                  <small className="text-danger">{errors.address}</small>
                )}
              </div>
              <div className="col-6">
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <InputControl
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Customer Email Address"
                    name="email"
                    setValue={handleChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="my-3">
                  <label htmlFor="pincode" className="form-label">
                    Pincode
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pincode"
                    placeholder="560067"
                    disabled
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-primary px-5 py-1">
              PROCEED
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
