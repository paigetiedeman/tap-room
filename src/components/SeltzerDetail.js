import React from 'react';
import PropTypes from 'prop-types';

function SeltzerDetail(props) {
  const { seltzer, onClickingDelete } = props;
  return (
    <>
      <h1>Seltzer Detail</h1>
      <h3>{seltzer.name}</h3>
      <li>{seltzer.brand}</li>
      <li>$ {seltzer.price}</li>
      <li>{seltzer.alcoholContent}%</li>
      <li>{seltzer.quantity}</li>
      <button onClick={() => onClickingDelete(seltzer.id)} className="btn btn-dark">Remove Seltzer</button>
    </>
  )
}

SeltzerDetail.propTypes = { 
  seltzer: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default SeltzerDetail;