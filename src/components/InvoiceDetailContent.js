<<<<<<< HEAD
import React from "react";
import { useInvoices } from "../context/InvoicesProvider";
import "../styles/invoice.css";

export default function InvoiceDetailContent() {
  const { invoice } = useInvoices();
  return (
    <div className="invoice-details-table mt-4">
      <table id="productSizes" className="table text-black-middle">
        <thead>
          <tr className="d-flex">
            <th className="text-left col-6">ITEM</th>
            <th className="text-center col-3">QUANTITY</th>
            <th className="text-center col-3">PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d-flex">
            <td className="col-6">6</td>
            <td className="text-center col-3">79 - 81</td>
            <td className="text-right col-3">61 - 63</td>
          </tr>
          <tr className="d-flex">
            <td className="col-6">8</td>
            <td className="text-center col-3">84 - 86</td>
            <td className="text-right col-3">66 - 68</td>
          </tr>
          <tr className="d-flex">
            <td className="col-8"></td>
            <td className="text-right col-3">
              <div className="d-flex justify-content-between">
                <div>sub total</div>
                <div>&#8377; 3,470.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>sub total</div>
                <div>&#8377; 3,470.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Tax(12.36%)</div>
                <div>&#8377; 429.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>discount(10%)</div>
                <div>&#8377; 390.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-black">GRAND TOTAL</div>
                <div>&#8377; 3,509.00</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
=======
import React from "react";
import { useInvoices } from "../context/InvoicesProvider";
import "../styles/invoice.css";

export default function InvoiceDetailContent() {
  const { invoice } = useInvoices();
  return (
    <div className="invoice-details-table mt-4">
      <table id="productSizes" className="table text-black-middle">
        <thead>
          <tr className="d-flex">
            <th className="text-left col-6">ITEM</th>
            <th className="text-center col-3">QUANTITY</th>
            <th className="text-center col-3">PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="d-flex">
            <td className="col-6">6</td>
            <td className="text-center col-3">79 - 81</td>
            <td className="text-right col-3">61 - 63</td>
          </tr>
          <tr className="d-flex">
            <td className="col-6">8</td>
            <td className="text-center col-3">84 - 86</td>
            <td className="text-right col-3">66 - 68</td>
          </tr>
          <tr className="d-flex">
            <td className="col-8"></td>
            <td className="text-right col-3">
              <div className="d-flex justify-content-between">
                <div>sub total</div>
                <div>&#8377; 3,470.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>sub total</div>
                <div>&#8377; 3,470.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Tax(12.36%)</div>
                <div>&#8377; 429.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>discount(10%)</div>
                <div>&#8377; 390.00</div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="text-black">GRAND TOTAL</div>
                <div>&#8377; 3,509.00</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
>>>>>>> b125e2ff8034ac3f938d8c19f5088629ad357fc0
