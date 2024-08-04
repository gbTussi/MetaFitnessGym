import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/01.jpg'
import img3 from '../img/03.jpg'
import img4 from '../img/04.jpg'
import '../css/Carousel.css';

function Carrousel(){
    return (
        <div className='carousel-container'>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img4} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
      );
}

export default Carrousel;