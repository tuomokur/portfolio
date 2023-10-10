import '../css/experience.css'
import html5Logo from "../assets/techLogos/html5.svg"
import cssLogo from "../assets/techLogos/css.svg"
import es6Logo from "../assets/techLogos/js.svg"
import reactLogo from "../assets/techLogos/react.svg"
import nodeLogo from "../assets/techLogos/node.svg"
import expressLogo from "../assets/techLogos/express.svg"
import mongoDbLogo from "../assets/techLogos/mongoDB.svg"
import sqlLogo from "../assets/techLogos/sql.svg"
import vsCodeLogo from "../assets/techLogos/vsCode.svg"
import bashLogo from "../assets/techLogos/bash.svg"
import powerBiLogo from "../assets/techLogos/powerBI.svg"
import GALogo from "../assets/techLogos/googleAnalytics.svg"
import hubspotLogo from "../assets/techLogos/hubspot.svg"

const Experience = () => {

  return (
    <>
      <div id='experienceAnchor' className="experienceContainer">
        <h3 className='experienceTitle'>Technologies I've worked with</h3>
        <div className="techLogos">
          <div className="tech">
              <img src={html5Logo} alt="html logo" className="techLogo" />
              <p className="techTitle">Html</p>
          </div>
          <div className="tech">
              <img src={cssLogo} alt="css logo" className="techLogo" />
              <p className="techTitle">CSS</p>
          </div>
          <div className="tech">
              <img src={es6Logo} alt="javascript logo" className="techLogo" />
              <p className="techTitle">JavaScript</p>
          </div>
          <div className="tech">
              <img src={reactLogo} alt="react js logo" className="techLogo" />
              <p className="techTitle">ReactJs</p>
          </div>
          <div className="tech">
              <img src={nodeLogo} alt="node js logo" className="techLogo" />
              <p className="techTitle">NodeJs</p>
          </div>
          <div className="tech">
              <img src={expressLogo} alt="express js logo" className="techLogo" />
              <p className="techTitle">ExpressJs</p>
          </div>
          <div className="tech">
              <img src={mongoDbLogo} alt="mongodb logo" className="techLogo" />
              <p className="techTitle">MongoDb</p>
          </div>
          <div className="tech">
              <img src={sqlLogo} alt="sql logo" className="techLogo" />
              <p className="techTitle">SQL</p>
          </div>
      </div>
      <h3 className='experienceTitle'>Tools I've used</h3>
      <div className="techLogos">
          <div className="tech">
              <img src={vsCodeLogo} alt="vsCode logo" className="techLogo" />
              <p className="techTitle">VsCode</p>
          </div>
          <div className="tech">
              <img src={bashLogo} alt="bash logo" className="techLogo" />
              <p className="techTitle">Bash</p>
          </div>
          <div className="tech">
              <img src={powerBiLogo} alt="power bi logo" className="techLogo" />
              <p className="techTitle">PowerBi</p>
          </div>
          <div className="tech">
              <img src={GALogo} alt="Google Analytics logo" className="techLogo" />
              <p className="techTitle">Google Analytics</p>
          </div>
          <div className="tech">
              <img src={hubspotLogo} alt="hubspot logo" className="techLogo" />
              <p className="techTitle">HubSpot</p>
          </div>
      </div>
  </div>
    </>
  )
}

export default Experience