import React from 'react';
import PropTypes from 'prop-types';

function Seltzer(props){
    const styledCard = {
      backgroundColor: 'tomato',
      textAlign: 'center',
      border: '2px solid white',
      color: 'white',
      float: 'left',
      padding: '20px',
      margin: '10px'
    }

    if (props.quantity <= 0) {
    return (
      <>
        <div style={styledCard}>
          <h2>{props.name}</h2>
          <p><strong>Brand:</strong> {props.brand}</p>
          <p>$ {props.price}/per pint</p>
          <p>ABV: {props.alcoholContent}%</p>
          <p>SOLD OUT</p>
          <br/>
          <button onClick={() => props.whenSeltzerClicked(props.id)}>View Details</button>
        </div>
      </>
    )
    }
      return (
        <>
          <div style={styledCard}>
            <h2>{props.name}</h2>
            <p><strong>Brand:</strong> {props.brand}</p>
            <p>$ {props.price}/per pint</p>
            <p>ABV: {props.alcoholContent}%</p>
            <p>{props.quantity} pints left</p>
            <br/>
            <button onClick={() => props.whenSeltzerClicked(props.id)}>View Details</button>
            <button onClick={() => props.onClickBuy(props.id)}>Sell Pint</button>
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
  whenSeltzerClicked: PropTypes.func,
  onClickBuy: PropTypes.func,
}

export default Seltzer;