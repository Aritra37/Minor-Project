
import React, { useEffect, useState } from "react";
import "./Live.css";
import FrameAlertGroup from "./FrameAlertGroup";

function Live() {
  const [dataSet, setdataSet] = useState([])
  useEffect(()=>{
  const dataFet = async()=>{
    const res = await fetch('https://newsapi.org/v2/top-headlines?q=earthquake&apiKey=f6608c409568422a994de82a29a5c257')
    const result  = await res.json();
    console.log(result.articles)
    setdataSet(result.articles);
    console.log(dataSet);
  }
  dataFet();
  },[])

  return (
    <div className="textU" >
          <div className="textUChild" />
          <div className="earlyWarningSystem">Live News</div>
          <div className="alertFrameGroup">
           
            {dataSet.map((data,key)=>{
              return(
                <FrameAlertGroup
              flashFloodAlertInEffectUn={data.title}
            />
              );
            })}
            
          </div>
        </div>
  );
}

export default Live;