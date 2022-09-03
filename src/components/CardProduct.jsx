import React from 'react'
import {Link} from 'react-router-dom';
import StarRating from './StarRating';
import '../styles/cardItem.scss'

const CardProduct = ({item}) => {
  //console.log(item);
  return (
    <div className='card-item'>
      <Link to={`/product/${item.id}`}>
      <img src={item.thumbnail} alt={item.description} />
      <div className='card-info'>
        <p>
        {item.title}
        </p>
          <StarRating rating={item.rating}/>
      </div>
      </Link>
    </div>
  )
}

export default CardProduct