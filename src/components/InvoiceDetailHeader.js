import React from "react";
import printer from "../assets/printer-blue.png";
import { useInvoices } from "../context/InvoicesProvider";

export default function InvoiceDetailHeader() {

  const { invoice } = useInvoices();
  
  return (
    <div className="invoice-details-header row">
      <div className="col-lg-10">
        <div className="d-flex justify-content-between text-black-right">
          <div className="d-flex flex-column">
            <span className="fs-5 text-black">INVOICE</span>
            <span className="text-black-middle">#INV {invoice?.id ? invoice.id : ' '} </span>
            <span>{invoice?.created_at ? invoice?.created_at : " "}</span>
          </div>
          <div className="d-flex flex-column text-end">
            <span>CUSTOMER DETAILS</span>
            <span className="fs-6 text-black">{invoice?.user ? invoice.user : " "}</span>
            <span className="fs-6">johndea@service.provider.com</span>
          </div>
        </div>
      </div>
      <div className="col-lg-2 d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-primary px-3">
          PRINT
          <img src={printer} alt="" />
        </button>
      </div>
    </div>
  );
}
