import React, { Component } from 'react';
import { connect } from "react-redux";
import '../css/billing.css';

class Billing extends Component {
  invoices = [
    { No: 25978, Type: 'Paid', Total: '244.17€', DueDate: '03/03/2018' },
    { No: 32825, Type: 'Paid', Total: '570.56€', DueDate: '02/13/2018' },
    { No: 87677, Type: 'Paid', Total: '755.93€', DueDate: '10/02/2018' }
  ];
  constructor(props) {
    super(props);
    this.props.dispatch({ type: "SetCurrentPage", currentPage: 'Billing' });
    this.state = {
      getInvoiceByMail: false,
      email: 'myemailsthis@gmail.com',
      invoiceSearch: 'Invoices'
    };
  }
  changedInvoiceByMail = e => {
    this.setState(() => {
      return { getInvoiceByMail: !this.state.getInvoiceByMail };
    });
  };
  emptyEmail = () => {
    this.setState(() => {
      return { email: '' };
    });
  };

  changedEmail = e => {
    this.setState({ email: e.target.value });
    console.log(`changed Email to ${e.target.value}`);
  };

  changedInvoice = () => {};
  searchInvoice = () => {};
  render() {
    const invoiceResults = this.invoices.map((item, index) => {
      return (
        <div className='tr' key={index}>
          <div className="col4 bold">{item.No}</div>
          <div className="col4">{item.Type}</div>
          <div className="col4 bold">{item.Total}</div>
          <div className="col4">{item.DueDate}</div>
        </div>
      );
    });
    return (
      <div className="billingPage">
        <div className="row bold">
          <div className="label">Open Balance:</div>
          <div className="value">38.40€</div>
        </div>
        <div className="clear" />
        <hr />

        <div className="row">
          <div className="label">Bill To Address:</div>
          <div className="value">761 Collins Dam Apt. 069</div>
        </div>
        <div className="clear" />
        <hr />
        <div className="row">
          <div className="label">Get invoices By email:</div>
          <div className="value">
            <label className="switch">
              <input
                type="checkbox"
                checked={this.state.getInvoiceByMail}
                onChange={this.changedInvoiceByMail}
              />
              <span className="slider round" />
            </label>
          </div>
        </div>
        <div className="clear" />
        <div className="row row-padding ">
          <div className="label lightBlue">Mail Address:</div>

          <div>
            {' '}
            <input
              className="emailInput"
              type="text"
              value={this.state.email}
              onChange={this.changedEmail.bind(this)}
            />
            <img
              alt=""
              onClick={this.emptyEmail}
              className="clearEmail"
              src={require(`../img/clear.png`)}
            />
          </div>
        </div>

        <div className="invoicesTable">
          <div className="table">
            <div className="header row">
              <input
                className="invoiceInput"
                type="text"
                value={this.state.invoiceSearch}
                onChange={this.changedInvoice.bind(this)}
              />
              <img
                alt=""
                onClick={this.searchInvoice}
                className="searchIcon"
                src={require(`../img/search.png`)}
              />
            </div>
            <div className="tHead">
              <div className="col4">No</div>
              <div className="col4">Type</div>
              <div className="col4">Total</div>
              <div className="col4">Due Date</div>
              </div>
              <div className='tbody'>
              {invoiceResults}
              </div>
            
          </div>
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
export default connect(mapStoreToProps)(Billing);

