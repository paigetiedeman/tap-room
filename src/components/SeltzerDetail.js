import React from 'react';
import PropTypes from 'prop-types';

function SeltzerDetail(props) {
  const { seltzer } = props;
  return (
    <>
      <h1>Seltzer Detail</h1>
      <div className="details">
        <h3>{seltzer.name}</h3>
        <p>Brand: {seltzer.brand}</p>
        <p>$ {seltzer.price}</p>
        <p>ABV: {seltzer.alcoholContent}%</p>
        <p>{seltzer.quantity} pints left</p>
      </div>
      <button onClick={() => props.onClickDelete(seltzer.id)} className="btn btn-dark">Remove Seltzer</button>
      <button onClick={ props.onClickEdit } className="btn btn-dark">Update Seltzer</button>
    </>
  )
}

SeltzerDetail.propTypes = { 
  seltzer: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func
}

export default SeltzerDetail;