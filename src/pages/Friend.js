import React, { Component } from 'react';
import { connect } from "react-redux";
import '../App.css';

class Friend extends Component {
  constructor(props){
    super(props);
    this.props.dispatch({ type: "SetCurrentPage", currentPage: 'Friend' });
  }
  render() {
    return (
      <div>
        <h1>Friend </h1>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(Friend);
