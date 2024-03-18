
import React, { useState, useEffect } from "react";

function Live() {
  const url = "https://api.worldnewsapi.com/search-news?api-key=ddb46275c8304a1081a112a7d993a7e6&text=tesla";
  const [dataSet, setData] = useState([]);

  const fetchInfo = async () => {
    const res = await fetch(url);
      const d = await res.json();
      return setData(d);
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      {dataSet.length != null && (
      <center>
        {dataSet.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.title}</p>
            </div>
          );
        })}
      </center>
      )}
    </div>
  );
}

export default Live;