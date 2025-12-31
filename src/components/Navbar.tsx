import logo from "../assets/Group 16.png";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="AI Lab Logo" />
      </div>

      <ul className="Links">
        <li><a href="#Package">Packages</a></li>
        <li><a href="#hotels">Hotels</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
