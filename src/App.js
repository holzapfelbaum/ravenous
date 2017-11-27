import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import BusinessList from './components/BusinessList/BusinessList.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';

const business = {
  imageSrc: ,
  name: ,
  address: ,
  city: ,
  state: ,
  zipCode: ,
  category: ,
  rating: ,
  reviewCount:
}

const businesses = [

];

class App extends Component {
  constructor() {
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
