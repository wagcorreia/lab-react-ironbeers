import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerCard extends Component {
  state = {};

  render() {
    return (
      <div className="d-flex" key={this.props.idx}>
        <img
          className="img-icon d-inline"
          src={this.props.image}
          alt="beers.png"
        />
        <div className="pt-5">
          <div>{this.props.name}</div>
          <div>{this.props.tagline}</div>
          <div>{this.props.contributed}</div>
          <Link to={`beers/${this.props.id}`}>Details</Link>
        </div>
      </div>
    );
  }
}

export default BeerCard;
