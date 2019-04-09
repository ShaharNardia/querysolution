import React, { Component } from 'react';
import IconsRepository from '../Icons/IconsRepository';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.icon = new IconsRepository();
    this.state = { currentPage: '' };
    console.log();
  }

  iconClick = (e, item) => {
    this.setState({ currentPage: e.text });
  };
  static getDerivedStateFromProps(state, props) {
    return { currentPage: state.store.currentPage };
    //console.log(state.store);
  }
  render() {
    const iconsArray = this.icon.FooterIcons.map((item, index) => {
      return (
        <div key={index} className="footerIconDiv">
          <Link onClick={this.iconClick.bind(this, item)} to={`/${item.text}`}>
            <img alt="" src={item.text === this.state.currentPage ? item.filled : item.empty} />
            <div className="iconTitle">{item.text}</div>
          </Link>
        </div>
      );
    });
    return <div className="Footer">{iconsArray}</div>;
  }
}
const mapStoreToProps = state => {
  return {
    store: state
  };
};
export default connect(mapStoreToProps)(Footer);
