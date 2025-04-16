import Fallback from '../../assets/img/image-thomas.jpg';

const Right = ({Desktop,Mobile}) => {
  return (
    <div className='right'>
      <picture>
        <source media="(max-width: 768px)" srcSet={Mobile}/>
        <source media="(min-width: 769px)" srcSet={Desktop}/>

        
     {/* --this will be fallback-img - instead of add another souurce for desktop i use this img element as fallback for desktop or for souce is not applecable*/}
        <img src={Fallback}   alt='img'/>
      </picture>
      
    </div>
  )
}

export default Right;
