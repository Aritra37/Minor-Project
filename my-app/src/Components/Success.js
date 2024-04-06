import "./Success.css";


const Success = ({
    id,
    heading,
    text,
    image,
  }) => {
  return (
    <div className="successtextFrame">

      <div className="helpingHandFrame">
        {id%2===0? <img
            className="helpingHandFrameChild evenImage"
            loading="lazy"
            alt=""
            src={image}
          />:<></>}
        <div className="successtextFrame1">
          <div className="groupFrame">
            <b className={id%2===0? `loremForestfireEven`:`loremForestfire`}>{heading}</b>
            <div className="currentDisaster">
              <div className= {id%2===0? `loremIpsumDolorEven`:`loremIpsumDolorOdd`}>
                {text}
              </div>
            </div>
          </div>
        </div>
        {id%2!==0? <img
            className="helpingHandFrameChild"
            loading="lazy"
            alt=""
            src={image}
          />:<></>}
        
      </div>
    </div>
  );
};

export default Success;