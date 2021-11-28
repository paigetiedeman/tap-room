import React from 'react';
import PropTypes from 'prop-types';

function Seltzer(props){
    const styledCard = {
      backgroundColor: '#122212',
      textAlign: 'center',
      border: '2px solid white',
      color: 'white'
    }

  return (
    <>
      <div onClick= {() => props.whenSeltzerClicked(props.id)} style={styledCard}>
        <h2>{props.name}</h2>
        <li>{props.brand}</li>
        <li>$ {props.price}</li>
        <li>{props.alcoholContent}%</li>
        <li>{props.quantity}</li>
      </div>
    </>
  )
}

Seltzer.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenSeltzerClicked: PropTypes.func
}

export default Seltzer;