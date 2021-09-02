<<<<<<< HEAD
import React from 'react';
import { useInvoices } from '../context/InvoicesProvider';

export default function Invoice(props) {
  const {invoice} = props;
  const { selectInvoice } = useInvoices();

  const select = event => {
    event.preventDefault();
    selectInvoice(invoice);
  }

  return (
    <li className="list-item" key={invoice.id} onClick={select}>
      <div className="invoice-list-item px-3">
        <div className="d-flex justify-content-between">
          <label className="text-white-middle">INV.# - {invoice.id}</label>
          <label className="text-white-dark">{invoice.create_at}</label>
        </div>
        <div>
          <label className="text-white-middle">items-{invoice.items}</label>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label className="text-blue-dark">{invoice.user}</label>
          <label className="text-white-light text-bold">&#8377; {invoice.total}</label>
        </div>
      </div>
    </li>
  );

=======
import React from 'react';
import { useInvoices } from '../context/InvoicesProvider';

export default function Invoice(props) {
  const {invoice} = props;
  const { selectInvoice } = useInvoices();

  const select = event => {
    event.preventDefault();
    selectInvoice(invoice);
  }

  return (
    <li className="list-item" key={invoice.id} onClick={select}>
      <div className="invoice-list-item px-3">
        <div className="d-flex justify-content-between">
          <label className="text-white-middle">INV.# - {invoice.id}</label>
          <label className="text-white-dark">{invoice.create_at}</label>
        </div>
        <div>
          <label className="text-white-middle">items-{invoice.items}</label>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <label className="text-blue-dark">{invoice.user}</label>
          <label className="text-white-light text-bold">&#8377; {invoice.total}</label>
        </div>
      </div>
    </li>
  );

>>>>>>> b125e2ff8034ac3f938d8c19f5088629ad357fc0
}