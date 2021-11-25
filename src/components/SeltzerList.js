import React from 'react';
import Seltzer from './Seltzer';
import PropTypes from 'prop-types';

function SeltzerList(props) {
  return (
    <>
      {props.seltzerList.map((seltzer) =>
        <Seltzer whenSeltzerClicked = { props.onSeltzerSelection}
          name={seltzer.name}
          brand={seltzer.brand}
          price={seltzer.price}
          alcoholContent={seltzer.alcoholContent}
          quantity={seltzer.quantity}
          id={seltzer.id}
          key={seltzer.id} />
      )}
    </>
  );
}

SeltzerList.propTypes = {
  seltzerList: PropTypes.array,
  onSeltzerSelection: PropTypes.func
}

export default SeltzerList;