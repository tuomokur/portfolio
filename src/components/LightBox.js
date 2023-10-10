import '../css/lightbox.css';
import {useState} from 'react';

const LightBox = ({props}) => {
    const [imageToShow, setImageToShow] = useState("");
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    
    const imageCards = props.map((image) => (
      <img className="thumbImg" onClick={() => showImage(image)} src={image} alt="project thumbnail image" />
    ));
  
    const showImage = (image) => {
      setImageToShow(image);
      setLightBoxDisplay(true);
    };
  
    const hideLightBox = () => {
      setLightBoxDisplay(false);
    };
  
    const showNext = (e) => {
      e.stopPropagation();
      let currentIndex = props.indexOf(imageToShow);
      if (currentIndex >= props.length - 1) {
        let nextImage = props[0];
        setImageToShow(nextImage);
      } else {
        let nextImage = props[currentIndex + 1];
        setImageToShow(nextImage);
      }
    };
  
    const showPrev = (e) => {
      e.stopPropagation();
      let currentIndex = props.indexOf(imageToShow);
      if (currentIndex <= 0) {
        let nextImage = props.at(-1);
        setImageToShow(nextImage);
      } else {
        let nextImage = props[currentIndex - 1];
        setImageToShow(nextImage);
      }
    };
  return (
    <>
        <div className="projectThumbNails">{imageCards}</div>
        { 
          lightboxDisplay ? 
          <div id="lightbox" onClick={hideLightBox}>
            <button id='lightBoxButton' onClick={showPrev}>&lt;</button>
            <img id="lightbox-img" src={imageToShow} ></img>
            <button id='lightBoxButton' onClick={showNext}>&gt;</button>
          </div>
          : ""
        }
    </>
  )
}

export default LightBox