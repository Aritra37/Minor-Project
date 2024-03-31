import "./Footer.css";
import base from "./Images/Base.png";

const Footer = () => {
  return (
    <footer className="FooterChild">
      <div className="Footer" />
      <img
        className="envelope"
        loading="lazy"
        alt=""
        src={base}
      />
      <div className="works">
        <div
          className="work"
        >More Details</div>
        <div className="work"> Our Work </div>
          <div className="work">Contact Us</div>
        </div>
    </footer>
  );
};

export default Footer;