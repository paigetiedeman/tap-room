import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditSeltzerForm(props) {
  const { seltzer } = props;

  function handleEditingSeltzerSubmission(event){
    event.preventDefault();
    props.onEditSeltzer({ name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      quantity: event.target.quantity.value,
      id: seltzer.id
    });
  }
  return (
    <>
      <ReusableForm
      formSubmissionHandler={handleEditingSeltzerSubmission}
      buttonText="Edit Seltzer" />
    </>
  );
}

EditSeltzerForm.propTypes = {
  seltzer: PropTypes.object,
  onEditSeltzer: PropTypes.func
}
export default EditSeltzerForm;