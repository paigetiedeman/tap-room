import React from 'react';
import NewSeltzerForm from './NewSeltzerForm';
import SeltzerList from './SeltzerList';
import SeltzerDetail from './SeltzerDetail';
import EditSeltzerForm from './EditSeltzerForm';

class SeltzerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainSeltzerList: [],
      selectedSeltzer: null,
      editing: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedSeltzer != null) {
      this.setState({ formVisibleOnPage: false, selectedSeltzer: null});
    }
    else {
      this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }
  }

  handleNewSeltzerToList = (newSeltzer) => {
    const newSeltzerList = this.state.mainSeltzerList.concat(newSeltzer);
    this.setState({formVisibleOnPage: false, mainSeltzerList: newSeltzerList});
  }

  handleChangingSelectedSeltzer = (id) => {
    const selectedSeltzer = this.state.mainSeltzerList.filter(seltzer => seltzer.id === id)[0];
    this.setState({selectedSeltzer: selectedSeltzer});
  }

  handleDeletingSeltzer = (id) => {
    const newSeltzerList = this.state.mainSeltzerList.filter(seltzer => seltzer.id !== id);
    this.setState({mainSeltzerList: newSeltzerList, selectedSeltzer: null});
  }

  handleEditSeltzer = (id) => {
    this.setState({editing: true});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditSeltzerForm seltzer={this.state.selectedSeltzer} />
      buttonText = "Return to Seltzer List";
    } else if (this.state.selectedSeltzer != null) {
      currentlyVisibleState = <SeltzerDetail seltzer={this.state.selectedSeltzer} onClickDelete={this.handleDeletingSeltzer} onClickEdit = {this.handleEditSeltzer}/>
      buttonText = "Return to Seltzer List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSeltzerForm onNewSeltzerCreation={this.handleNewSeltzerToList}/>;
      buttonText = "Return to Seltzer List";
    } else {
      currentlyVisibleState = <SeltzerList seltzerList={this.state.mainSeltzerList} onSeltzerSelection={this.handleChangingSelectedSeltzer}/>
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