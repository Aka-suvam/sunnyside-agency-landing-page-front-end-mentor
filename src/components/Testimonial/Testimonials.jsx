import './Testimonials.css';
import Testimonialscontent from './Testimonialscontent.jsx';
import Emilypic from '../../assets/img/image-emily.jpg';
import Thomaspic from '../../assets/img/image-thomas.jpg';
import Jenniepic from '../../assets/img/image-jennie.jpg';


const Testimonials = () => {
  return (
    <section className='Testimonials'>
      <p className='tes-heading'>Client testimonials</p>
      <div className='Testimonials-detail'>
      <Testimonialscontent Img={Emilypic}  Alt="Emilypic" Para={<>
        We put our trust in Sunnyside and they <br/>delivered, making sure our needs were met<br/> and deadlines were always hit.
        </>} Name="Emily R" Job="  Marketing Director"/>

      <Testimonialscontent Img={Thomaspic}  Alt="Thomaspic" Para={<>Sunnyside’s enthusiasm coupled with their<br/> keen interest in our brand’s success made it<br/> a satisfying and enjoyable experience.</>} Name="Thomas S" Job="Chief Operating Officer"/>

      
  
  
      <Testimonialscontent Img={Jenniepic}  Alt="Jenniepic" Para={<>Incredible end result! Our sales increased<br/> over 400% when we worked with Sunnyside. <br/>Highly recommended!</>}  Name="Jennie F." Job="Business Owner" />


      </div>
    </section> 
  )
}

export default Testimonials
