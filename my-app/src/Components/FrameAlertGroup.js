import "./FrameAlertGroup.css";
import thunder from "./Images/Ellipse 1.png";
const FrameAlertGroup = ({
  flashFloodAlertInEffectUn
}) => {
  return (
    <div className="frameAlertGroup">
      <div className="textFrameGroup">
        <img
          className="textFrameGroupChild"
          loading="lazy"
          alt=""
          src={thunder}
        />
        <div className="textFrame">
          <div className="flashFloodAlert">
            {flashFloodAlertInEffectUn}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FrameAlertGroup;