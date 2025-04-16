
const Left = ({title,paragraph,shortpara,color}) => {



  return (
    <div className='left' >
     <p className='left-title'>{title} </p>
            <p className='left-para'>{paragraph}</p>
            <p className= {`left-para-two ${color} `}> {shortpara}</p>
    </div>
    
  )
}

export default Left
