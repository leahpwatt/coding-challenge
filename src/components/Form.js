import React from "react";
import {  
  Button,
  Input
} from 'semantic-ui-react';

export default class Form extends React.Component {
  state = {
    title: "",
    clicks: 0,
  };

  change = e => {    
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);      
    this.setState({
      title: "",
      clicks: 0,
    });
  };

  render() {
    return (
      <form className="form">        
        <Input          
          className="new-topic"                
          name="title"
          value={this.state.title}          
          placeholder={'Enter a title'}
          onChange={e => this.change(e)}
          action={<Button disabled={!this.state.title} onClick={e => this.onSubmit(e)}>Click to Add</Button>} />              
      </form>
    );
  }
}
