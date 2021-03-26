import { FaPencilAlt, FaTrash } from "react-icons/fa";

const Customer = ({ customer, onDelete }) => {
  return (
    <div className="customer">
      <h3>
        {customer.CustomerName}
        <FaPencilAlt style={{ cursor: "pointer", float: "right" }} />
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
