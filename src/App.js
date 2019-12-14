import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			countries: [
				{
					name: 'Japan',
					id: 1
				},
				{
					name: 'Canada',
					id: 2
				},
				{
					name: 'Indonesia',
					id: 3
				}
			]
		};
	}
	render() {
		return (
      <div className="App">{
        this.state.countries.map((country) =>
          <h1 key={country.id}>{country.name}</h1>
        )}
        <p>Next content is SPA</p>
      </div>
		);
	}
}
export default App;
