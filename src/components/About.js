import '../css/about.css';
import me from '../assets/me_portfolio.jpg';

const About = () => {
  return (
    <>
      <div id='aboutAnchor' className='container-about'>
        <img id='mypicture'src={me}/>
        <div className="about-text-container">
          <h2 className='about-header'>About Me</h2>
          <p className='about-text'>Hello! I am a Front End Developer with a keen interest in technology, data and business. I love to create intuitive and dynamic user experiences on the web. When I'm not coding, you can find me camping under the stars, at the gym or shredding my &#127928;</p>
        </div>
      </div>
    </>
  )
}

export default About