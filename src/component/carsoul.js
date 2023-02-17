import Carousel from 'react-bootstrap/Carousel';
import bg from '../images/bg.jpg'
import bg1 from '../images/bg1.jpg'
import bg2 from '../images/bg2.jpg'
import './carsoularStyle.css'
function CarouselFadeExample() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={bg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='Textcolor' >Educate</h3>
          <p>Smart is great</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 imgStyle "
          src={bg1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='Textcolor' >Educate</h3>
          <p>Smart is great</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={bg2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='Textcolor' >Educate</h3>
          <p>Smart is great</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;