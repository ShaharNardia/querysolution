import React, { Component } from 'react';
import { connect } from "react-redux";
import '../App.css';

class Delivery extends Component {
  constructor(props){
    super(props);
    this.props.dispatch({ type: "SetCurrentPage", currentPage: 'Delivery' });
  }
  render() {
    return (
        <div>
        <h1>Delivery </h1>
        </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(Delivery);
