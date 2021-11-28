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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSeltzer = (seltzerToEdit) => {
    const editMainSeltzer = this.state.mainSeltzerList.filter(seltzer => seltzer.id !== this.state.selectedSeltzer.id)
    .concat(seltzerToEdit);
    this.setState({ 
      mainSeltzerList: editMainSeltzer,
      editing: false,
      selectedSeltzer: null
    });
  }

  handleSellPint = (id) => {
    let selectedSeltzer = this.state.mainSeltzerList.find(seltzer => seltzer.id === id);
    selectedSeltzer.quantity --;
    const newSeltzerList = this.state.mainSeltzerList.map((seltzer) => {return seltzer.id === id ? selectedSeltzer : seltzer});
    this.setState({ mainSeltzerList: newSeltzerList});
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditSeltzerForm seltzer={this.state.selectedSeltzer} onEditSeltzer = {this.handleEditingSeltzer}/>
      buttonText = "Return to Seltzer List";
    } else if (this.state.selectedSeltzer != null) {
      currentlyVisibleState = <SeltzerDetail seltzer={this.state.selectedSeltzer} onClickDelete={this.handleDeletingSeltzer} onClickEdit = {this.handleEditClick}/>
      buttonText = "Return to Seltzer List";
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewSeltzerForm onNewSeltzerCreation={this.handleNewSeltzerToList}/>
      buttonText = "Return to Seltzer List";
    } else {
      currentlyVisibleState = <SeltzerList seltzerList={this.state.mainSeltzerList} onSeltzerSelection={this.handleChangingSelectedSeltzer} onClickBuy = {this.handleSellPint}/>
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