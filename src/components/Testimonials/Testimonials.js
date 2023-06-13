import './testimonials.scss';
import Slider from "react-slick";
import { IconLogo } from '../../lib/icons';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    draggable: true,
    variableWidth: true
};

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="testimonials-wrapper">
                <h3 className="heading">Testimonials</h3>
                <div className="testimonials-content">
                    <div className="icon-wrapper"><IconLogo /></div>
                    <div className="testimonials-slider">
                        <Slider {...settings}>
                            {
                                testimonials && testimonials.length && testimonials.map((t, index) => (
                                    <div className="t-content">
                                        <div className="name-designation">
                                            <span className="name">{t.name}</span>
                                            <span className="designation">{t.designation}</span>
                                        </div>
                                        <p className="t-message">{t.message}</p>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

const testimonials = [
    {
        'name': 'Jack F',
        'designation': 'Ex Blackrock PM',
        'message': '“Love how Loch integrates portfolio analytics and whale watching into one unified app.”'
    },
    {
        'name': 'Yash P',
        'designation': 'Research, 3poch Crypto Hedge Fund',
        'message': "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
    },
    {
        'name': 'Shiv S',
        'designation': 'Co-Founder Magik Labs',
        'message': '“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”'
    }
]

export default Testimonials;