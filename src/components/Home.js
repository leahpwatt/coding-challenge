import React, { Component } from 'react';
import { Link } from "react-router-dom";

const referrals = [
  { id: '1', label: 'Wolverines' },
  { id: '2', label: 'Spartans' },
  { id: '3', label: 'Lakers' },
  { id: '4', label: 'Broncos' },
  { id: '5', label: 'Lions' },
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>Grow the Web with Referrals!</h3>
        {referrals.map(({id, label}) => 
          <div key={`${id}`}>
            <Link 
              to={`/landing/${label}`}>
              {label}
            </Link> 
          </div>
        )}
      </div>
    )
  }
}

export const Referral = ({ match }) => {
  const referral = referrals.find(item => item.label === match.params.label);  
  return (
    <div>
      <h3> { referral.label }</h3>        
      <Link to={`/`}>Back</Link>
    </div>
  )
}