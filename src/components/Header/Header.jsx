import Logo from "./bird.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="Header-header">
        <img src={Logo} alt="logo not found" width="150px" />
        <h1>Sticky Notes</h1>
      </div>
    </>
  );
};

export default Header;
