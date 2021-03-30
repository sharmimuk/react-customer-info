import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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

    const customerData = {
      CustomerName: CustomerName,
      Location: Location,
    };

    props.onEdit(props.customer.id, customerData);
    setCustomerName("");
    setLocation("");
    props.onClose();
  };

  return (
    <div className="popup-box">
      <div className="box">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-control">
            <h3>
              <label>Customer Name</label>
              <FaTimes
                style={{ color: "red", cursor: "pointer", float: "right" }}
                onClick={props.onClose}
              />
            </h3>
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
          <input
            type="submit"
            value="Update Customer"
            className="btn btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;
