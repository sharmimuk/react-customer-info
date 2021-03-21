import Header from "./components/Header";
import Customers from "./components/Customers";
import AddCustomer from "./components/AddCustomer";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  //get customers from db json
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getAllCustomers = async () => {
      const customers = await getCustomersFromDb();
      setCustomers(customers);
    };
    getAllCustomers();
  });

  const getCustomersFromDb = async () => {
    const res = await fetch("http://localhost:5000/customers");
    const data = await res.json();
    return data;
  };

  const [showAddCustomer, setShowAddCustomers] = useState(false);
  const addCustomer = async (customer) => {
    const res = await fetch("http://localhost:5000/customers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    const data = await res.json();
    setCustomers([...customers, data]);
  };

  return (
    <div className="container">
      <Header
        title="Customer Information"
        onAdd={() => setShowAddCustomers(!showAddCustomer)}
        showAdd={showAddCustomer}
      />

      {showAddCustomer && <AddCustomer onAdd={addCustomer} />}
      {customers.length > 0 ? (
        <Customers customers={customers} />
      ) : (
        "No Customers to show !!"
      )}
    </div>
  );
}

export default App;
