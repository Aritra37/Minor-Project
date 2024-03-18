import "./Header.css";

const Header = () => {
  return (
    <header className="applyForAssistanceText">
      <div className="applyForAssistanceTextChild" />
      <img
        className="imageIcon"
        loading="lazy"
        alt=""
        src="/image.svg"
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