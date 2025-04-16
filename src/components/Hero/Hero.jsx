import Arrowdown from '../../assets/img/icon-arrow-down.svg';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'> 
         
         <p className='hero-title'>  We are creatives </p>
          <img src={Arrowdown}  alt='arrow-icon' className='arrow-icon'/>
           
         
    </section>
  )
}

export default Hero
