import Customer from "./Customer";

const Customers = ({ customers, onDelete, onEdit }) => {
  return (
    <>
      {customers.map((customer) => (
        <Customer
          key={customer.id}
          customer={customer}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  );
};

export default Customers;
