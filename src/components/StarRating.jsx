import React from 'react'


const StarRating = ({rating}) => {
  

  return (
    <div className='rating'>
      <div className='stars-outer'>
        <div className='stars-inner' style={{'--rating': rating + "%"}}/>
      </div>
      <span>{rating}</span>
    </div>
  )
}

export default StarRating