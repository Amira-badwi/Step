import Carousel from 'react-bootstrap/Carousel';
import bg from '../../images/bg.jpg'
import bg1 from '../../images/bg1.jpg'
import bg2 from '../../images/bg2.jpg'

import './arcarsoularStyle.css'

function CarouselFadeExample() {
  return (<div className='container '  dir='rtl'>
    <Carousel fade >
      <Carousel.Item>
        
        <img
          className="d-block w-100 imgStyle"
          src={bg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='Textcolor' >تعليم</h3>
          <p>المعلم يؤثر على الخلود. لا يستطيع أن يعرف أبدًا أين يتوقف نفوذه</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 imgStyle "
          src={bg1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3 className='Textcolor' >تعليم</h3>
          <p>المعلم يؤثر على الخلود. لا يستطيع أن يعرف أبدًا أين يتوقف نفوذه</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgStyle"
          src={bg2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3 className='Textcolor' >تعليم</h3>
          <p>المعلم يؤثر على الخلود. لا يستطيع أن يعرف أبدًا أين يتوقف نفوذه</p>
        </Carousel.Caption>
        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;