import React from 'react';
import Seltzer from './Seltzer';
import PropTypes from 'prop-types';

function SeltzerList(props) {
  return (
    <>
      {props.SeltzerList.map((seltzer) =>
        <Seltzer name={seltzer.name}
          brand={seltzer.brand}
          price={seltzer.price}
          alcoholContent={seltzer.alcoholContent}
          quantity={seltzer.quantity}
          id={seltzer.id}/>
      )}
    </>
  );
}

SeltzerList.propTypes = {
  seltzerList: PropTypes.array
}

export default SeltzerList;