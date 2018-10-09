import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import Home, { Referral } from './containers/Home';
import Error from './containers/Error';

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
              path="/landing/:title" 
              component={Referral} />                                                
            <Route component={Error} />
          </Switch>        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
