import React from 'react';
import CARD_DATA from './card.data';
import './card.styles.css';

const Card = (props) => {
  const images = CARD_DATA;
  const imgSrc = images[props.monster.id - 1].imageUrl;
  return (
    <div className='card-container'>
      <img src={imgSrc} alt='monster' />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};

export default Card;
