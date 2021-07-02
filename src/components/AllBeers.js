import React, { Component } from 'react';
import axios from 'axios';
import BeerCard from './BeerCard';

class AllBeers extends Component {
  state = {
    allBeers: [],
  };

  async componentDidMount() {
    let allBeers = await this.getAllBeers();

    this.setState({
      allBeers: allBeers,
    });
  }

  getAllBeers = async () => {
    const response = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers'
    );

    return response.data;
  };

  render() {
    return (
      <div>
        {this.state.allBeers.map((beer, idx) => {
          return (
            <div className="d-flex" key={idx}>
              <BeerCard
                idx={idx}
                image={beer.image_url}
                name={beer.name}
                tagline={beer.tagline}
                id={beer._id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
