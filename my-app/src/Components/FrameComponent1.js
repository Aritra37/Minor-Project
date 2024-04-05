import styles from "./FrameComponent1.css";

const FrameComponent1 = ({
  loremIpsumDolorSitAmetCon,
  loremIpsumDolorSitAmetCon1,
}) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-5.svg"
        />
        <div className={styles.loremIpsumDolorSitAmetConWrapper}>
          <div className={styles.loremIpsumDolor}>
            {loremIpsumDolorSitAmetCon}
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <img className={styles.frameItem} alt="" src="/group-5.svg" />
        <div className={styles.dataAggregator}>
          <div className={styles.loremIpsumDolor1}>
            {loremIpsumDolorSitAmetCon1}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
