import React from 'react'

const Testimonialscontent = ({Img,Alt,Para,Name,Job}) => {
  return (
    <div className='testimonialscontent'>
        <div className='testimonial-img'>
            <img src={Img} alt={Alt}/>
        </div>
        <p className='para'>{Para}</p>
        <div className='names_jobrole'>
            <p className='name'>{Name}</p>
            <p className='job'>{Job}</p>
        </div>
      
    </div>
  )
}

export default Testimonialscontent
