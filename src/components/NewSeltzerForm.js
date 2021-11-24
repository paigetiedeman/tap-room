import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewSeltzerForm(props) {

  function handleNewSeltzerFormSubmission(event) {
    event.preventDefault();
    props.onNewSeltzerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  
  return (
    <>
      <form onSubmit={handleNewSeltzerFormSubmission}>
        <input type="text" name="name" placeholder="Seltzer Name" className="form-control"/>
        <br />
        <input type="text" name="brand" placeholder="San Juan" className="form-control"/>
        <br/>
        <input type="number" name="price" placeholder="$6.99" className="form-control"/>
        <br/>
        <input type="number" name="alcoholContent" placeholder="8%" className="form-control"/>
        <br/>
        <input type="number" name="quantity" placeholder="124 pints" className="form-control"/>
        <br />
        <button type="submit" className="btn btn-dark">Add!</button>
      </form>
    </>
  );
}

NewSeltzerForm.propTypes = {
  onNewSeltzerCreation: PropTypes.func
}

export default NewSeltzerForm;