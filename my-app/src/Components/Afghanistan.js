import FrameComponent1 from "./FrameComponent1.js";
import MapText from "./MapText.js";
import Rec3 from "./Images/afghanistan.jpg";
import Map from './Images/Map.png';
import './Nepal.css';
import Helping from "./HelpingHand.js";
import Header from "./Header";
import Footer from "./Footer";
const Afghanistan = () => {
  return (
    <>
         <Header />
    <div className="booleanValue">
      <div className="nullValue">
        <div className="frameParent">
          <div className="frameWrapper">
            <div className="nepalEarthquakeParentImage">
                <img className="image1Icon" alt="" src={Rec3} /> 
              <h1 className="nepalEarthquakeImage ">Afghanistan Floods</h1>
              <div className="wrapper">
                <div className="div ">02.03.2019</div>
              </div>
            </div>
          </div>
          <div className="loremIpsumDolor ">
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
                <img
                  className="signalProcessorIcon"
                  loading="lazy"
                  alt=""
                  src={Map}
                />
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

export default Afghanistan;
