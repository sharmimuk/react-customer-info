const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button className="btn" style={{ backgroundColor: "green" }}>
        Add
      </button>
    </div>
  );
};

export default Header;
