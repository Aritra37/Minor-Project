import Vector from './Images/Vector 1.png';
import './MapText.css';

const MapText = () => {
  return (
    <div className="sorter">
      <div className="summator">
        <div className="mergerJoiner">
          <div className="indexFinder">
            <div className="patternMatcher">
              <div className="transformationChain">
                <img
                  className="functionComposerIcon"
                  alt=""
                  src={Vector}
                />
                <div className="parameterTuner">
                  <div className="falamkhaniProvince">
                    Falamkhani Province
                  </div>
                </div>
              </div>
            </div>
            <div className="estimatedAffected">
              Estimated Affected : 700,000
            </div>
          </div>
          <div className="dataSerializer">
            <div className="dataDeserializer">
              <div className="severityHigh">Severity : HIGH</div>
            </div>
            <div className="estimatedRescued">
              Estimated Rescued : 139,240
            </div>
          </div>
        </div>
        <div className="dataPostprocessor">
          <div className="dataFilter">
            <div className="dataMapper">
              <div className="activeOrganizationsIn">
                Active Organizations in the region
              </div>
            </div>
            <div className="volunteer single-line"><span>Volunteer+</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapText;
