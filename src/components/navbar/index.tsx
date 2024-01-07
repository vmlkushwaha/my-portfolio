import "./navbar.scss";

const Navbar = () => {
  const navList = ["home", "projects", "about"];
  return (
    <div className="navbar">
      {navList.map((ele) => {
        return (
          <p className="navbar_element" key={ele}>
            {ele}
          </p>
        );
      })}
    </div>
  );
};

export default Navbar;
