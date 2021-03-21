import { useState } from "react";

const AddCustomer = ({ onAdd }) => {
  const [CustomerName, setCustomerName] = useState("");
  const [Location, setLocation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!CustomerName) {
      alert("Please add a customer Name");
      return;
    }

    if (!Location) {
      alert("Please add a customer location");
      return;
    }

    onAdd({ CustomerName, Location });
    setCustomerName("");
    setLocation("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Add Customer Name"
          value={CustomerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Location</label>
        <input
          type="text"
          placeholder="Add Location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <input type="submit" value="Save Customer" className="btn btn-block" />
    </form>
  );
};

export default AddCustomer;
