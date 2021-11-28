import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
        <form onSubmit={props.formSubmissionHandler}>
          <label for="name">Name:</label>
          <input type="text" name="name" placeholder="Seltzer Name" className="form-control"/>
          <br />
          <label for="brand">Brand/Company:</label>
          <input type="text" name="brand" placeholder="San Juan" className="form-control"/>
          <br/>
          <label for="price">Price per Pint:</label>
          <input type="number" name="price" placeholder="$6.99" className="form-control"/>
          <br/>
          <label for="alcoholContent">ABV:</label>
          <input type="number" name="alcoholContent" placeholder="8%" className="form-control"/>
          <br/>
          <label for="quantity">Pints Per Keg:</label>
          <input type="number" name="quantity" placeholder="124 pints" className="form-control"/>
          <br />
          <button type="submit" className="btn btn-dark">{props.buttonText}</button>
          <br />
      </form>
    </> 
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;