import React, { Component } from 'react';
import DetailsCard from './DetailsCard';
import axios from 'axios';

class BeersDetails extends Component {
  state = {
    oneBeer: [],
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    let oneBeer = await this.getOneBeer(id);
    // console.log(oneBeer);
    console.log(id);

    this.setState({
      oneBeer: oneBeer,
    });
  }

  getOneBeer = async (id) => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    console.log(response.data);
    return response.data;
  };

  render() {
    return (
      <div>
        <DetailsCard
          idx={this.id}
          image={this.state.oneBeer.image_url}
          name={this.state.oneBeer.name}
          tagline={this.state.oneBeer.tagline}
          first_brewed={this.state.oneBeer.first_brewed}
          attenuation_level={this.state.oneBeer.attenuation_level}
          description={this.state.oneBeer.description}
        />
      </div>
    );
  }
}

export default BeersDetails;
