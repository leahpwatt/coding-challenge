import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Form from "./Form";
import Table from "./Table";

export default class Home extends Component {
  state = {
    data: [
      {
        "key": 1,    
        "title": "Wolverines",
        "value": "Wolverines",   
        "clicks": 4,           
      },
      {
        "key": 2,    
        "title": "Spartans",
        "value": "Spartans",        
        "clicks": 0,           
      },
      {
        "key": 3,    
        "title": "Lakers",
        "value": "Lakers",     
        "clicks": 0,              
      },      
    ],
    editIdx: -1,    
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };
  
  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));    
  };  

  render() {
    const { data } = this.state;    
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1>Grow the Web with Referrals!</h1>
          <Form onSubmit={submission => 
            this.setState({
              data: [...this.state.data, submission]
            })} />
          <Table 
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange} 
            increment={this.increment}      
            data={this.state.data}
            header={[
              {
                name: "Link Title", 
                prop: 'title',
              },
              {
                name: "Clicks",
                prop: 'clicks',
              }                                                        
            ]} 
          />     
          {data === 0 &&
            <h3>You currently have no referrals. Enter a new referral, then 'Click to Add' above.</h3>
          }                     
        </div>
      </MuiThemeProvider>
    )
  }
}

export const Referral = ({ match }) => {  
  return (
    <div className="container">
      <h1>{match.params.title} are Awesome!</h1>        
      <Link to={`/`}>Back</Link>      
    </div>
  )
}