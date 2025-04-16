import DesktopMilkbottles from '../../assets/img/desktop/image-gallery-milkbottles.jpg';
import DesktopCone from '../../assets/img/desktop/image-gallery-cone.jpg'
import DesktopOrange from   '../../assets/img/desktop/image-gallery-orange.jpg';
import DesktopSugarcubes  from   '../../assets/img/desktop/image-gallery-sugarcubes.jpg';

import PhoneMilkbottle from '../../assets/img/mobile/image-gallery-milkbottles.jpg';
import PhoneOrange   from '../../assets/img/mobile/image-gallery-orange.jpg';
import PhoneCone     from '../../assets/img/mobile/image-gallery-cone.jpg';
import PhoneSugarcubes from '../../assets/img/mobile/image-gallery-sugar-cubes.jpg';

import Imgcontainer from './Imgcontainer';

import  './ImageGallery.css';


const ImageGallery = () => {
  return (      
 <section className='image-gallery'>
 <div className='row-one'>  

<Imgcontainer Desktop={DesktopMilkbottles}  Mobile={PhoneMilkbottle}  Alt="image-gallery-milkbottles"  />

<Imgcontainer Desktop={DesktopOrange}  Mobile={PhoneOrange}    Alt="image-gallery-orange"/>
</div> 
<div className='row-two'>
<Imgcontainer Desktop={DesktopCone}   Mobile={PhoneCone}  Alt="image-gallery-cone"/>  
<Imgcontainer Desktop={DesktopSugarcubes}  Mobile={PhoneSugarcubes}  Alt='image-gallery-sugarcubes'/>
</div>
</section>
  )
}

export default ImageGallery
