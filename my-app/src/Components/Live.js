
import React from "react";
import "./Live.css";
import FrameAlertGroup from "./FrameAlertGroup";
function Live() {
  return (
    <div className="textU" >
          <div className="textUChild" />
          <div className="earlyWarningSystem">Live News</div>
          <div className="alertFrameGroup">
            <FrameAlertGroup
              flashFloodAlertInEffectUn="Flash flood alert in effect until midnight for the Central Valley."
            />
            <FrameAlertGroup
              flashFloodAlertInEffectUn="Severe thunderstorm watch until 8 PM for the Tri-City region."
            />
            <FrameAlertGroup
              flashFloodAlertInEffectUn="Freezing rain likely overnight in New England."
            />
            <FrameAlertGroup
              flashFloodAlertInEffectUn="Blizzard conditions expected in the Sierra Nevada mountains."
            />
            <FrameAlertGroup
              flashFloodAlertInEffectUn="Coastal flood warning for low-lying areas along the Gulf
              Coast."
            />
            
          </div>
        </div>
  );
}

export default Live;