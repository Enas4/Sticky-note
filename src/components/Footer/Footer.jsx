import logo from "./copyright.png";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright</p>
      <img src={logo} alt="" width="20px" />
      <p>{year}</p>
    </footer>
  );
};

export default Footer;
