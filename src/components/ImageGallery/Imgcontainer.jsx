import Fallbackimg from '../../assets/img/image-thomas.jpg';


const Imgcontainer = ({Desktop,Mobile,Alt}) => {
  return (
  
    <div className="image-container">
  
    <picture>
    
      <source  media="(max-width: 768px)" srcSet= {Mobile}/>
      <source  media="(min-width: 769px)" srcSet= {Desktop}/>

       <img src={Fallbackimg} alt={Alt}/>

   </picture>

</div> 
   
    )
}

export default Imgcontainer
