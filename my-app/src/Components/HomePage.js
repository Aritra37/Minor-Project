import "./HomePage.css";
import kid from "./kid.jpg";
import search from "./search.jpg";
import "./FrameA.css";
import Frame from "./Frame";
import Live from "./Live";

const HomePage = () => {
  return (
    <>
    <div className="millionDonationCollectedFra">
      <div className="activeVolunteersFrame">
        <img className="image1Icon" alt="" src={kid} />
        <div className="rectangleFrame">
          <div className="flashfloodAlertFrame">
            <div className="freezingText">25000+</div>
            <div className="livesSaved">Lives Saved</div>
          </div>
          <div className="flashfloodAlertFrame1">
            <h1 className="million">$1.3 Million</h1>
            <div className="donationCollected">Donation Collected</div>
          </div>
          <div className="flashfloodAlertFrame2">
            <div className="div">16000</div>
            <div className="activeVolunteers">Active Volunteers</div>
          </div>
        </div>
      </div>
      <div className="volunteerNowGroup">
        <div className="volunteerNowGroupChild" />
        <input className="search" placeholder="Search" type="text" />
        <img className="siteMapFrame" alt="" src={search} />
      </div>
      
    </div>
      <div className="currentDisasters">Current Disasters</div>
      <div className="currDisaster">
      {Frame.map((item,index) => {
         return (<>
        <div className="groupG">
                <div className="frameH">
                  <img
                    className="frameHChild"
                    alt=""
                    src={item.img}
                  />
                  <div className="rectangleParent">
                    <div className="frameChild" />
                    <div className="currinfo">
                      <div className="currInfo2">
                        {item.info}
                      </div>
                      <div className="rectangleL" />
                    </div>
                  </div>
                </div>
              </div>
        </>
         )
})}
</div>
<div className="liveNews">
  <div className="live">Live News</div>
  <Live />
</div>
    </>
  );
};

export default HomePage;

