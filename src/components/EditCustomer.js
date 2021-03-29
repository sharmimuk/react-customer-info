import { useState } from "react";

const EditCustomer = (props) => {
  const [CustomerName, setCustomerName] = useState(props.customer.CustomerName);
  const [Location, setLocation] = useState(props.customer.Location);

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

    // onAdd({ CustomerName, Location });
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
          placeholder="Location"
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <input type="submit" value="Update Customer" className="btn btn-block" />
    </form>
  );
};

export default EditCustomer;
