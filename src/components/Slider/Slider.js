import Slider from "react-slick";
import { IconBell1, IconStats, IconClock, IconArrowDown, IconCheckmark } from '../../lib/icons';
import './slider.scss';

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


const CardSlider = () => {
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="content-card-container card-one">
                    <div className="content-card-wrapper">
                        <IconBell1 />
                        <p className="description">We’ll be sending notifications to you here</p>
                        <input type="text" defaultValue="hello@loch.one" className="card-input"/>
                    </div>
                    <button className="save-btn">Save</button>
                </div> 
                <div className="content-card-container card-two">
                    <div className="content-card-wrapper">
                        <IconStats />
                        <p className="description">Notify me when any wallets move more than</p>
                        <div className="select-container">
                            <select className="card-select">
                                <option>$1,000.00</option>
                                <option>$2,000.00</option>
                                <option>$3,000.00</option>
                            </select>
                            <IconArrowDown/>
                        </div>
                    </div>
                    <button className="save-btn"><IconCheckmark/></button>
                </div> 
                <div className="content-card-container card-three">
                    <div className="content-card-wrapper">
                        <IconClock />
                        <p className="description">Notify me when any wallet dormant for</p>
                        <div className="select-container">
                            <select className="card-select">
                                <option>&#62; 30 days</option>
                                <option>&#62; 20 days</option>
                                <option>&#62; 10 days</option>
                            </select>
                            <IconArrowDown />
                        </div>
                        <p className="description description-active">becomes active</p>
                    </div>
                    <button className="save-btn"><IconCheckmark/></button>
                </div> 
            </Slider>
        </div>
    )
}

export default CardSlider;