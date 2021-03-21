import Header from "./components/Header";
import Customers from "./components/Customers";

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

  return (
    <div className="container">
      <Header title="Customer Information" />
      {customers.length > 0 ? (
        <Customers customers={customers} />
      ) : (
        "No Customers to show !!"
      )}
    </div>
  );
}

export default App;
