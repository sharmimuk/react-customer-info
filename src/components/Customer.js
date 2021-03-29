import { FaPencilAlt, FaTrash } from "react-icons/fa";
import EditCustomer from "./EditCustomer";
import { useState, useEffect } from "react";

const Customer = ({ customer, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupClose, setIsPopupClose] = useState(true);

  useEffect(() => {
    console.log("isPopupOpen ==== ", isPopupOpen);
    console.log("isPopupClose ==== ", isPopupClose);
    console.log("isEdit ==== ", isEdit);
  }, [isPopupOpen, isEdit, isPopupClose]);

  const onPencilClick = () => {
    setIsEdit(!isEdit);
    setIsPopupOpen(!isPopupOpen);
  };

  const onPopupClose = () => {
    setIsPopupClose(!isPopupClose);
    setIsEdit(!isEdit);
  };

  return (
    <div className="customer">
      <h3>
        {customer.CustomerName}
        {!isEdit && (
          <FaPencilAlt
            style={{ cursor: "pointer", float: "right" }}
            onClick={onPencilClick}
          />
        )}
        {isEdit && isPopupClose && (
          <EditCustomer
            customer={customer}
            onClose={onPopupClose}
            onEdit={onEdit}
          />
        )}
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
