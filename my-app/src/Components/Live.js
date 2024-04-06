
import React, { useRef, useEffect, useState } from "react";
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
                <marquee behaviour="scroll" direction="down" scrollamount="1" className="scrolling">
                  {data.title}
                </marquee>
              );
            })}
            
          </div>
        </div>
  );
}

export default Live;