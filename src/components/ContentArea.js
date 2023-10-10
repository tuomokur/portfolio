import '../css/contentArea.css';
import About from './About.js';
import ProjectContainer from './ProjectContainer.js';
import Experience from './Experience.js';

const ContentArea = () => {
  return (
    <>
      <div className='contentArea'>
        <About/>
        <ProjectContainer />
        <Experience />
      </div>
    </>
  )
}

export default ContentArea 