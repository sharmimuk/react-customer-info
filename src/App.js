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
    const res = await fetch("http://localhost:5005/customers");
    const data = await res.json();
    return data;
  };

  // Add a new customer
  const [showAddCustomer, setShowAddCustomers] = useState(false);
  const addCustomer = async (customer) => {
    const res = await fetch("http://localhost:5005/customers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    const data = await res.json();
    setCustomers([...customers, data]);
  };

  // Update a selected customer
  const updateCustomer = async (id, customer) => {
    await fetch(`http://localhost:5005/customers/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  // Delete a selected customer
  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:5005/customers/${id}`, {
      method: "DELETE",
    });
    setCustomers(customers.filter((customer) => customer.id !== id));
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
        <Customers
          customers={customers}
          onDelete={deleteCustomer}
          onEdit={updateCustomer}
        />
      ) : (
        "No Customers to show !!"
      )}
    </div>
  );
}

export default App;
