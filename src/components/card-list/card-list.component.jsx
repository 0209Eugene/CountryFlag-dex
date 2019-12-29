import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <div className="card-list">
    {props.countries.map(country => (
      <Card key={country.alpha3Code} country={country} />
    ))}
  </div>
);