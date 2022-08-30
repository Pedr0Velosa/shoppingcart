import React from 'react'

const CardProduct = ({item}) => {
  console.log(item);
  return (
    <div className='card-item'>
      {item.title}
    </div>
  )
}

export default CardProduct