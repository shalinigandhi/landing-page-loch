import { IconBell, IconEye } from '../../lib/icons';
import Slider from '../Slider/Slider';
import cohortsImage from '../../images/cohorts.svg';
import './landing-page.scss';

const LandingPage = () => {

    return (
        <div className="landing-page-container">
            <div className="container">
                {
                    contentList && contentList.length && contentList.map((content, index) => (
                        <section className="section" key={index}>
                            {
                                index === 1 ?
                                    <div className="content-image-wrapper">
                                        <img className="content-image" src={cohortsImage} alt="Cohorts"/>
                                    </div> :
                                    <Slider />
                            }
                            <div className={"content-container " + (index===1 && "text-right")}>
                                {content.icon}
                                <h3 className="content-heading">{content.heading}</h3>
                                <p className="content-description">{content.description}</p>
                            </div>
                        </section>
                    ))
                }
                <section className="section">

                </section>
            </div>
        </div>
    )
}

const contentList = [
    {
        'icon': <IconBell />,
        'heading': 'Get notified when a highly correlated whale makes a move',
        'description': 'Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.'
    },
    {
        'icon': <IconEye />,
        'heading': 'Watch what the whales are doing',
        'description': 'All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.'
    }
]

export default LandingPage;


