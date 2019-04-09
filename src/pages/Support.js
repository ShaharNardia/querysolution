import React, { Component } from 'react';
import { connect } from "react-redux";
import '../App.css';

class Support extends Component {
  constructor(props){
    super(props);
    this.props.dispatch({ type: "SetCurrentPage", currentPage: 'Support' });
  }
  render() {
    return (
      <div>
        <h1>Support</h1>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(Support);
