import React from 'react';
import PropTypes from 'prop-types';

function SeltzerDetail(props) {
  const { seltzer } = props;
  return (
    <>
      <h1>Seltzer Detail</h1>
      <h3>{seltzer.name}</h3>
      <li>{seltzer.brand}</li>
      <li>$ {seltzer.price}</li>
      <li>{seltzer.alcoholContent}%</li>
      <li>{seltzer.quantity}</li>
      <button onClick={ props.onClickDelete} className="btn btn-dark">Remove Seltzer</button>
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