import '../css/nav.css';
import resume from '../assets/cv_Tuomo_Kurikka.pdf'

const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav'>
            <h1 id='pageTitle'>TuomoKurikka</h1>
            <ul className='nav-ul'>
              <a href='#aboutAnchor'><li className='nav-li'>About</li></a>
              <a href='#projectsAnchor'><li className='nav-li'>Projects</li></a>
              <a href='#experienceAnchor'><li className='nav-li'>Experience</li></a>
              <a href="https://github.com/tuomokur?tab=repositories" target='_blank' rel='noopener noreferrer'><li className='nav-li'>GitHub</li></a>
              <a href="https://www.linkedin.com/in/tuomo-kurikka/" target='_blank' rel='noopener noreferrer'><li className='nav-li'>LinkedIn</li></a>
              <a href={resume} target='_blank' rel='noopener noreferrer'><li className='nav-li'>CV</li></a>
            </ul>
        </div>
      </nav>
    </>
  )
}
export default Nav