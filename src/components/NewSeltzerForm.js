import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

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
      <ReusableForm
      formSubmissionHandler={handleNewSeltzerFormSubmission}
      buttonText = "Add!" />     
    </>
  );
}

NewSeltzerForm.propTypes = {
  onNewSeltzerCreation: PropTypes.func
}

export default NewSeltzerForm;