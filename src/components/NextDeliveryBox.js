import React, { Component } from 'react';
import IconsRepository from '../Icons/IconsRepository';
import { Link } from 'react-router-dom';
import '../css/nextDeliveryBox.css';

class NextDeliveryBox extends Component {
  constructor(props) {
    super(props);
    this.icon = new IconsRepository();
  }

  goToBilling = e => {
    
  };
  render() {
    return (
      <Link className="box" onClick={this.goToBilling} to={`/billing/${this.props.billingId}`}>
        <div className="icon">
          <img className="" alt="" src={this.icon.General.delivered} />
          <div>Next Delivery:</div>
        </div>
        <div className="details">
          <h2>01.01.2019</h2>
          <div>Rue du Cornet 6 B-4800 VERVIERS</div>
        </div>
        <div className="goIcon">></div>
      </Link>
    );
  }
}
export default NextDeliveryBox;
