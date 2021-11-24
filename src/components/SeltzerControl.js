import React from 'react';
import NewSeltzerForm from './NewSeltzerForm';
import SeltzerList from './SeltzerList';

class SeltzerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSeltzerList: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleNewSeltzerToList = (newSeltzer) => {
    const newSeltzerList = this.state.mainSeltzerList.concat(newSeltzer);
    this.setState({formVisibleOnPage: false, mainSeltzerList: newSeltzerList});
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSeltzerForm />;
      buttonText = "Return to Seltzer List";
    } else {
      currentlyVisibleState = <SeltzerList seltzerList={this.state.mainSeltzerList}/>
      buttonText = "Add New Seltzer";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-dark">Add Seltzer</button>
      </>
    );
  }
}