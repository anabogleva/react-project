<<<<<<< HEAD
import React from "react";
import SearchInvoice from "./SearchInvoice";
import Invoice from "./Invoice";
import { useInvoices } from '../context/InvoicesProvider';

export default function InvoiceSidebar() {

  const { invoices } = useInvoices();
  
  return (
    <div className="invoice-sidebar">
      <ul className="list-group">
        <SearchInvoice></SearchInvoice>
        {invoices.map((invoice, index) => (
          <Invoice key={index} invoice={invoice}/>
        ))}
      </ul>
    </div>
  );
}
=======
import React from "react";
import SearchInvoice from "./SearchInvoice";
import Invoice from "./Invoice";
import { useInvoices } from '../context/InvoicesProvider';

export default function InvoiceSidebar() {

  const { invoices } = useInvoices();
  
  return (
    <div className="invoice-sidebar">
      <ul className="list-group">
        <SearchInvoice></SearchInvoice>
        {invoices.map((invoice, index) => (
          <Invoice key={index} invoice={invoice}/>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> b125e2ff8034ac3f938d8c19f5088629ad357fc0
