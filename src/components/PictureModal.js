import React from 'react'
import { Carousel, Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const PictureModal = (props) => {

  const {modalProject} = props

  const extraPictures = modalProject.map((carousel, index) => 
    <Carousel.Item key={index} interval={120000} >
      <img className="carouselImage" src={carousel} alt={carousel.title}/>
    </Carousel.Item>
  )

  return <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>

      <Modal.Body>
        <div className="modalContainer">
          <Carousel
          nextIcon={<div className="carouselButton">&nbsp;&nbsp;<i className="fa fa-chevron-right fa-3x" aria-hidden="true"/></div>}
          prevIcon={<div className="carouselButton"><i className="fa fa-chevron-left fa-3x" aria-hidden="true"/>&nbsp;&nbsp;</div>}
          className="carouselWhole" slide={false}>
            {extraPictures}
          </Carousel> 
        </div>
      </Modal.Body>

    </Modal>
  </>
}

export default PictureModal;