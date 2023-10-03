import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/completed" className="btn" style={{ background: "blue" }}>
        Completed Page
      </Link>
      <p>Copyright &copy; 2021</p>
      <Link to="/about">About</Link>
    </footer>
  );
};

export default Footer;
