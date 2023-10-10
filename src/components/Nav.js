import '../css/nav.css';
import resume from '../assets/cv_Tuomo_Kurikka.pdf'

const Nav = () => {
  return (
    <>
      <nav>
        <div className='nav'>
            <h1 id='pageTitle'>TuomoKurikka</h1>
            <ul>
              <a href='#aboutAnchor'><li>About</li></a>
              <a href='#projectsAnchor'><li>Projects</li></a>
              <a href='#experienceAnchor'><li>Experience</li></a>
              <a href="https://github.com/tuomokur?tab=repositories"><li>GitHub</li></a>
              <a href="https://www.linkedin.com/in/tuomo-kurikka/"><li>LinkedIn</li></a>
              <a href={resume} target="_blank" id='resume'><li>CV &#128188; &#10138;</li></a>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav