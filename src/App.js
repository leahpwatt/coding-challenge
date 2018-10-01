import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Home, { Referral } from './components/Home';
import Error from './components/Error';

class App extends Component {
  render() {    
    return (
      <BrowserRouter>
        <div>          
          <Switch>
            <Route 
              path="/" 
              exact 
              component={Home} />          
            <Route 
              path="/landing/:label" 
              component={Referral} />                                                
            <Route component={Error} />
          </Switch>        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
