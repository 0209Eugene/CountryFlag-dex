import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ labelTitle, placeholder, handleChange }) => (
  <label> {labelTitle}
    <input
        className = 'search'
        type='search' 
        placeholder= {placeholder}
        onChange = {handleChange}
      />
    </label>
)