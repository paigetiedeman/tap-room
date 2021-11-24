import React from 'react';
import PropTypes from 'prop-types';

function Seltzer(props){
  return (
    <>
      <h2>{props.name}</h2>
      <li>{props.brand}</li>
      <li>$ {props.price}</li>
      <li>{props.alcoholContent}%</li>
      <li>{props.quantity}</li>
    </>
  )
}

Seltzer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number
}

export default Seltzer;