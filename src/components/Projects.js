import '../css/project.css';
import CityBike from './projectComponents/CityBike.js';
import DataVisualizer from './projectComponents/DataVisualizer.js';
import BitCoinData from './projectComponents/BitCoinData.js';
import EasyBuy from './projectComponents/EasyBuy.js';
import {useState} from 'react';


const Projects = () => {
  const [projectToDisplay, setProjectToDisplay] = useState();

  const showCityBike = () => {
    setProjectToDisplay(<CityBike/>)
  }
  const showDataVisualizer = () => {
    setProjectToDisplay(<DataVisualizer/>)
  }
  const showEasyBuy = () => {
    setProjectToDisplay(<EasyBuy/>)
  }
  const showBitCoinData = () => {
    setProjectToDisplay(<BitCoinData/>)
  }
  
  return (
    <>
      <div className='projects'>
        <div className='project' onClick={showCityBike}>
            <h4 className='projectTitle'>CityBike</h4>
        </div>
        <div className='project' onClick={showDataVisualizer}>
            <h4 className='projectTitle'>Data Visualizer</h4>
        </div>
        <div className='project' onClick={showEasyBuy}>
            <h4 className='projectTitle'>EasyBuy</h4>
        </div>
        <div className='project' onClick={showBitCoinData}>
            <h4 className='projectTitle'>BitCoin data</h4>
        </div>
      </div>
      <div className="projectShowCase">
        {projectToDisplay ? projectToDisplay : <p id='projectPlaceholder'> &#128072; choose a project </p> }        
      </div>
    </>
  )
}
export default Projects