import React, {useState, useEffect, useContext, createContext} from 'react';
import * as api from '../api';

const defaultContext = {
  invoices: [],
  invoice: {},
  customer: {}
}

const InvoicesContext = createContext(defaultContext);

export const InvoicesProvider = ({children}) => {
  
  const [invoicesState, setInvoicesState] = useState(useContext(InvoicesContext));

  const selectInvoice = (invoice) => {
    setInvoicesState(invoicesState => ({...invoicesState, invoice}));
  }

  const addInvoice = (invoice) => {
    setInvoicesState(invoicesState => {
      invoicesState.invoices.push(invoice);
      return {...invoicesState, invoice};
    });
  }

  const addCustomer = (customer) => {
    setInvoicesState({...invoicesState, customer});
  }

  const getCustomer = () => {
    return invoicesState.customer;
  }

  const initial = () => {
    const data = api.getInvoices();
    setInvoicesState({invoices: data, invoice: data[0]});
  }

  useEffect(() => {
    initial();
  },[])

  return (<InvoicesContext.Provider value={{
    invoices: invoicesState.invoices,
    invoice: invoicesState.invoice,
    selectInvoice,
    addInvoice,
    addCustomer,
    getCustomer
  }}>{children}</InvoicesContext.Provider>)
}

export const useInvoices = () => {
  const context = useContext(InvoicesContext);
  if (!context)
    throw new Error("useInvoice must be used within an InvoicesProvider");
  return context
}
