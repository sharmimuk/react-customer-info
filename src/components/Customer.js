import { FaPencilAlt, FaTrash } from "react-icons/fa";
import EditCustomer from "./EditCustomer";
import { useState } from "react";

const Customer = ({ customer, onDelete }) => {
  const [onEdit, setOnEdit] = useState(false);
  const onPencilClick = () => {
    setOnEdit(true);
  };

  return (
    <div className="customer">
      <h3>
        {customer.CustomerName}
        {!onEdit && (
          <FaPencilAlt
            style={{ cursor: "pointer", float: "right" }}
            onClick={onPencilClick}
          />
        )}
        {onEdit && <EditCustomer customer={customer} />}
      </h3>
      <br />
      <h3>
        {customer.Location}
        <FaTrash
          style={{ cursor: "pointer", float: "right" }}
          onClick={() => onDelete(customer.id)}
        />
      </h3>
    </div>
  );
};

export default Customer;
