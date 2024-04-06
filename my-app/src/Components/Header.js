import "./Header.css";
import logo from "./Images/logo.png";

const Header = () => {
  const handleLogo=()=>{
    window.location.href="/"
  }
  return (
    <header className="applyForAssistanceText">
      <div className="applyForAssistanceTextChild" />
      <img
        className="imageIcon"
        loading="lazy"
        alt=""
        src={logo}
        onClick={() => handleLogo()}
      />
      <div className="searchText">
        <div
          className="disasterAssistance"
        >Disaster & Assistance</div>
        <div className="maps">Maps</div>
        <div className="nepalEarthquakeFrameGroup">
          <div className="aboutUs">About Us</div>
        </div>
        <button className="australiaForestfireFrame australiaForestfireFrameChild applyForAssistance">
          {/* <div className="australiaForestfireFrameChild" /> */}
          {/* <div className="applyForAssistance">Apply For Assistance</div> */} Apply For Assistance
        </button>
      </div>
    </header>
  );
};

export default Header;