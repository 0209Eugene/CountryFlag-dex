import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className="card-container">
    <img className="country-flag-image"
      alt='country'
      src={`https://restcountries.eu/data/${props.country.alpha3Code.toString().toLowerCase()}.svg`} />
    <h2> {props.country.name} </h2>
    <h3> Capital: {props.country.capital} </h3>
  </div>
);