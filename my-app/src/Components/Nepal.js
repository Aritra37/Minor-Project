import FrameComponent1 from "./FrameComponent1.js";
import MapText from "./MapText.js";
import NepalPage from './Images/NepalPage.png';
import './Nepal.css';
import Helping from "./HelpingHand.js";
import Header from "./Header";
import Footer from "./Footer";
const Nepal = () => {
  return (
    <>
         <Header />
    <div className="booleanValue">
      <div className="nullValue">
        <div className="frameParent">
          <div className="frameWrapper">
            <div className="nepalEarthquakeParentImage">
                <img className="image1Icon" alt="" src={NepalPage} /> 
              <h1 className="nepalEarthquakeImage">Nepal Earthquake</h1>
              <div className="wrapper">
                <div className="div">02.03.2019</div>
              </div>
            </div>
          </div>
          <div className="loremIpsumDolor">
            Lorem ipsum dolor sit amet consectetur. Consequat fringilla laoreet
            in ipsum vestibulum aliquam. Risus fames scelerisque cursus proin id
            ullamcorper. Mattis dolor semper interdum tellus eget fames. Tempus
            nibh elit amet orci faucibus. Eleifend gravida morbi cursus duis
            quam odio. Ac sit lacinia vel felis volutpat viverra. Ut.
          </div>
        </div>
        <div className="nullValueInner">
          <div className="frameGroup">
            <div className="frameContainer">
              <div className="rectangleParent">
                <div className="frameChild" />
                <div className="liveUpdatesWrapper">
                  <div className="liveUpdates">Live Updates</div>
                </div>
                <div className="frameDiv">
                  <FrameComponent1
                    loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet consectetur. Amet dis interdum non urna."
                    loremIpsumDolorSitAmetCon1="Lorem ipsum dolor sit amet consectetur. Senectus ut vitae nunc volutpat."
                  />
                  <FrameComponent1
                    loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet consectetur. Quam integer in rhoncus."
                    loremIpsumDolorSitAmetCon1="Lorem ipsum dolor sit amet consectetur. Posuere consequat leo."
                  />
                </div>
              </div>
            </div>
            <div className="errorHandler">
              {/* <img className="image2Icon" alt=""  /> */}
              <div className="filterBank">
                <div className="featureExtractor" />
                <div className="matrixMultiplier" />
                <div className="distanceCalculator" />
                <div className="featureExtractor1" />
                <div className="treeBuilder" />
                <div className="queueManager" />
                <div>
                <div className="signalProcessorIcon">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5161463.063027199!2d78.83052212314534!3d28.304607086358033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e1!3m2!1sen!2sin!4v1712514013813!5m2!1sen!2sin"
                    width="900"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
                </div>
                </div>
                <div className="MapText">
                    <MapText/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="helpingDiv">
    <Helping />
    </div>
    <Footer />
    </>
  )
};

export default Nepal;
