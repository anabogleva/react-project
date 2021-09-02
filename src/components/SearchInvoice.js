import SearchInput from "./SearchInput";

export default function InvoiceSearchItem() {
  return (
    <li className="list-item">
      <div>
        <SearchInput/>
        <div className="m-3">
          <label className="text-white-dark">INVOICES - 54</label>
        </div>
      </div>
    </li>
  );
}
