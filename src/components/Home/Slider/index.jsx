import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';
import Slide1 from '../../../assets/slide01.png';

const HomeSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="slider">
            <Slider {...settings}>
                <div>
                    <img width="100%" src={Slide1}/>
                </div>
            </Slider>
        </section>
    )
}

export default HomeSlider;