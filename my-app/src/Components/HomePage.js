// import { useHistory } from 'react-router-dom';
import "./HomePage.css";
import kid from "./kid.jpg";
import search from "./search.jpg";
import "./FrameA.css";
import Frame from "./Frame";
import Live from "./Live";
import Success from "./Success";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import "./helpingHand.css";


const HomePage = () => {
  const handleClick = (route) => {
    window.location.href = route; 
}

  return (
    <>
    <div className="millionDonationCollectedFra">
      <div className="activeVolunteersFrame">
        <img className="image1IconDisaster" alt="" src={kid} />
        <div className="millionRectangleFrame">
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
        <img className="siteMapFrameHelpSearch" alt="" src={search} />
      </div>
      
    </div>
      <div className="currentDisasters">Current Disasters</div>
      <div className="currDisaster">
      {Frame.map((item,index) => {
         return (<>
        {/* <div className="currG" onClick={openPage(item)}> */}
        <div className="currG" onClick={() => handleClick(item.route)}>
                <div className="currH">
                  <img
                    className="currHChild"
                    alt=""
                    src={item.img}
                  />
                  <div className="currRectangleParent">
                    <div className="currChild" />
                    <div className="currinfo">
                      <div className="currInfo2">
                        {item.info}
                      </div>
                      <div className="currRectangleL" />
                    </div>
                  </div>
                </div>
              </div>
        </>
         )
})}

</div>
<div className="liveNews">
  <Live />
</div>
<Success 
id="1"
heading="Lorem Forestfire"
text="Lorem ipsum dolor sit amet consectetur. Phasellus justo cras eu
                congue adipiscing. Leo ultricies nibh ut massa. Nisl sit donec
                diam nam euismod senectus iaculis phasellus dui. Eu lacus
                integer pulvinar."
                image={image1}
                />
<Success 
id="2"
heading="Lorem Storm"
text="Lorem ipsum dolor sit amet consectetur. Phasellus justo cras eu congue adipiscing. 
Leo ultricies nibh ut massa. Nisl sit donec diam nam euismod senectus iaculis phasellus dui. 
Eu lacus integer pulvinar."
                image={image3}
                />
<Success 
id="3"
heading="Lorem Ipsum"
text="Lorem ipsum dolor sit amet consectetur. Phasellus justo cras eu congue adipiscing. 
Leo ultricies nibh ut massa. Nisl sit donec diam nam euismod senectus iaculis phasellus dui.
 Eu lacus integer pulvinar."
                image={image2}
                />

    <section className="siteMapHelp">
      <div className="footerImageHelp">
        <div className="footerImageChildHelp"/>
        <div className="helpingHand ">Helping Hand</div>
        <div className="loremIpsumTextHelp">
          <button className="rectangleParentHelp">
            <div className="frameChildHelp" />
            <div className="donateNowHelp helpButton">Donate Now</div>
          </button>
          <button className="rectangleGroupHelp">
            <div className="frameItemHelp" />
            <div className="partnerNowHelp helpButton">Partner Now</div>
          </button>
          <button className="rectangleContainerHelp">
            <div className="frameInnerHelp" />
            <div className="volunteerNowHelp helpButton">Volunteer Now</div>
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;

