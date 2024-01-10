import './AboutUs.css'

import iphone from '../../images/iphone.svg';

const AboutUs = () => {
  return (
    <div className='aboutus__wrapper'>
      <div className="aboutus__header">О Нас</div>
      <img className="aboutus__image" src={iphone}></img>
    </div>);
}

export default AboutUs;