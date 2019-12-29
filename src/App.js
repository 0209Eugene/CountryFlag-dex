import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			countries: [],
			searchField: ''
		};
	}

	convertTextToLowerCase = () => {
    var text = this.state.defaultText;
    var lowercasetext = text.toLowerCase();//To convert Lower Case
    this.setState({ defaultText: lowercasetext });
  };

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(names => this.setState({ countries: names }));
}

	render() {
		const { countries, searchField } = this.state;
		const filterdCountries = countries.filter(country =>
			country.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className='App'>
				<SearchBox
					labelTitle = 'Name Search'
					placeholder ='search country names'
					handleChange = {e => this.setState({ searchField: e.target.value })}/>
				<CardList countries = {filterdCountries} />
      </div>
		);
	}
}
export default App;
