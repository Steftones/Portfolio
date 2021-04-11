import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const PictureModal = ({ modalProject }) => {

  const pictures = modalProject.slice(1)

  console.log(pictures)

  const extraPictures = pictures.map((carousel, index) => 
    <Carousel.Item key={index} interval={120000} >
      <img className="modalCarouselImage" src={carousel} alt={carousel.title}/>
    </Carousel.Item>
  )

  return <>
    <div className="modalContainer">
      <Carousel
      nextIcon={<div className="carouselButton">&nbsp;&nbsp;<i className="fa fa-chevron-right fa-3x" aria-hidden="true"/></div>}
      prevIcon={<div className="carouselButton"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>&nbsp;&nbsp;</div>}
      className="carouselWholezz"  slide={false}> 
        {extraPictures}
      </Carousel> 
    </div>
  </>
}

export default PictureModal;