import NextDeliveryBox from '../components/NextDeliveryBox';
import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/home.css';


class Home extends Component {
  backgroundImg = {
    backgroundImage: `url(${require(`../img/homePageImg.png`)})`,
    backgroundRepeat: 'no-repeat',
    height: '90%',
    backgroundSize: '77%',
    backgroundPosition: '45% 97%'
  };
  heightMax = { height: '100%' };
  constructor(props) {
    super(props);
    this.props.dispatch({ type: "SetCurrentPage", currentPage: 'Home' });
  }
  render() {
    return (
      <div style={this.heightMax}>
        <div className="upperPart">
          <div className="balance">
            Open Balance:
            <h1>-38.40€</h1>
          </div>
        </div>
        <NextDeliveryBox billingId="1" />
        <div style={this.backgroundImg} className="bottomPart">
          <div className="msg">LET'S GO FOR A LONG WALK THIS WEEKEND.</div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(Home);
