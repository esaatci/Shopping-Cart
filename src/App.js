import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SizeFilter extends React.Component{

  render(){
    return(
      <div>
        size
        <p>
          <input type="checkbox" />
          {' '}
          X
          <input type="checkbox" />
          {' '}
          XL
          <input type="checkbox" />
          {' '}
          XS
          <input type="checkbox" />
          {' '}
          M
          <input type="checkbox" />
          {' '}
          ML
        </p>
      </div>
    );

  }
}
class ProductGrid extends React.Component{
  render() {
    const product = this.props.product;
    return (
      <div>
      </div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SizeFilter/>
      </div>
    );
  }
}

export default App;
