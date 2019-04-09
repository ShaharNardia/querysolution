import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Billing from './pages/Billing';
import Delivery from './pages/Delivery';
import Friend from './pages/Friend';
import Support from './pages/Support';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import mainreducer from './mainreducer.js';

var appStore = createStore(mainreducer);
class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <Header />
          <div className="App">
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" component={Home} />
              <Route path="/billing" component={Billing} />
              <Route path="/delivery" component={Delivery} />
              <Route path="/support" component={Support} />
              <Route path="/friend" component={Friend} />
            </Switch>
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
