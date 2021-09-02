import React from "react";
import InvoiceDetailHeader from "./InvoiceDetailHeader";
import InvoiceDetailContent from "./InvoiceDetailContent";

export default function InvoiceDetail() {
  return (
    <div className="invoice-details bg-white mx-4 px-5 py-4">
      <InvoiceDetailHeader/>
      <InvoiceDetailContent/>
    </div>
  );
}
