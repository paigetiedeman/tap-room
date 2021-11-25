import React from 'react';
import NewSeltzerForm from './NewSeltzerForm';
import SeltzerList from './SeltzerList';
import SeltzerDetail from './SeltzerDetail';

class SeltzerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSeltzerList: [],
      selectedSeltzer: null
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

  handleChangingSelectedSeltzer = (id) => {
    const selectedSeltzer = this.state.mainSeltzerList.filter(seltzer => seltzer.id === id)[0];
    this.setState({selectedSeltzer: selectedSeltzer});
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedSeltzer != null) {
      currentlyVisibleState = <SeltzerDetail seltzer={this.state.selectedSeltzer} />
      buttonText = "Return to Seltzer List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSeltzerForm />;
      buttonText = "Return to Seltzer List";
    } else {
      currentlyVisibleState = <SeltzerList seltzerList={this.state.mainSeltzerList}/>
      buttonText = "Add New Seltzer";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick} className="btn btn-dark">{buttonText}</button>
      </>
    );
  }
}

export default SeltzerControl;