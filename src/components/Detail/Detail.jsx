import    DesktopEggicon from '../../assets/img/desktop/image-transform.jpg';
import  DesktopCupicon from '../../assets/img/desktop/image-stand-out.jpg';

import PhoneEggicon from '../../assets/img/mobile/image-transform.jpg';
import PhoneCupicon from '../../assets/img/mobile/image-stand-out.jpg';
import './Detail.css';
import Left from "./Left";
import Right from './Right';


const Detail = () => {
  return (
    <section className='detail'>
<div className='detailcontents' id='column-reverse' >
      <Left   title={<> Transform your <br/> brand </>}  
          paragraph="We are a full-service creative agency  specializing in helping brands grow fast.
           Engage your clients through compelling  visuals that do most of the marketing for 
           you."

        shortpara="Learn more"
         
      />
      <Right Desktop={DesktopEggicon}   Mobile={PhoneEggicon}/>
      
      </div>
<div className='detailcontents'>
      <Right Desktop={DesktopCupicon}  Mobile={PhoneCupicon}/>
      <Left title={<> Stand out to the right audience </>}  
       paragraph={<> Using a collaborative formula of designers, researchers,  photographers, videographers, and copywriters, we’ll  build and extend your brand in digital places. </>}
      shortpara="Learn more"
      color='soft-red-color'
      />
    
      
</div> 
   
    </section>
  )
}

export default Detail
