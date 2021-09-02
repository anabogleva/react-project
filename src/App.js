<<<<<<< HEAD
import InvoiceSidebar from "./components/InvoiceSidebar";
import InvoiceDetail from "./components/InvoiceDetail";
import InvoiceRegisterModal from "./components/InvoiceRegisterModal";
import InvoiceEditModal from "./components/InvoiceEditModal";
import "./App.scss";
import addIcon from "./assets/plus-white.png";
import { useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="app container">
      <div className="dashboard-header position-relative bg-header text-white p-3">
        <p className="p-3 m-0">Dashboard</p>
        <div className="dashboard-header-add" onClick={openModal}>
          <img
            className="dashboard-header-add-img"
            src={addIcon}
            alt="Add Invoice"
          />
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col-3 text-white no-padding">
          <InvoiceSidebar />
        </div>
        <div className="col-9 bg-gray">
          <p className="p-3">INVOICE DETAILS</p>
          <InvoiceDetail />
        </div>
      </div>
      <InvoiceEditModal open={showEditModal} setShowModal={setShowEditModal} />
      <InvoiceRegisterModal
        open={showModal}
        setShowModal={setShowModal}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}

export default App;
=======
import InvoiceSidebar from "./components/InvoiceSidebar";
import InvoiceDetail from "./components/InvoiceDetail";
import InvoiceRegisterModal from "./components/InvoiceRegisterModal";
import InvoiceEditModal from "./components/InvoiceEditModal";
import "./App.scss";
import addIcon from "./assets/plus-white.png";
import { useState } from "react";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="app container">
      <div className="dashboard-header position-relative bg-header text-white p-3">
        <p className="p-3 m-0">Dashboard</p>
        <div className="dashboard-header-add" onClick={openModal}>
          <img
            className="dashboard-header-add-img"
            src={addIcon}
            alt="Add Invoice"
          />
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="col-3 text-white no-padding">
          <InvoiceSidebar />
        </div>
        <div className="col-9 bg-gray">
          <p className="p-3">INVOICE DETAILS</p>
          <InvoiceDetail />
        </div>
      </div>
      <InvoiceEditModal open={showEditModal} setShowModal={setShowEditModal} />
      <InvoiceRegisterModal
        open={showModal}
        setShowModal={setShowModal}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}

export default App;
>>>>>>> b125e2ff8034ac3f938d8c19f5088629ad357fc0
